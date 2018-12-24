let matrix;

document.addEventListener('DOMContentLoaded', () => {
    matrix = new LEDMatrix(160, 20, document.getElementById('container'));
    setCode(1741, 'SBST');

    render(parseFormat(EDSFormats.SBST.standardService, EDSData.SBST[1741].front, matrix), matrix)

    let svc = document.getElementById('svc');
    svc.addEventListener('input', () => {
        render(parseFormat(EDSFormats.SBST.standardService, EDSData.SBST[svc.value].front, matrix), matrix)
    });
});

let EDSFormats = {};
let EDSData = {};

let scrollInterval = 0;

function setCode(code, operator) {
}
