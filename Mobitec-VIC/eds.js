window.frontEDS = null; window.controllerPreview = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let frontEDSWidth = 140;

let edsHeight = 16;

function generateLEDCssCode() {
    let cssData =
`
    .led {
        width: ${Math.ceil(window.innerWidth * 0.006)}px;
        height: ${Math.ceil(window.innerWidth * 0.006)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.006)}px;
    }

    #front-eds {
        width: ${frontEDSWidth * Math.ceil(window.innerWidth * 0.006)}px;
        grid-template-columns: repeat(${frontEDSWidth}, ${Math.ceil(window.innerWidth * 0.006)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0025)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.006) - 1}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

function setScreenInfo(childNumber, text) {
    document.getElementById('output-info').children[childNumber - 1].textContent = text;
}

function setScreenDest(dest) {
    setScreenInfo(2, 'Dest : ' + dest);
}

function setScreenExtra(extra) {
    setScreenInfo(3, 'Extr : ' + extra);
}

function setCode(code, operator) {
    code += '';

    if (!EDSData[operator][code]) return;

    let frontDisplay = EDSData[operator][code].front;
    let parsedFront = parseFormat(EDSFormats[operator], frontDisplay, EDSImages[operator], controllerPreview);
    render(parsedFront, controllerPreview);

    parsedFront = parseFormat(EDSFormats[operator], frontDisplay, EDSImages[operator], frontEDS);
    render(parsedFront, frontEDS);

    setScreenDest(code);

    currentCode = code;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
    controllerPreview = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('preview-canvas'), CanvasBasedLEDMatrix, 4);

    setCode(1111, 'Ventura');
});

window.addEventListener('resize', generateLEDCssCode);
