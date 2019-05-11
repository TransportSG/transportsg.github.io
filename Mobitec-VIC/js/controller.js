let screenWidth = 146,
    screenHeight = 40;

let screenMatrix,
    screenCanvas,
    screenCanvasContext,

    innerDisplay,
    innerDisplayCanvas = document.createElement('canvas'),
    innerDisplayCanvasContext = innerDisplayCanvas.getContext('2d');

let currentCanvasData = null;

let canvasScale = 51; // DAMMIT SAFARI YOURE A NUTCASE

let code = [0, 0, 0, 0];

let keyTimeout = 0;

let operator = 'Ventura';

function setDisplayText(lines) {
    screenMatrix.onBeginDraw();
    lines.forEach((line, i) => {
        screenMatrix.drawText(new TextObject(line, Font.fromNameString('Mobitec-6:5'), new Position(0, i * 10 + 2), 1));
    });
    screenMatrix.onEndDraw();
}

function drawFrame(text) {
    screenMatrix.onBeginDraw();

    screenMatrix.drawText(new TextObject(text, Font.fromNameString('MobitecScreen-8:5'), new Position(0, 2), 1));
    matrixPrimitives.strokeRectangle(screenMatrix, 0, 18, 144 + 2, 16 + 2);

    screenMatrix.onEndDraw();
}

function parse(code) {
    if (!EDSData.Ventura[code]) return null;
    return parseFormat(EDSFormats.Ventura, EDSData.Ventura[code].front, EDSImages.Ventura, innerDisplay);
}

function keyPress(num) {
    let d = num / Math.abs(num);
    let index = code.length - Math.abs(num);

    if (d === 1 && code[index] + 1 === 10) code[index] = -1;
    else if (d === -1 && code[index] - 1 === -1) code[index] = 10;

    code[index] += d;

    setPreviewCode(code);

    clearTimeout(keyTimeout);
    keyTimeout = setTimeout(setCode.bind(null, code), 1500);
}

function setPreviewCode(code) {
    drawFrame('Dest: ' + code.join(''));
    let parsed = parse(code.join('')*1+'');
    render(parsed, innerDisplay);
}

function setCode(code) {
    let parsed = parse(code.join('')*1+'');
    render(parsed, frontEDS);
}

function setup() {
    for (let p = 0; p <= 3; p++) {
        let place = Math.pow(10, p);

        document.getElementById(place + '-up').addEventListener('click', keyPress.bind(null, p + 1));
        if (place !== 1000)
            document.getElementById(place + '-down').addEventListener('click', keyPress.bind(null, -p - 1));
    }

    code = startupCode;
    setPreviewCode(code);
    setCode(code);
}

function startup() {
    var textSets = [
        ['Booting Sys', '', '', 'Boot: 1371-R7', 300],
        ['Staring Application', '', '', 'Bios: 1372-R13', 300],
        ['mobitec ICU 400', 'Version: 1373-R58', 300],
        ['mobitec ICU 400', 'Version: 1373-R58', 'Prg: Testpgm', 500]
    ];

    let currentDelay = 0;

    textSets.forEach((lines, index) => {
        setTimeout(() => {
            setDisplayText(lines.slice(0, -1));
        }, currentDelay);
        currentDelay += lines.slice(-1)[0];
    });

    setTimeout(() => {
        setup();
    }, currentDelay);
}

function hookDisplay(display) {
    display.onEndDraw = function () {
        display.matrix.onEndDraw();

        let imageData = innerDisplayCanvasContext.getImageData(0, 0, innerDisplayCanvas.width, innerDisplayCanvas.height);
        screenCanvasContext.putImageData(imageData, 1 * canvasScale, 19 * canvasScale);

        currentCanvasData = imageData;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    screenCanvas = document.getElementById('screen-canvas');
    screenCanvasContext = screenCanvas.getContext('2d');

    screenMatrix = new LEDMatrix(screenWidth, screenHeight, screenCanvas, CanvasBasedLEDMatrix, canvasScale);
    innerDisplay = new LEDMatrix(frontEDSWidth, edsHeight, innerDisplayCanvas, CanvasBasedLEDMatrix, canvasScale);

    hookDisplay(innerDisplay);
    startup();

    setCode(startupCode);
})
