"use strict";

// Each server has its own response time and a simulated chance of failure.
function requestServer(serverName, responseDelay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
                return;
            }
            console.log(`${serverName} responded.`);
            resolve(`${serverName} deployment complete`);
        }, responseDelay);
    });
}

const serverResponses = [requestServer("Server A", 2000), requestServer("Server B", 3000)];

// all() waits for both successes; race() settles as soon as one request settles.
Promise.all(serverResponses)
    .then(() => console.log("Deployment completed for all servers"))
    .catch((error) => console.log(`Deployment error: ${error.message}`));

Promise.race(serverResponses)
    .then((firstResponse) => console.log(`Fastest response: ${firstResponse}`))
    .catch((error) => console.log(`Fastest response failed: ${error.message}`));