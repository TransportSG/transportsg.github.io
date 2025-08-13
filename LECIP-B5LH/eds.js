window.frontEDS = null; window.internalPIDS = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let frontEDSWidth = 192;
let internalPIDSWidth = 160;

let edsHeight = 24;
let internalPIDSHeight = 32;

function generateLEDCssCode() {
    let cssData =
`
    #front-eds .led {
        width: ${Math.ceil(window.innerWidth * 0.003)}px;
        height: ${Math.ceil(window.innerWidth * 0.003)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.003)}px;
    }

    #internal-pids .led {
        width: ${Math.ceil(window.innerWidth * 0.0042)}px;
        height: ${Math.ceil(window.innerWidth * 0.0042)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.0042)}px;
    }

    #front-eds {
        width: ${frontEDSWidth * Math.ceil(window.innerWidth * 0.003)}px;
        grid-template-columns: repeat(${frontEDSWidth}, ${Math.ceil(window.innerWidth * 0.003)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0015)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.003) - 1}px;
    }


    #internal-pids {
        width: ${internalPIDSWidth * Math.ceil(window.innerWidth * 0.0042)}px;
        grid-template-columns: repeat(${internalPIDSWidth}, ${Math.ceil(window.innerWidth * 0.0042)}px);
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

function setCode(code, operator, direction) {
    if (!EDSData[operator][code]) return;

    let frontDisplay = EDSData[operator][code][direction].front;
    let parsedFront = parseFormat(EDSFormats[operator], frontDisplay, EDSImages[operator], frontEDS);
    render(parsedFront, frontEDS);

    let pidsDisplay = EDSData[operator][code][direction].pids;
    let parsedPIDS = parseFormat(EDSFormats[operator], pidsDisplay, EDSImages[operator], internalPIDS);
    render(parsedPIDS, internalPIDS);
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
    internalPIDS = new LEDMatrix(internalPIDSWidth, internalPIDSHeight, document.getElementById('internal-pids'));

    setCode(117, 'SMRT', 1, 1, 'TTSG', 1);
});

window.addEventListener('resize', generateLEDCssCode);

window.addEventListener('load', () => {
    function update() {
        let code = document.getElementById('code').value;
        let operator = document.getElementById('operator').value;
        let direction = document.getElementById('direction').value;

        setCode(code, operator, direction);
    }

    document.getElementById('code').addEventListener('input', update);
    document.getElementById('operator').addEventListener('input', update);
    document.getElementById('direction').addEventListener('input', update);
});
