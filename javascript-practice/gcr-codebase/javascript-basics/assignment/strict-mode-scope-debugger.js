"use strict";

// Run the original undeclared assignment in isolation to display its strict-mode error.
try {
    Function('"use strict"; greeting = "Welcome"; console.log(greeting);')();
} catch (error) {
    console.log(`Original code error: ${error.name} - ${error.message}`);
}

// A declared local variable fixes the error and stays inside this function's scope.
let watchGreeting = "not initialized";
function showMessage() {
    const greeting = "Welcome";
    watchGreeting = greeting;

    // Add watchGreeting and greeting to VS Code's Watch panel at this pause.
    debugger;
    console.log(greeting);
}

showMessage();
console.log(`Watch value after showMessage(): ${watchGreeting}`);
console.log("Debugger call stack: showMessage() is called by the top-level script.");