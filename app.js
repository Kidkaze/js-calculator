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

// Screen logic for the data keys
const  calculator = {
    'screen': 0,
    'firstValue': null,
    'operatorSelected': null,
    'secondValue': null,
}

// Display value being clicked
const display = document.querySelector('.display');
    display.value = calculator.screen;

const screenDisplay = function() {
    const keyPress = document.querySelector('.keys');
        keyPress.addEventListener('click', (e) => {
            const {target} = e;
                if(target.matches('[data-key]')){
                    display.value = (target.dataset.key);
                } 
        });
};

screenDisplay();

// Reset the screen back to 0
const clear = function() {
    const ac = document.querySelector('#clear');
        ac.addEventListener('click', (e) => {
            const {target} = e;
                if(target.matches('#clear')) {
                    display.value = 0;
                }
        });
};

clear();

