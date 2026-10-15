// Calculate the requested scientific values for x.
const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubedValue = Math.pow(x, 3);
const randomValue = Math.floor(Math.random() * 41) + 10;

// Template literals keep the dashboard output readable and consistent.
console.log(`Math Utility Dashboard
Input: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Power (x^3): ${cubedValue.toFixed(2)}
Random number (10-50): ${randomValue}`);