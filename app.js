// Create Add function
const add = function(a, b) {
        return parseInt(a + b);
};

// Create subtract function
const subtract = function(a, b) {
    return parseInt(a - b);
};

// Create multiplication function 
const multiply = function(a, b) {
    return parseInt(a * b);
};

// create division function 
const divide = function(a, b) {
    return parseInt(a / b);
};

// Operate function 
const operate = function(add, subtract, multiply, divide) {
    if(add) {
        return add(a, b);
    } else if(subtract) {
        return subtract(a, b);
    } else if(multiply) {
        return multiply(a, b);
    } else if(divide) {
        return divide(a, b);
    }
};

let calculator = {
    'screen': 0,
    'firstValue': null,
    'operator': null,
    'secondValue': null,
};

const screenDisplay = function() {
    const display = document.querySelector('.display');
    display.value = calculator.screen;
};

screenDisplay();