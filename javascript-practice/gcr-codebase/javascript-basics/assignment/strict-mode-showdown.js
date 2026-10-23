"use strict";

// In sloppy mode duplicate parameters are allowed, and an undeclared assignment creates a global.
const sloppyDemo = Function(
    "a",
    "a",
    'total = 10; const createdGlobal = globalThis.total === 10; const deleted = delete total; return { createdGlobal, deleted, totalAfterDelete: globalThis.total };'
);
try {
    const sloppyResult = sloppyDemo(5, 10);
    console.log("Sloppy duplicate-parameter result:", sloppyResult);
    console.log(`Sloppy global total after delete: ${String(globalThis.total)}`);
} catch (error) {
    console.log(`Sloppy demo error: ${error.name} - ${error.message}`);
}

// Strict mode rejects duplicate parameter names during parsing.
try {
    Function('"use strict"; function demo(a, a) { total = 10; delete total; } demo(5, 10);')();
} catch (error) {
    console.log(`Strict duplicate-parameter error: ${error.name} - ${error.message}`);
}

// Strict mode rejects deleting an unqualified identifier during parsing.
try {
    Function('"use strict"; const localValue = 10; delete localValue;')();
} catch (error) {
    console.log(`Strict delete-identifier error: ${error.name} - ${error.message}`);
}

// If duplicate parameters are removed, strict mode still rejects an undeclared assignment.
try {
    Function('"use strict"; total = 10;')();
} catch (error) {
    console.log(`Strict undeclared-variable error: ${error.name} - ${error.message}`);
}

// ES6-style parameters and a local binding avoid both errors; bindings are not deleted.
function demoCorrect(first, second) {
    const total = first + second;
    return total;
}

console.log(`Correct strict-mode result: ${demoCorrect(5, 10)}`);
console.log("Strict mode disallows duplicate parameters, implicit globals, and deleting identifiers.");