let currentScreen = 'home';
let currentOperator = 'SMRT';
let currentCode = '0';

function setScreen(screenName) {
    let screens = [['controller-screen-home', 'flex'], ['controller-screen-dest', 'block']];
    screens.forEach(screen => {
        if (screen[0] !== screenName) {
            document.getElementById(screen[0]).style.display = 'none';
        } else {
            document.getElementById(screen[0]).style.display = screen[1];
        }
    });
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

function drawSelectionScreen() {
    let allCodes = Object.keys(EDSData[currentOperator]);

    let currentCodeIndex = allCodes.indexOf(currentCode);
    if (currentCodeIndex === -1) currentCodeIndex = 0;

    if (currentCodeIndex > allCodes.length - 3) {
        currentCodeIndex = allCodes.length - 3;
    }

    let nextThreeCodes = allCodes.slice(currentCodeIndex, currentCodeIndex + 3);
    let screenIndex = nextThreeCodes.indexOf(currentCode);

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
    if (currentScreen == 'home') {
        currentScreen = 'service-select';
        setScreen('controller-screen-dest');
        drawSelectionScreen();
    }
}

window.addEventListener('load', () => {
    document.getElementById('button-f1').addEventListener('click', onF1Pressed);
});
