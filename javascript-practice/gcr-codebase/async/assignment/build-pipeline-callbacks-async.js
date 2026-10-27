"use strict";

const buildStages = ["design", "build", "test", "deploy", "celebrate"];

// First version: each callback nests another asynchronous stage.
function runCallbackPipeline() {
    console.log("Callback pipeline started.");
    function runStage(stageIndex) {
        if (stageIndex >= buildStages.length) {
            console.log("Callback pipeline complete.");
            return;
        }
        setTimeout(() => {
            console.log(`Callback stage: ${buildStages[stageIndex]}`);
            runStage(stageIndex + 1);
        }, 1000);
    }
    runStage(0);
}

// Second version: await keeps the same sequential behavior with flatter control flow.
function waitForBuildStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Async stage: ${stageName}`);
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    console.log("Async/await pipeline started.");
    for (const stageName of buildStages) {
        await waitForBuildStage(stageName);
    }
    console.log("Async/await pipeline complete.");
}

// async/await makes sequencing easier to scan and lets try/catch handle failures naturally.
runCallbackPipeline();
runAsyncPipeline().catch((error) => console.log(`Build pipeline failed: ${error.message}`));