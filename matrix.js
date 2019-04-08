class LEDMatrix {

    constructor(width, height, container) {
        this.width = width;
        this.height = height;
        this.matrix = new DOMBasedLEDMatrix(width, height, leds => {
            leds.forEach(led => {
                container.appendChild(led);
            });
        });

        this.inverted = false;
    }

    determineDistance(prevChar, currChar, fontname, fontSpacing) {
        let width = 0;

        if (fontSpacing) {
            if (fontSpacers[fontname])
                return fontSpacers[fontname](prevChar, currChar, fontSpacing);
             else
                return fontSpacing;
        } else {
            if (fontSpacers[fontname]) {
                return fontSpacers[fontname](prevChar, currChar, 1);
            } else {
                return 1;
            }
        }
    }

    measureText(text, fontname, fontSpacing) {
        let font = fonts[fontname];
        let chars = [...text];

        let totalWidth = chars.reduce((accuWidth, char, pos) => {
            if (pos !== 0) {
                accuWidth += this.determineDistance(chars[pos - 1], char, fontname, fontSpacing);
            }

            if (!font[char]) console.log(char, fontname)
            accuWidth += (font[char].data || font[char])[0].length;

            return accuWidth;
        }, 0);

        let height = chars.map(char => (font[char].data || font[char]).length).sort((a, b) => a - b).reverse()[0];

        let offset = chars.map(char => (font[char].offset || 0)).sort((a, b) => a - b)[0];

        return {width: totalWidth, height, offset};
    }

    drawText(text, fontname, fontSpacing, dx, dy, colour) {
        let font = fonts[fontname];
        let chars = [...text];
        let measure = this.measureText(text, fontname, fontSpacing);
        let {width, height} = measure;
        this.inverted = !this.inverted;
        this.clearRectangle(dx, dy, width, height, colour);
        this.inverted = !this.inverted;

        let x = dx;

        chars.forEach((char, pos) => {
            let spacing = 0;
            if (pos !== 0)
                spacing = this.determineDistance(chars[pos - 1], char, fontname, fontSpacing);

            x += spacing;
            if (font[char].offset)
                this.draw2DArray(font[char].data, x, dy + font[char].offset, colour);
            else
                this.draw2DArray(font[char], x, dy, colour);

            x += (font[char].data || font[char])[0].length;
        });
    }

    draw2DArray(array, x, y, colour) {
        array.forEach((row, dy) => {
            row.forEach((led, dx) => {
                this.matrix.setLEDState(x + dx, y + dy, !!(led ^ this.inverted), colour);
            });
        });
    }

    clearRectangle(x, y, w, h, colour) {
        for (let dx = 0; dx < w; dx++) {
            for (let dy = 0; dy < h; dy++) {
                this.matrix.setLEDState(x + dx, y + dy, !this.inverted, colour);
            }
        }
    }

}

class DOMBasedLEDMatrix {

    constructor(width, height, complete) {
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

        complete(cells);
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
