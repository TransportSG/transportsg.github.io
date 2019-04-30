let currentScreen = 'home';
let inputType = '';

let currentCode = '';
let currentDirection = 1;

let scrollPoint = {service: 0, direction: -1};
let inputs = [];

function numberPressed(keyNum) {
    if (currentScreen == 'svc-input') {
        if (keyNum !== -1) inputs.push(keyNum); //init screen
        if (inputs.length > 4) inputs.shift();

        let top = inputType + ' no:';
        top += Array(18 - top.length - inputs.length).fill(' ').join('');
        top += inputs.join('');

        let bottom = Array(18 - 4).fill(' ').concat([0,0,0,0].concat([...currentCode]).slice(-4)).join('');

        setScreenText(top, bottom);
    }
}

function entClicked() {
    if (currentScreen == 'svc-input') {
        let newCode = inputs.join('');

        setCode(newCode, 1);
        currentScreen = 'home';
        inputs = [];
    } else if (currentScreen == 'service-scroll') {
        let newCode = scrollPoint.service;
        let {direction} = scrollPoint;

        setCode(newCode, direction);
        currentScreen = 'home';
    }
}

function upClicked() {
    let allServices = Object.keys(EDSData.SBST).sort((a, b)=> a.match(/(\d+)/)[1] - b.match(/(\d+)/)[1]);

    if (currentScreen == 'home') {
        currentScreen = 'service-scroll';
        scrollPoint.service = currentCode;
        scrollPoint.direction = currentDirection;
    }

    if (currentScreen == 'service-scroll') {
        let serviceIndex = allServices.indexOf(scrollPoint.service);

        if (scrollPoint.direction == null) {
            serviceIndex++;
            scrollPoint.direction = -1;
        }
        if (serviceIndex === allServices.length - 1) serviceIndex = 0;

        let newService = allServices[serviceIndex];
        scrollPoint.service = newService;

        let serviceData = EDSData.SBST[newService];
        let directions = Object.keys(serviceData);
        let directionIndex = directions.indexOf(scrollPoint.direction);

        scrollPoint.direction = directions[directionIndex + 1];
        if (directionIndex === directions.length - 1) {
            scrollPoint.direction = null;
            upClicked();
            return;
        }


        showFromDisplayName(getParsedData(scrollPoint.service, scrollPoint.direction).front.displayName);
    }
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

function getParsedData(code, direction) {
    let frontDisplay = EDSData.SBST[code][direction].front;
    let parsedFront = parseFormat(EDSFormats.SBST, frontDisplay, EDSImages.SBST, frontEDS);

    return {front: parsedFront};
}

function showFromDisplayName(displayName) {
    let lines = displayName.split('\n');
    let top = lines[0];
    let bottom = lines[1] || '';
    setScreenText(padCentre(top), padCentre(bottom));
}

function setCode(code, direction) {
    code = code.replace(/^0+/, '');
    if (!EDSData.SBST[code]) return;

    let {front} = getParsedData(code, direction);
    render(front, frontEDS);

    let {displayName} = front;
    showFromDisplayName(displayName);

    currentCode = code;
    currentDirection = direction;
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

    setCode('174', 1);
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
