class LEDMatrix {

    constructor(width, height, container, matrixType, ...underlyingMatrixArguments) {
        this.width = width;
        this.height = height;
        this.scrollIntervals = [];
        matrixType = matrixType || DOMBasedLEDMatrix;

        this.matrix = new matrixType(width, height, container, ...underlyingMatrixArguments);

        this.inverted = false;
    }

    determineDistance(prevChar, currChar, fontname, fontSpacing) {
        let width = 0;

        fontname = this.getFont(fontname);

        if (fontSpacing) {
            if (fontSpacers[fontname]) {
                return fontSpacers[fontname](prevChar, currChar, fontSpacing);
            } else {
                return fontSpacing;
            }
        } else {
            if (fontSpacers[fontname]) {
                return fontSpacers[fontname](prevChar, currChar, 1);
            } else {
                return 1;
            }
        }
    }

    getFont(fontname) {
        return fontname.match(/^([^;]+)/)[1];
    }

    getFontModifiers(fontname) {
        return (fontname.match(/^[^;]+;(.+)/) || ['',''])[1].split(',').map(e => e.split('='));
    }

    measureText(text, fontname, fontSpacing) {
        let font = fonts[this.getFont(fontname)];
        if (!font) return null;

        let modifiers = this.getFontModifiers(fontname);
        let spaceWidth = modifiers.filter(e => e[0] === 'Space-Width')[0];
        if (spaceWidth !== undefined) spaceWidth = spaceWidth[1] * 1;

        let chars = [...text];

        let totalWidth = chars.reduce((accuWidth, char, pos) => {
            if (pos !== 0) {
                accuWidth += this.determineDistance(chars[pos - 1], char, fontname, fontSpacing);
            }

            if (!font[char]) console.log(char, fontname)
            if (char === ' ' && spaceWidth !== undefined)
                accuWidth += spaceWidth;
            else
                accuWidth += (font[char].data || font[char])[0].length;

            return accuWidth;
        }, 0);

        let height = chars.map(char => (font[char].data || font[char]).length).sort((a, b) => a - b).reverse()[0];

        let offset = chars.map(char => (font[char].offset || 0)).sort((a, b) => a - b)[0];

        return {width: totalWidth, height, offset};
    }

    drawText(text, fontname, fontSpacing, dx, dy, colour) {
        let font = fonts[this.getFont(fontname)];
        let chars = [...text];
        let measure = this.measureText(text, fontname, fontSpacing);
        let {width, height} = measure;
        this.clearRectangle(dx, dy, width, height, colour);

        let modifiers = this.getFontModifiers(fontname);
        let spaceWidth = modifiers.filter(e => e[0] === 'Space-Width')[0];
        if (spaceWidth !== undefined) spaceWidth = spaceWidth[1] * 1;

        let x = dx;

        chars.forEach((char, pos) => {
            let spacing = 0;
            if (pos !== 0)
                spacing = this.determineDistance(chars[pos - 1], char, fontname, fontSpacing);

            let override = fontSpacing == spacing || spacing == 0;

            x += spacing;

            if (char == ' ' && spaceWidth !== undefined) {
                x += spaceWidth;
                return;
            }

            if (font[char].offset)
                this.draw2DArray(font[char].data, x, dy + font[char].offset, colour, override);
            else
                this.draw2DArray(font[char], x, dy, colour, override);

            x += (font[char].data || font[char])[0].length;
        });
    }

    draw2DArray(array, x, y, colour, override) {
        override = override == null ? true : override;
        array.forEach((row, dy) => {
            row.forEach((led, dx) => {
                if (led)
                    this.matrix.setLEDState(x + dx, y + dy, !this.inverted, colour);
            });
        });
    }

    clearRectangle(x, y, w, h, colour) {
        if (this.matrix.clearRectangle) this.matrix.clearRectangle(x, y, w, h, colour);

        else for (let dx = 0; dx < w; dx++) {
            for (let dy = 0; dy < h; dy++) {
                this.matrix.setLEDState(x + dx, y + dy, this.inverted, colour);
            }
        }
    }

}

class CanvasBasedLEDMatrix {

    constructor(width, height, canvas, scaleFactor) {
        canvas.width = width * scaleFactor;
        canvas.height = height * scaleFactor;
        this.scaleFactor = scaleFactor;

        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }

    clearRectangle(x, y, w, h, colour) {
        this.context.clearRect(x * this.scaleFactor, y * this.scaleFactor, w * this.scaleFactor, h * this.scaleFactor);
    }

    setLEDState(x, y, state, colour) {
        this.context.fillRect(x * this.scaleFactor, y * this.scaleFactor, this.scaleFactor, this.scaleFactor);
    }

    getLEDState(x, y) {
        return !!this.context.getImageData(x * this.scaleFactor, y * this.scaleFactor, 1, 1).data[0];
    }

}

class DOMBasedLEDMatrix {

    constructor(width, height, container) {
        this.leds = [];
        this.width = width;
        this.height = height;

        let totalLEDCount = width * height;

        let cells = [];

        for (let ledNumber = 0; ledNumber < totalLEDCount; ledNumber++) {
            let ledCell = document.createElement('div');
            ledCell.className = 'led-cell';

            let led = document.createElement('div');
            led.className = 'led led-off';
            ledCell.appendChild(led);

            this.leds.push(led);
            cells.push(ledCell)
        }

        this.leds.forEach(led => {
            container.appendChild(led);
        });
    }

    static twodimToFlat(x, y, width) {
        return y * width + x;
    }

    static flatToTwodim(n, width) {
        return { x: n % width, y: Math.floor(n / width) };
    }

    setLEDState(x, y, state, colour) {
        if (x >= this.width || x < 0 || y >= this.height || y < 0) return;
        let pixel = this.leds[DOMBasedLEDMatrix.twodimToFlat(x, y, this.width)];
        if (!state && pixel.className.includes('-coloured')) {
            pixel.style.backgroundColor = null;
        }

        let className = state ? 'led led-on' : 'led led-off';
        if (state && colour) {
            className += '-coloured';
            pixel.style.backgroundColor = (typeof colour == 'number' ? '#' : '') + colour.toString('16');
        }
        pixel.className = className;
    }

    getLEDState(x, y) {
        if (x >= this.width || x < 0 || y >= this.height || y < 0) return false;
        return this.leds[DOMBasedLEDMatrix.twodimToFlat(x, y, this.width)].className.includes('led led-on');
    }

}
