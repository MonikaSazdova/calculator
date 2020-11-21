operations = {
    none:      function(storedValue, displayedValue) { return displayedValue; },
    add:       function(storedValue, displayedValue) { return storedValue + displayedValue; },
    substract: function(storedValue, displayedValue) { return storedValue - displayedValue; },
    multiply:  function(storedValue, displayedValue) { return storedValue * displayedValue; },
    divide:    function(storedValue, displayedValue) { return storedValue / displayedValue; }
};

function emptyDisplay() {
    let display = document.getElementById('display');
    display.value = '0';
    storedNum = '0';
    calcDone = true;
    calculation = operations.none;
}

function clearLastResult() {
    let display = document.getElementById('display');
    if (calcDone) {
        display.value = '0';
        calcDone = false;
    }
}

function inputNum(num) {
    let display = document.getElementById('display');
    clearLastResult();
    if (display.value === '0') display.value = '';
    display.value += num;
}

function addDecimal() {
    let display = document.getElementById('display');
    clearLastResult();
    if (display.value.indexOf('.') === -1) display.value += '.';
}

function doFullCalc() {
    let display = document.getElementById('display');
    display.value = calculation (+ storedNum, + display.value);
    calcDone = true;
    calculation = operations.none;
}

function doOperation(operator) {
    let display = document.getElementById('display');
    doFullCalc();
    storedNum = display.value;
    if (operations.hasOwnProperty(operator))
        calculation = operations[operator];
}

if ('addEventListener' in window)
    window.addEventListener('load', emptyDisplay);
else
    window.attachEvent('onload', emptyDisplay);