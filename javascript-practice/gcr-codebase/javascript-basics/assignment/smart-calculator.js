"use strict";

// Custom errors distinguish unsupported operations from invalid math inputs.
class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}
class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;
        case "divide":
            if (secondNumber === 0) {
                throw new CalculationError("Cannot divide by zero.");
            }
            return firstNumber / secondNumber;
        case "power":
            return Math.pow(firstNumber, secondNumber);
        case "root":
            if (firstNumber < 0) {
                throw new CalculationError("Cannot find the real square root of a negative number.");
            }
            return Math.sqrt(firstNumber);
        case "subtract":
            return firstNumber - secondNumber;
        default:
            throw new InvalidOperationError(`Unknown operation: ${operation}`);
    }
}

// Run every requested operation and catch errors so the remaining tests continue.
for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}

// Explicitly exercise the negative-root and invalid-operation error paths.
for (const [operation, value] of [["root", -9], ["modulo", num1]]) {
    try {
        console.log(`${operation}: ${calculate(operation, value, num2)}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}