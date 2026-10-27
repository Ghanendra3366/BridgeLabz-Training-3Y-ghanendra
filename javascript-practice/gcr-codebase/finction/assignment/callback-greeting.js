"use strict";

// The greeting calls the supplied callback only after printing the user's name.
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// Passing the function reference lets greetUser control when it is executed.
console.log("1. Calling greetUser");
greetUser("Aarav", showEndMessage);
console.log("3. Callback finished");