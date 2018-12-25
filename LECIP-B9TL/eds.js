window.frontEDS = null; window.rearEDS = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

function generateLEDCssCode() {
    let cssData =
`
    .led {
        width: ${Math.ceil(window.innerWidth * 0.005)}px;
        height: ${Math.ceil(window.innerWidth * 0.005)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.005)}px;
    }

    #front-eds {
        width: ${160 * Math.ceil(window.innerWidth * 0.005)}px;
        grid-template-columns: repeat(160, ${Math.ceil(window.innerWidth * 0.005)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0012)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.005) - 1}px;
    }

    #rear-eds .led {
        width: ${Math.ceil(window.innerWidth * 0.0065)}px;
        height: ${Math.ceil(window.innerWidth * 0.0065)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.0065)}px;
    }

    #rear-eds {
        width: ${40 * Math.ceil(window.innerWidth * 0.008)}px;
        grid-template-columns: repeat(40, ${Math.ceil(window.innerWidth * 0.008)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0006)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.008)}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(160, 20, document.getElementById('front-eds'));
    rearEDS = new LEDMatrix(40, 20, document.getElementById('rear-eds'));
});

window.addEventListener('resize', generateLEDCssCode);
