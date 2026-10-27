"use strict";

// Promise-based replacement for the callback-style fetchBugs function.
function getBugs(shouldFail = Math.random() < 0.25) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Bug tracker API is temporarily unavailable."));
                return;
            }
            resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Current bugs:");
        console.table(bugs.map((description, index) => ({ number: index + 1, description })));
    })
    .catch((error) => console.log(`Could not load bugs: ${error.message}`));