let currentOperator = 'SBST';
let currentScreen = '';
let currentService = '';
let currentDirection = '';
let currentDestination = '';
let inputs = [0,0,0,0];

function registerNumericalKeyPress(key) {
    if (currentScreen === 'home' || currentScreen === 'service-input') {
        currentScreen = 'service-input';
        inputs.shift();
        inputs.push(key);

        showRouteInput();
    }
}

function registerKeyPress(key) {
    if (key === 'ENT') {
        if (currentScreen === 'service-input') {
            let service = inputs.join('').replace(/^0+/, '');

            setCode(service, 1);
            inputs = [0,0,0,0];
        }
    }
}

function pad(str, pad, length) {
    return Array(length).fill(pad).concat([...str]).slice(-length).join('');
}

function setScreenText(line1, line2) {
    if (line1) {
        document.getElementById('output-line1').textContent = line1;
    }
    if (line2) {
        document.getElementById('output-line2').textContent = line2;
    }
}

function showRouteInput() {
    setScreenText('Input Route No.', `           ${inputs.join('')}`);
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
            registerNumericalKeyPress(keynum);
        });
    }

    document.getElementById('keypad-ent').addEventListener('click', registerKeyPress.bind(null, 'ENT'));
    document.getElementById('keypad-clr').addEventListener('click', registerKeyPress.bind(null, 'CLR'));
    document.getElementById('keypad-f3').addEventListener('click', registerKeyPress.bind(null, 'F3'));
    document.getElementById('keypad-f4').addEventListener('click', registerKeyPress.bind(null, 'F4'));
    document.getElementById('keypad-up').addEventListener('click', registerKeyPress.bind(null, 'UP'));
    document.getElementById('keypad-down').addEventListener('click', registerKeyPress.bind(null, 'DOWN'));
    setCode('1111', 1);

    rearEDS.drawText('NOT IN', 'LECIP-7:5', 1, 7, 2);
    rearEDS.drawText('SERVICE', 'LECIP-7:5', 1, 1, 11);

    currentScreen = 'home';
}

function setCode(code, direction) {
    if (EDSData[currentOperator][code] && EDSData[currentOperator][code][direction]) {
        let frontDisplay = EDSData[currentOperator][code][direction].front;
        let parsed = parseFormat(EDSFormats[currentOperator][frontDisplay.renderType], frontDisplay, EDSImages[currentOperator], frontEDS);
        render(parsed, frontEDS);

        let {displayName} = parsed;

        setScreenText(`Route No: ${pad(code, ' ', 4)} ${direction}`, displayName);
        currentScreen = 'home';
        currentDestination = displayName;
        currentService = code;
        currentDirection = direction;
    } else {
        setScreenText(`Route No: ${pad(code, ' ', 4)} ${direction}`, '             E11');
        setTimeout(() => {
            if (currentScreen === 'home') { // ensure still on home screen
                setScreenText(`Route No: ${pad(currentService, ' ', 4)} ${currentDirection}`, currentDestination);
            }
        }, 1200);
        currentScreen = 'home';
    }
}

document.addEventListener('DOMContentLoaded', startup);
