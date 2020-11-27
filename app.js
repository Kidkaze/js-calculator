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

const  calculator = {
    'screen': 0,
    'firstValue': null,
    'operatorSelected': null,
    'secondValue': null,
}

const screenDisplay = function() {
    const display = document.querySelector('.display');
    display.value = calculator.screen;
    const keyPress = document.querySelector('.keys');
keyPress.addEventListener('click', (e) => {
    const {target} = e;
    if(target.matches('button')){
        display.value = (target.dataset.key);
    } 
});
};

screenDisplay();


