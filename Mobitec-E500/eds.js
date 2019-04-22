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

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
    frontEDS.clearRectangle(0,0,144,16)
    frontEDS.drawText('OFF SERVICE', 'Mobitec-16:8', 1, 32, 0)
});

window.addEventListener('resize', generateLEDCssCode);
