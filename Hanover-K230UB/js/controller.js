let currentScreen = 'home';

function registerKeyPress(keyNum) {

}

function entClicked() {

}

function upClicked() {

}

function downClicked() {

}

document.addEventListener('DOMContentLoaded', () => {
    for (let keynum = 0; keynum < 10; keynum++) {
        let element = document.getElementById('keypad-' + keynum);
        element.addEventListener('click', () => {
            registerNumericalKeyPress(keynum);
        });
    }

    document.getElementById('keypad-ent').addEventListener('click', entClicked);
    document.getElementById('keypad-up').addEventListener('click', upClicked);
    document.getElementById('keypad-down').addEventListener('click', downClicked);
});
