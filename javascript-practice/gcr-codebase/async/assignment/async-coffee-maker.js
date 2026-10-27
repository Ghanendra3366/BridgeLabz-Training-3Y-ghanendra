"use strict";

// Every preparation step resolves after 1-2 seconds and can fail at random.
function prepareCoffeeStep(stepName, completionMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1001);
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed. Please restart the coffee maker.`));
                return;
            }
            console.log(completionMessage);
            resolve();
        }, delay);
    });
}

console.log("Coffee process started.");
prepareCoffeeStep("Boiling water", "Step 1: Water boiled.")
    .then(() => prepareCoffeeStep("Brewing coffee", "Step 2: Coffee brewed."))
    .then(() => prepareCoffeeStep("Pouring coffee", "Step 3: Coffee poured into a cup."))
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.log(`Coffee process failed: ${error.message}`));