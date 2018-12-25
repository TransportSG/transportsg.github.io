let frontEDS, rearEDS;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

function generateLEDCssCode() {
    let cssData =
`
    .led {
        width: ${Math.ceil(window.innerWidth * 0.0035)}px;
        height: ${Math.ceil(window.innerWidth * 0.0035)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.0035)}px;
    }

    #front-eds {
        width: ${160 * Math.ceil(window.innerWidth * 0.005)}px;
        grid-template-columns: repeat(160, ${Math.ceil(window.innerWidth * 0.005)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0004)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.005) - 1}px;
    }

    #rear-eds .led {
        width: ${Math.ceil(window.innerWidth * 0.0055)}px;
        height: ${Math.ceil(window.innerWidth * 0.0055)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.0055)}px;
    }

    #rear-eds {
        width: ${40 * Math.ceil(window.innerWidth * 0.007)}px;
        grid-template-columns: repeat(40, ${Math.ceil(window.innerWidth * 0.007)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0004)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.007)}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(160, 20, document.getElementById('front-eds'));
    rearEDS = new LEDMatrix(40, 20, document.getElementById('rear-eds'));
    setCode(174, 1, 'SBST');
});

window.addEventListener('resize', generateLEDCssCode);

function setCode(code, direction, operator) {
    let frontDisplay = EDSData[operator][code][direction].front;

    render(parseFormat(EDSFormats[operator][frontDisplay.renderType], frontDisplay, EDSImages[operator], matrix), matrix);
}
