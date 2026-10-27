"use strict";

// The returned function closes over multiplier after makeMultiplier has returned.
function makeMultiplier(multiplier) {
    return function multiply(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);
console.log(`3 times 5 = ${triple(5)}`);
console.log(`2 times 8 = ${double(8)}`);
console.log("Each closure remembers the multiplier from its own makeMultiplier call.");