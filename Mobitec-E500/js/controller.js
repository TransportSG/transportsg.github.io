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
    document.getElementById('dest-table').innerHTML = items.map(item => {
        return `
<div class='dest-table-item'>
<span>${item.code}</span>
<span></span>
<span>${item.displayName}</span>
</div>`;
    }).join('');
}

function drawSelectionScreen() {
    let currentCodeIndex = Object.keys(EDSData[currentOperator]).indexOf(currentCode);
    if (currentCodeIndex === -1) currentCodeIndex = 0;

    let nextThreeCodes = Object.values(EDSData[currentOperator]).slice(currentCodeIndex, currentCodeIndex + 3);
    nextThreeCodes.forEach(data => {
        let displayName = resolveValue(EDSFormats[currentOperator][data.front.renderType].text, data.front);
        if (displayName.text) displayName = displayName.text;
        
        console.log(displayName)
    });
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
