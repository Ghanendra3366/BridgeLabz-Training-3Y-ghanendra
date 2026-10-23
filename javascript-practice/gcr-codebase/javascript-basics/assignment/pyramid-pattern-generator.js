"use strict";

// Read an optional row count from the Node command line; default to five rows.
const requestedLimit = Number.parseInt(process.argv[2] || "5", 10);
const rowLimit = Number.isInteger(requestedLimit) && requestedLimit > 0 ? requestedLimit : 5;

console.log(`Pyramid using let (${rowLimit} rows):`);
for (let row = 1; row <= rowLimit; row += 1) {
    // Set a breakpoint here to watch row and the current pattern text change.
    debugger;
    let pattern = "";
    for (let column = 1; column <= row; column += 1) {
        pattern += "* ";
    }
    console.log(pattern.trimEnd());
}

// Repeating the pattern with var gives the same immediate output.
console.log(`Pyramid using var (${rowLimit} rows):`);
for (var varRow = 1; varRow <= rowLimit; varRow += 1) {
    var varPattern = "";
    for (var varColumn = 1; varColumn <= varRow; varColumn += 1) {
        varPattern += "* ";
    }
    console.log(varPattern.trimEnd());
}

// Closures reveal var's reused function-scoped loop variable versus let's per-iteration binding.
const letCallbacks = [];
for (let index = 0; index < 3; index += 1) {
    letCallbacks.push(() => index);
}
const varCallbacks = [];
for (var varIndex = 0; varIndex < 3; varIndex += 1) {
    varCallbacks.push(() => varIndex);
}
console.log("let loop callback values:", letCallbacks.map((callback) => callback()));
console.log("var loop callback values:", varCallbacks.map((callback) => callback()));