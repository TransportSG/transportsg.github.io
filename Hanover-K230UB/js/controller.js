let currentScreen = 'home';
let inputType = '';

let currentCode = '';
let code = [];

function numberPressed(keyNum) {
    if (currentScreen == 'svc-input') {
        if (keyNum !== -1) code.push(keyNum); //init screen
        if (code.length > 4) code.shift();

        let top = inputType + ' no:';
        top += Array(18 - top.length - code.length).fill(' ').join('');
        top += code.join('');

        let bottom = Array(18 - 4).fill(' ').concat([0,0,0,0].concat([...currentCode]).slice(-4)).join('');

        setScreenText(top, bottom);
    }
}

function entClicked() {
    if (currentScreen == 'svc-input') {
        let newCode = code.join('');

        setCode(newCode);
        currentScreen = 'home';
        code = [];
    }
}

function upClicked() {

}

function downClicked() {

}

function codeInputButtonClicked(type) {
    if (currentScreen == 'home') {
        currentScreen = 'svc-input';
        inputType = type;
        numberPressed(-1);
    }
}

function setScreenText(line1, line2) {
    document.getElementById('screen-top-line').textContent = line1;
    document.getElementById('screen-bottom-line').textContent = line2 || '';
}

function padCentre(text) {
    if (text.length > 18) return text;
    let spacing = Math.floor(9 - text.length / 2);
    return Array(spacing).fill(' ').join('') + text;
}

function setCode(code) {
    code = code.replace(/^0+/, '');
    if (!EDSData.SBST[code]) return;

    let frontDisplay = EDSData.SBST[code][1].front;
    let parsedFront = parseFormat(EDSFormats.SBST, frontDisplay, EDSImages.SBST, frontEDS);
    render(parsedFront, frontEDS);

    let {displayName} = parsedFront;
    let lines = displayName.split('\n');
    let top = lines[0];
    let bottom = lines[1] || '';
    setScreenText(padCentre(top), padCentre(bottom));

    currentCode = code;
}

function setup() {
    for (let keynum = 0; keynum < 10; keynum++) {
        let element = document.getElementById('keypad-' + keynum);
        element.addEventListener('click', () => {
            numberPressed(keynum);
        });
    }

    document.getElementById('keypad-ent').addEventListener('click', entClicked);
    document.getElementById('keypad-up').addEventListener('click', upClicked);
    document.getElementById('keypad-down').addEventListener('click', downClicked);
    document.getElementById('keypad-r').addEventListener('click', codeInputButtonClicked.bind(null, 'Route'));
    document.getElementById('keypad-d').addEventListener('click', codeInputButtonClicked.bind(null, 'Dest'));
    document.getElementById('keypad-x').addEventListener('click', codeInputButtonClicked.bind(null, 'Out'));

    setCode('1234');
}

function startup() {
    var textSets = [
        ['abcd*******', '', 300],
        [padCentre('ERIC-H8S-1-25-2'), padCentre('Ext Port 2345'), 2000],
        ['NCP012345//', '', 300],
        [padCentre('Please wait...'), '', 300]
    ];

    let currentDelay = 0;

    textSets.forEach((lines, index) => {
        setTimeout(() => {
            setScreenText(lines[0], lines[1]);
        }, currentDelay);
        currentDelay += lines[2];
    });

    setTimeout(() => {
        setup();
    }, currentDelay);
}

document.addEventListener('DOMContentLoaded', startup);
