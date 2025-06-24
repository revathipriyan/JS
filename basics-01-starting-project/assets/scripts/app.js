const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = '(0/10)';
let logEntries = [];

function add() {
    const calculationDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult,calculationDescription);
    logEntries.push(parseInt(userInput.value));


}

function subtract() {
    const calculationDescription = `${currentResult} - ${userInput.value}`;
    currentResult = currentResult - parseInt(userInput.value);
    outputResult(currentResult,calculationDescription)

}

function multiply() {
    const calculationDescription = `${currentResult} * ${userInput.value}`;
    currentResult = currentResult * parseInt(userInput.value);
    outputResult(currentResult,calculationDescription)

}


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
