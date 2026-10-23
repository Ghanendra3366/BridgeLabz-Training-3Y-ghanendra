"use strict";

// Audit each raw JSON line and keep only records with a user and numeric age.
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    "{invalid}",
    '{"user":"Mina","age":"22"}'
];
const cleanData = [];
const auditErrors = [];

for (let index = 0; index < rawData.length; index += 1) {
    const lineNumber = index + 1;
    try {
        // Pause here to follow the valid path or the catch path in a debugger.
        debugger;
        const parsedEntry = JSON.parse(rawData[index]);

        if (!parsedEntry.user || parsedEntry.age === undefined) {
            throw new Error("Required key missing (user or age).");
        }

        const age = Number(parsedEntry.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number.");
        }

        cleanData.push({ ...parsedEntry, age });
        console.log(`Line ${lineNumber}: valid record for ${parsedEntry.user}.`);
    } catch (error) {
        const category = error instanceof SyntaxError ? "Invalid JSON" : "Invalid record";
        auditErrors.push({ lineNumber, category, message: error.message });
        console.log(`Line ${lineNumber}: ${category} - ${error.message}`);
    }
}

// The clean array already has numeric ages, so the under-18 filter is reliable.
const under18Users = cleanData.filter((entry) => entry.age < 18);
console.log("Clean records:", cleanData);
console.log("Under-18 users:", under18Users);
console.log("Audit errors:", auditErrors);