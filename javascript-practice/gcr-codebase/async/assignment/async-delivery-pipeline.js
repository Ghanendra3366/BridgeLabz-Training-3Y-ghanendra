"use strict";

// Each delivery stage returns a Promise with a 1-2 second delay and random failure.
function runDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1001);
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} did not complete.`));
                return;
            }
            console.log(successMessage);
            resolve();
        }, delay);
    });
}

function takeOrder() {
    return runDeliveryStep("takeOrder", "Step 1: Order taken");
}
function prepareFood() {
    return runDeliveryStep("prepare", "Step 2: Food prepared");
}
function packOrder() {
    return runDeliveryStep("pack", "Step 3: Package ready");
}
function dispatchOrder() {
    return runDeliveryStep("dispatch", "Step 4: Out for delivery");
}
function deliverOrder() {
    return runDeliveryStep("deliver", "Delivery completed!");
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        // Each await suspends this async function; its continuation resumes as a microtask.
        // Timers are macrotasks, and each next stage starts only after the prior Promise resolves.
        await takeOrder();
        await prepareFood();
        await packOrder();
        await dispatchOrder();
        await deliverOrder();
    } catch (error) {
        console.log("Pipeline failed!");
        console.log(`Failure detail: ${error.message}`);
    }
}

runPipeline();