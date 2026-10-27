"use strict";

// Section loaders take different times and randomly reject to simulate API errors.
function loadSection(sectionName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error(`${sectionName} could not be loaded.`));
                return;
            }
            resolve(`${sectionName} Loaded`);
        }, delay);
    });
}

async function loadDashboard() {
    const startedAt = Date.now();
    const sectionPromises = [
        loadSection("Profile", 2000),
        loadSection("Posts", 1500),
        loadSection("Messages", 1000)
    ];

    // allSettled waits for every section and preserves successful results if another fails.
    const results = await Promise.allSettled(sectionPromises);
    results.forEach((result, index) => {
        const sectionName = ["Profile", "Posts", "Messages"][index];
        if (result.status === "fulfilled") {
            console.log(`${sectionName}: success - ${result.value}`);
        } else {
            console.log(`${sectionName}: failed - ${result.reason.message}`);
        }
    });
    console.log(`Total loading time: ${Date.now() - startedAt} ms`);
}

loadDashboard().catch((error) => console.log(`Dashboard loader error: ${error.message}`));