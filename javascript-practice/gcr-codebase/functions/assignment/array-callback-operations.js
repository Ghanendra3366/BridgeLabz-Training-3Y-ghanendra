"use strict";

// applyOperation delegates each array value to the callback provided by the caller.
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const values = [1, 2, 3, 4];
const doubledValues = applyOperation(values, (number) => number * 2);
const squaredValues = applyOperation(values, (number) => number ** 2);

console.log(`Original numbers: ${values.join(", ")}`);
console.log(`Doubled numbers: ${doubledValues.join(", ")}`);
console.log(`Squared numbers: ${squaredValues.join(", ")}`);