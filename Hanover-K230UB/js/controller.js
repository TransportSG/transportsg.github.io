let currentScreen = 'home';

let code = [0, 0, 0, 0];

function numberPressed(keyNum) {
    code = code.concat(keyNum).slice(-4);
    if (currentScreen !== 'svc-input') {
        currentScreen = 'svc-input';
    }

    setScreenText('Inputting code', code.join(''));
}

function entClicked() {
    if (currentScreen == 'svc-input') {
        let newCode = code.join('').replace(/^0+/, '');

        let width = frontEDS.measureText(newCode, 'Hanover-19:11', 1).width;

        setCode(newCode);

        currentScreen = 'home';

        code = [0, 0, 0, 0];
    }
}

function upClicked() {

}

function downClicked() {

}

function setScreenText(line1, line2) {
    if (line1) {
        document.getElementById('screen-top-line').textContent = line1;
    }
    if (line2) {
        document.getElementById('screen-bottom-line').textContent = line2;
    }
}

function setCode(code) {
    if (!EDSData.SBST[code]) return;

    let frontDisplay = EDSData.SBST[code][1].front;
    let parsedFront = parseFormat(EDSFormats.SBST, frontDisplay, EDSImages.SBST, frontEDS);
    render(parsedFront, frontEDS);

    let {displayName} = parsedFront;
    setScreenText('Dest no.: ' + code  + ' T1', displayName);
}

document.addEventListener('DOMContentLoaded', () => {
    for (let keynum = 0; keynum < 10; keynum++) {
        let element = document.getElementById('keypad-' + keynum);
        element.addEventListener('click', () => {
            numberPressed(keynum);
        });
    }

    document.getElementById('keypad-ent').addEventListener('click', entClicked);
    document.getElementById('keypad-up').addEventListener('click', upClicked);
    document.getElementById('keypad-down').addEventListener('click', downClicked);

    setCode(201);
});
