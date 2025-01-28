function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if(b == 0) {
        return "ERROR";
    }
    return a / b;
}

function expontent(a,b) {
    return a ** b;
}

let firstNumber;
let secondNumber;
let operator;

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
            return expontent(a,b);
    }
}


const buttonsNodeList = document.querySelectorAll("button");
let display = document.querySelector(".display");

buttonsNodeList.forEach((button) => {
    button.addEventListener("click", function(e) {
        console.log(e.target.textContent);
        display.textContent = `${e.target.textContent}`;
    });
});
