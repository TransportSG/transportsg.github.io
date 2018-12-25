let frontEDS, rearEDS;

document.addEventListener('DOMContentLoaded', () => {
    frontEDS = new LEDMatrix(160, 20, document.getElementById('front-eds'));
    rearEDS = new LEDMatrix(40, 20, document.getElementById('rear-eds'));
    setCode(174, 1, 'SBST');

    let svc = document.getElementById('svc');
    let dir = document.getElementById('dir');
    svc.addEventListener('input', () => {
        setCode(svc.value, dir.value, 'SBST');
    });

    dir.addEventListener('input', () => {
        setCode(svc.value, dir.value, 'SBST');
    });
});

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let scrollInterval = 0;

function setCode(code, direction, operator) {
    let frontDisplay = EDSData[operator][code][direction].front;

    render(parseFormat(EDSFormats[operator][frontDisplay.renderType], frontDisplay, EDSImages[operator], matrix), matrix);
}
