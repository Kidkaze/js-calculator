// Create Add function
const add = function(a, b) {
        return (a + b);
};

// Create subtract function
const subtract = function(a, b) {
    return (a - b);
};

// Create multiplication function 
const multiply = function(a, b) {
    return (a * b);
};

// create division function 
const divide = function(a, b) {
    return (a / b);
};

// Selectors 
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('#decimal')
const ac = document.querySelector('#clear');
let displayValue = 0;
let firstVal = '';
let secondVal = '';
let operator;

// Default Display Value
display.value = displayValue;

// Reset the screen back to 0
const clearAll = function() {
    const ac = document.querySelector('#clear');
        ac.addEventListener('click', (e) => {
            const {target} = e;
                if(target.matches('#clear')) {
                    return displayValue;
                }
        });
};

clearAll();

// Populate display screen
const populateScreen = function() {
    number
}