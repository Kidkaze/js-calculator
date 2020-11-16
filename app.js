// Create Add function
function add(a, b) {
        return a + b;
}

// Create subtract function
function subtract(a, b) {
    return a - b;
}

// Create multiplication function 
function multiply(a, b) {
    return a * b;
}

// create division function 
function divide(a, b) {
    return a / b;
}

// Operate function 
function operate(add, subtract, multiply, divide) {
    if(add) {
        return add(a, b);
    } else if(subtract) {
        return subtract(a, b);
    } else if(multiply) {
        return multiply(a, b);
    } else if(divide) {
        return divide(a, b);
    }
}