window.frontEDS = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

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
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0025)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.006) - 1}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}


function setCode(code, operator) {
    if (!EDSData[operator][code]) return;

    let frontDisplay = EDSData[operator][code].front;
    let parsedFront = parseFormat(EDSFormats[operator], frontDisplay, EDSImages[operator], frontEDS);
    render(parsedFront, frontEDS);

    let pidsDisplay = EDSData[operator][code].pids;
    let parsedPIDS = parseFormat(EDSFormats[operator], pidsDisplay, EDSImages[operator], internalPIDS);
    render(parsedPIDS, internalPIDS);
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));

    setCode(9122, 'SMRT');
});

window.addEventListener('resize', generateLEDCssCode);
