"use strict";

// Custom error classes keep transaction failures easy to categorize.
class MissingTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingTransactionError";
    }
}
class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];
const validTransactions = [];
const invalidTransactions = [];

for (let index = 0; index < transactions.length; index += 1) {
    const transaction = transactions[index];
    try {
        // Set a debugger breakpoint here to inspect the current record and index.
        debugger;

        if (transaction === null || transaction === undefined) {
            throw new MissingTransactionError("Transaction entry is null.");
        }
        if (!Object.prototype.hasOwnProperty.call(transaction, "id") || !Object.prototype.hasOwnProperty.call(transaction, "amount")) {
            throw new MissingTransactionError("Transaction is missing an id or amount.");
        }
        if (transaction.amount < 0) {
            throw new NegativeAmountError("Transaction amount cannot be negative.");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: valid.`);
    } catch (error) {
        invalidTransactions.push({ index, transaction, errorType: error.name, message: error.message });
        console.log(`Transaction at index ${index}: ${error.name} - ${error.message}`);
    }
}

console.log(`Successful transactions: ${validTransactions.length}`, validTransactions);
console.log(`Failed transactions: ${invalidTransactions.length}`, invalidTransactions);