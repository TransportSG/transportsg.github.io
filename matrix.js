class LEDMatrix {

    constructor(width, height, container) {
        this.width = width;
        this.height = height;
        this.matrix = new DOMBasedLEDMatrix(width, height, leds => {
            leds.forEach(led => {
                container.appendChild(led);
            });
        });
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

            if (!font[char]) console.log(char)
            accuWidth += (font[char].data || font[char])[0].length;

            return accuWidth;
        }, 0);

        let height = chars.map(char => (font[char].data || font[char]).length).sort((a, b) => a - b).reverse()[0];

        return {width: totalWidth, height};
    }

    drawText(text, fontname, fontSpacing, dx, dy) {
        let font = fonts[fontname];
        let chars = [...text];
        let measure = this.measureText(text, fontname, fontSpacing);
        let {width, height} = measure;
        this.clearRectangle(dx, dy, width, height);

        let x = dx;

        chars.forEach((char, pos) => {
            let spacing = 0;
            if (pos !== 0)
                spacing = this.determineDistance(chars[pos - 1], char, fontname, fontSpacing);

            x += spacing;
            if (font[char].offset)
                this.draw2DArray(font[char].data, x, dy + font[char].offset);
            else
                this.draw2DArray(font[char], x, dy);

            x += (font[char].data || font[char])[0].length;
        });
    }

    draw2DArray(array, x, y) {
        array.forEach((row, dy) => {
            row.forEach((led, dx) => {
                if (led)
                    this.matrix.setLEDState(x + dx, y + dy, led);
            });
        });
    }

    clearRectangle(x, y, w, h) {
        for (let dx = 0; dx < w; dx++) {
            for (let dy = 0; dy < h; dy++) {
                this.matrix.setLEDState(x + dx, y + dy, false);
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

    setLEDState(x, y, state) {
        if (x >= this.width || x < 0 || y >= this.height || y < 0) return;
        let className = state ? 'led led-on' : 'led led-off';
        this.leds[DOMBasedLEDMatrix.twodimToFlat(x, y, this.width)].className = className;
    }

    getLEDState(x, y) {
        if (x >= this.width || x < 0 || y >= this.height || y < 0) return false;
        return this.leds[DOMBasedLEDMatrix.twodimToFlat(x, y, this.width)].className === 'led led-on';
    }

}
