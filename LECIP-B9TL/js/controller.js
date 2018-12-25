let currentOperator = 'SBST';
let currentScreen = '';
let currentService = '';
let currentDirection = '';
let currentDestination = '';

function registerKeyPress(key) {

}

function setScreenText(line1, line2) {
    if (line1) {
        document.getElementById('output-line1').textContent = line1;
    }
    if (line2) {
        document.getElementById('output-line2').textContent = line2;
    }
}

function startup() {
    var textSets = [
        ['IPL', 'USB Initializing'],
        ['IPL: D99610', 'APL: D90913'],
        ['SBS Transit', 'LED Destination']
    ];

    textSets.forEach((lines, index) => {
        setTimeout(() => {
            setScreenText(lines[0], lines[1]);
        }, index * 1500);
    });

    setTimeout(() => {
        firmware();
    }, (textSets.length) * 1500);
}

function firmware() {
    for (let keynum = 0; keynum < 10; keynum++) {
        let element = document.getElementById('keypad-' + keynum);
        element.addEventListener('click', () => {
            registerKeyPress(keynum);
        });
    }

    document.getElementById('keypad-ent').addEventListener('click', registerKeyPress.bind(null, 'ENT'));
    document.getElementById('keypad-clr').addEventListener('click', registerKeyPress.bind(null, 'CLR'));
    document.getElementById('keypad-f3').addEventListener('click', registerKeyPress.bind(null, 'F3'));
    document.getElementById('keypad-f4').addEventListener('click', registerKeyPress.bind(null, 'F4'));
    document.getElementById('keypad-up').addEventListener('click', registerKeyPress.bind(null, 'UP'));
    document.getElementById('keypad-down').addEventListener('click', registerKeyPress.bind(null, 'DOWN'));
    setCode(174, 1);

    rearEDS.drawText('NOT IN', 'LECIP-7:5', 1, 7, 2);
    rearEDS.drawText('SERVICE', 'LECIP-7:5', 1, 1, 11)
}

function setCode(code, direction) {
    let frontDisplay = EDSData[currentOperator][code][direction].front;

    render(parseFormat(EDSFormats[currentOperator][frontDisplay.renderType], frontDisplay, EDSImages[currentOperator], frontEDS), frontEDS);
}

document.addEventListener('DOMContentLoaded', startup);
