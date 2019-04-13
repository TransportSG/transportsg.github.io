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
        
        frontEDS.clearRectangle(0, 0, frontEDS.width, frontEDS.height);
        frontEDS.drawText(newCode, 'Hanover-19:11', 1, 160 - width, 0);

        currentScreen = 'home';
        setScreenText('Dest no.: ' + newCode  + ' T1', '> SOMEWHERE');

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
});
