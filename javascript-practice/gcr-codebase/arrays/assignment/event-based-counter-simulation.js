// The outer function owns count; its nested functions share that lexical scope.
function runCounterSimulation() {
    let count = 0;

    function logCount(action) {
        console.log(`${action}: count is ${count}`);
    }

    function increment() {
        count += 1;
        logCount("Increment click");
    }

    function decrement() {
        count -= 1;
        logCount("Decrement click");
    }

    // Calling these functions simulates button click events.
    increment();
    increment();
    decrement();
}

runCounterSimulation();