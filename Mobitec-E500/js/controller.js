let currentScreen = 'controller-screen-home';
let currentOperator = 'SMRT';
let currentCode = '0';
let currentScreenCode = '0';

function setScreen(screenName) {
    let screens = [['controller-screen-home', 'flex'], ['controller-screen-dest', 'block']];
    screens.forEach(screen => {
        if (screen[0] !== screenName) {
            document.getElementById(screen[0]).style.display = 'none';
        } else {
            document.getElementById(screen[0]).style.display = screen[1];
        }
    });

    currentScreen = screenName;
}

function setSelectionItems(items) {
    document.getElementById('dest-table').innerHTML = items.map((item, i) => {
        return `
<div class='dest-table-item'>
<span>${item.code}</span>
<span></span>
<span>${item.displayName}</span>
</div>`;
    }).join('');
}

function drawSelectionScreen(code) {
    let allCodes = Object.keys(EDSData[currentOperator]);

    let currentCodeIndex = allCodes.indexOf(code);
    if (currentCodeIndex === -1) currentCodeIndex = 0;

    if (currentCodeIndex > allCodes.length - 3) {
        currentCodeIndex = Math.max(allCodes.length - 3, 0);
    }

    let nextThreeCodes = allCodes.slice(currentCodeIndex, currentCodeIndex + 3);
    let screenIndex = nextThreeCodes.indexOf(code);

    nextThreeCodes = nextThreeCodes.map(code => {
        let data = EDSData[currentOperator][code];
        let displayName = resolveValue(EDSFormats[currentOperator][data.front.renderType].text, data.front);
        if (displayName.text) displayName = displayName.text;

        return {code, displayName};
    });

    setSelectionItems(nextThreeCodes);
    document.querySelector(`#dest-table > :nth-child(${screenIndex + 1})`).className = 'dest-table-item table-selected-row';

}

function onF1Pressed() {
    if (currentScreen == 'controller-screen-home') {
        setScreen('controller-screen-dest');
        drawSelectionScreen(currentCode, true);
        currentScreenCode = currentCode;
    }
}

function onUpPressed() {
    if (currentScreen !== 'controller-screen-dest') return;
    let allCodes = Object.keys(EDSData[currentOperator]);

    let currentCodeIndex = allCodes.indexOf(currentScreenCode);
    currentCodeIndex = Math.max(currentCodeIndex - 1, 0);

    currentScreenCode = allCodes[currentCodeIndex];

    drawSelectionScreen(currentScreenCode, false);
}

function onDownPressed() {
    if (currentScreen !== 'controller-screen-dest') return;
    let allCodes = Object.keys(EDSData[currentOperator]);

    let currentCodeIndex = allCodes.indexOf(currentScreenCode);
    currentCodeIndex = Math.min(currentCodeIndex + 1, allCodes.length - 1);

    currentScreenCode = allCodes[currentCodeIndex];

    drawSelectionScreen(currentScreenCode, false);
}

function onCrossPressed() {
    if (currentScreen === 'controller-screen-dest') setScreen('controller-screen-home');
}

function onTickPressed() {
    if (currentScreen === 'controller-screen-dest') {
        setCode(currentScreenCode, currentOperator);
        setScreen('controller-screen-home');
    }
}

window.addEventListener('load', () => {
    document.getElementById('button-f1').addEventListener('click', onF1Pressed);
    document.getElementById('button-up').addEventListener('click', onUpPressed);
    document.getElementById('button-down').addEventListener('click', onDownPressed);

    document.getElementById('button-no').addEventListener('click', onCrossPressed);
    document.getElementById('button-yes').addEventListener('click', onTickPressed);
});
