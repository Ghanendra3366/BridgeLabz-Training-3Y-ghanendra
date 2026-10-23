"use strict";

// Keep the supplied API values so every conversion can be inspected.
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

// Convert each value and separate blank or non-numeric values from valid numbers.
for (let index = 0; index < apiData.length; index += 1) {
    const originalValue = apiData[index];
    const numericValue = Number(originalValue);
    const booleanValue = Boolean(originalValue);
    const stringValue = String(originalValue);
    const isBlankString = typeof originalValue === "string" && originalValue.trim() === "";
    const isValidNumber = Number.isFinite(numericValue) && !isBlankString;

    const conversionReport = {
        index,
        original: stringValue,
        number: Number.isNaN(numericValue) ? "NaN" : numericValue,
        boolean: booleanValue,
        string: stringValue,
        status: isValidNumber ? "Valid number" : "Invalid number"
    };

    if (isValidNumber) {
        validNumericData.push({ originalValue, numericValue });
    } else {
        invalidNumericData.push({ originalValue, numericValue });
    }

    console.log(`Conversion ${index + 1}:`, conversionReport);
}

console.log("Valid numeric data:", validNumericData);
console.log("Invalid numeric data (inspect these separately):", invalidNumericData);