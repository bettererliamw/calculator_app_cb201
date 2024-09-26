
// Get the display
let display = document.getElementById("display");

//Variables to store our numbers and operation
let firstNumber= '';
let secondNumber= '';
let operation = '';

//Function to add numbers
function appendNumber (num) {
    if (operation === '') {
        firstNumber += num;
        display.value = firstNumber;
    } else {
        secondNumber += num;
        display.value = secondNumber;
    }
}


// Function to set operation
function setOperation (op) {
    operation = op;
    display.value = '';
}

// Function to clear display
function clearDisplay() {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
}

// Function to calculate the result

function calculate() {
    let result;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if(num2 !== 0) {
            result = num1 / num2
        } else {
            result = 'Error';
        }
    } else {
        result = 'Unknown';
    }
    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
}
