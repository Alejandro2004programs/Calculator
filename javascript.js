function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if(b == 0) {
        return "🤨📷💥";
    }
    return (a / b).toFixed(3);
}

function exponent(a,b) {
    return a ** b;
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        case "^":
            return exponent(a,b);
    }
}

function resetVariables() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null; 
}


let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;
let display = document.querySelector(".display");
let displayCalculation = document.querySelector(".displayCalculation");

const numberButtons = document.querySelectorAll(".numberButton");
numberButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        let buttonSelected = e.target.textContent;
        if(firstNumber == null && operator == null) {
            firstNumber = buttonSelected;
            display.textContent = `${firstNumber}`;
            displayCalculation.textContent = `${firstNumber}`
        }
        else if (firstNumber != null &&  operator == null) {
            if(firstNumber.length <= 10) {
                firstNumber = firstNumber + buttonSelected;
                display.textContent = `${firstNumber}`;
                displayCalculation.textContent = `${firstNumber}`
            }
        }
        else if(secondNumber == null) {
            secondNumber = buttonSelected;
            display.textContent += `${secondNumber}`;
            displayCalculation.textContent += `${secondNumber}`;

        }
        else {
            if(secondNumber.length <= 10) {
                secondNumber = secondNumber + buttonSelected;
                display.textContent = `${firstNumber + operator + secondNumber}`;
                displayCalculation.textContent = `${firstNumber + operator + secondNumber}`;

            }
        }
    });
});

const operatorButtons = document.querySelectorAll(".operatorButton");
operatorButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        let buttonSelected = e.target.textContent;
        if(buttonSelected == "+/-") {
            firstNumber = firstNumber * (-1);
            display.textContent = firstNumber;
        }
        else if(firstNumber != null && secondNumber == null ) {
            operator = buttonSelected;
            display.textContent = `${firstNumber}` + operator;
            displayCalculation.textContent = `${firstNumber}` + operator;
        }

    });
});

const resultButton = document.querySelector(".resultButton")
resultButton.addEventListener("click", function(e) {
    if(firstNumber != null && secondNumber != null && operator != null) {
        result = operate(firstNumber, secondNumber, operator);
        display.textContent = result;
        displayCalculation.textContent += `=`;
        firstNumber = result;
        secondNumber = null;
        operator = null;
    }

});

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", function(e) {
    resetVariables();
    display.textContent = "";
    displayCalculation.textContent = "";
});


