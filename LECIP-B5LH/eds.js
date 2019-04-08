window.frontEDS = null; window.internalPIDS = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let frontEDSWidth = 192;
let internalPIDSWidth = 160;

let edsHeight = 24;
let internalPIDSHeight = 31;

function generateLEDCssCode() {
    let cssData =
`
    #front-eds .led {
        width: ${Math.ceil(window.innerWidth * 0.004)}px;
        height: ${Math.ceil(window.innerWidth * 0.004)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.004)}px;
    }

    #internal-pids .led {
        width: ${Math.ceil(window.innerWidth * 0.005)}px;
        height: ${Math.ceil(window.innerWidth * 0.005)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.005)}px;
    }

    #front-eds {
        width: ${frontEDSWidth * Math.ceil(window.innerWidth * 0.004)}px;
        grid-template-columns: repeat(${frontEDSWidth}, ${Math.ceil(window.innerWidth * 0.004)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.001)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.004) - 1}px;
    }


    #internal-pids {
        width: ${internalPIDSWidth * Math.ceil(window.innerWidth * 0.005)}px;
        grid-template-columns: repeat(${internalPIDSWidth}, ${Math.ceil(window.innerWidth * 0.005)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.001)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.005) - 1}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
    internalPIDS = new LEDMatrix(internalPIDSWidth, internalPIDSHeight, document.getElementById('internal-pids'));

    frontEDS.drawText('920', 'Arial-17', 1, 192-40, 5);
    frontEDS.drawText('BT PANJANG via', 'ArialBold-8', 1, 30, 3);
    frontEDS.drawText('YOUR HOUSE', 'Arial-8', 1, 40, 14);


    internalPIDS.drawText('920', 'LECIP-7:5', 1, 50, 2, 0xffffff);
    internalPIDS.drawText('BT PANJANG INT', 'LECIP-7:5', 1, 80, 2, 0xff0000);
    internalPIDS.inverted = true;
    internalPIDS.drawText('174', 'LAWO-26:14', 1, 0, 3, 0xcafe00);
    internalPIDS.inverted = false;
    internalPIDS.drawText('0123456789', 'Hanover-19:12', 1, 41, 12, 0xabcdef);
});

window.addEventListener('resize', generateLEDCssCode);
