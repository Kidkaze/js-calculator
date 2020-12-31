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

function operate(operator, a, b) {
   if (operator === add) {
       return a + b; 
   } else if (operator === subtract) {
       return a - b;
   } else if(operator === multiply) {
       return a * b;
   } else if (operator === divide) {
    return a / b;
   }
}

operate(); 

// Selectors 
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('#decimal')
const ac = document.querySelector('#clear');
let displayValue = 0;
let firstVal= '';
let secondVal = '';
let operator = '';

// Default Display Value
display.value = displayValue;


// Reset the screen back to 0
const clearAll = function() {
    const ac = document.querySelector('#clear');
        ac.addEventListener('click', (e) => {
            const {target} = e;
                if(target.matches('#clear')) {
                    display.value = displayValue;
                }
        });
};

clearAll();

// Populate display screen with first number
const screenDisplay = function() {
    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            if (operator === "") { // Read first number if no operator set yet
            firstVal += e.target.innerText;
            display.value = firstVal;
        } else { // Read second number
            secondVal += e.target.innerText;
            display.value = secondVal;
        }
        });
    });
};

screenDisplay();

operators.forEach(op => {
    op.addEventListener('click', e => {
        operator = e.target.innerText;
        console.log(operator);
    });
});