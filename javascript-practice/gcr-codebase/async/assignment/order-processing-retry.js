"use strict";

// This API simulation succeeds or fails with equal probability on each request.
function submitOrder() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            reject(new Error("Temporary order service failure."));
        } else {
            resolve("Order accepted");
        }
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt += 1) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success - ${result}`);
            return result;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed - ${error.message}`);
        }
    }

    throw new Error("Order could not be processed");
}

processOrder().catch((error) => console.log(`Final order status: ${error.message}`));