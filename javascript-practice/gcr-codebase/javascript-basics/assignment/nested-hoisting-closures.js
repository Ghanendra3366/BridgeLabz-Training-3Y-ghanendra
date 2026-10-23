"use strict";

// Function-scoped var declarations are hoisted separately in each function context.
function outer() {
    console.log(`outer count before assignment: ${count}`);
    var count = 5;

    function inner() {
        // This inner var shadows outer count and is hoisted as undefined here.
        console.log(`inner count before assignment: ${count}`);
        var count = 10;
        console.log(`inner count after assignment: ${count}`);
    }

    // Inspect the call stack here: outer() -> inner().
    debugger;
    inner();
    console.log(`outer count after inner(): ${count}`);
}

outer();

// An arrow function also gets its own var scope; retaining var count keeps the same output.
function outerWithArrow() {
    var count = 5;
    const innerArrowWithLocalCount = () => {
        console.log(`arrow local count before assignment: ${count}`);
        var count = 10;
        console.log(`arrow local count after assignment: ${count}`);
    };
    innerArrowWithLocalCount();

    // Without a shadowing local var, an arrow closes over the outer count instead.
    const innerArrowUsingClosure = () => console.log(`arrow closure reads outer count: ${count}`);
    innerArrowUsingClosure();
}

outerWithArrow();
console.log("Arrow functions use lexical this/arguments; their local var declarations are still function-scoped.");