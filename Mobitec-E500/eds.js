window.frontEDS = null; window.controllerPreview = null;

let currentOperator = location.hash.slice(1) ? location.hash.slice(1) : 'SMRT (PostSLBP)';

let startupCodes = {'SMRT (PostSLBP)': 9117, 'SMRT (PreSLBP)': 9117, 'TTSG': 6666, 'SBST': 2222, 'GASG': 2222, 'SBSTC': 1111, 'Sentosa': 2222}

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};
let EDSExtras = {};

let frontEDSWidth = 144;

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
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.002)}px;
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

function parse(code, extra, operator) {
    if (!EDSData[operator][code]) return null;

    let extraData;

    let data = parseFormat(EDSFormats[operator], EDSData[operator][code].front, EDSImages[operator], frontEDS);
    if (EDSExtras[operator][extra])
        extraData = parseFormat(EDSFormats[operator], EDSExtras[operator][extra].front, EDSImages[operator], frontEDS);

    if (extraData) {
        data.pages = data.pages.concat(extraData.pages);
        data.scrollSpeed = data.scrollSpeed === -1 ? 3000 : data.scrollSpeed;
    }

    return data;
}

function setCode(code, extra, operator) {
    code += '';

    if (!EDSData[operator][code]) return;

    let parsed = parse(code, extra, operator);
    render(parsed, controllerPreview);
    render(parsed, frontEDS);

    setScreenDest(code);
    setScreenExtra(extra);

    currentCode = code;
    currentExtra = extra;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
    controllerPreview = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('preview-canvas'), CanvasBasedLEDMatrix, 4);

    setCode(startupCodes[currentOperator], '0', currentOperator);
});

window.addEventListener('resize', generateLEDCssCode);
