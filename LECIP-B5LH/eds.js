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
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.002)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.004) - 1}px;
    }


    #internal-pids {
        width: ${internalPIDSWidth * Math.ceil(window.innerWidth * 0.005)}px;
        grid-template-columns: repeat(${internalPIDSWidth}, ${Math.ceil(window.innerWidth * 0.005)}px);
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
    internalPIDS = new LEDMatrix(internalPIDSWidth, internalPIDSHeight, document.getElementById('internal-pids'));

    let frontDisplay = EDSData.SMRT[9201][1].front;
    let parsed = parseFormat(EDSFormats.SMRT[frontDisplay.renderType], frontDisplay, EDSImages.SMRT, frontEDS);
    render(parsed, frontEDS);

    matrixPrimitives.setStrokeColour(0x84e76e);
    matrixPrimitives.strokeRectangle(internalPIDS, 0, 0, 32, 16);

    internalPIDS.drawText('920', 'LECIP-PIDS-7:13', 1, 5, 1, 0xffffff);
    internalPIDS.drawText('Arr>>', 'LECIP-PIDS-5:13', 2, 4, 17, 0xeae44a);
    // internalPIDS.drawText('STOP>>', 'LECIP-PIDS-5:13', 1, 1, 17, 0xe35f57);

    internalPIDS.drawText('BT PANJANG INT', 'LECIP-PIDS-5:13', 1, 33, 1, 0xffffff);
    internalPIDS.drawText('BT PANJANG PLAZA', 'LECIP-PIDS-5:13', 1, 33, 17, 0xffffff);
});

window.addEventListener('resize', generateLEDCssCode);
