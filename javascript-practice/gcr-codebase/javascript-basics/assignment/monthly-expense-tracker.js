// Store the five monthly categories and calculate the total before tax.
const expenses = [
    { category: "Food", amount: 12500 },
    { category: "Travel", amount: 4200 },
    { category: "Rent", amount: 18000 },
    { category: "Bills", amount: 3100 },
    { category: "Leisure", amount: 2600 }
];

const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
const averageExpense = totalExpenses / expenses.length;
let finalAmount = totalExpenses;
finalAmount += finalAmount * 0.10;

console.log(`Total expenses: $${totalExpenses.toFixed(2)}`);
console.log(`Average category expense: $${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: $${finalAmount.toFixed(2)}`);