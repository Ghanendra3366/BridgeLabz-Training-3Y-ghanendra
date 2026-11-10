"use strict";

// Private fields prevent code outside the class from directly changing the balance.
class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (!Number.isFinite(initialBalance) || initialBalance < 0) {
            throw new RangeError("Initial balance must be non-negative.");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new RangeError("Deposit amount must be greater than zero.");
        }
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new RangeError("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance for this withdrawal.");
        }
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
console.log(`Opening balance: Rs. ${account.getBalance().toFixed(2)}`);
console.log(`After deposit: Rs. ${account.deposit(500).toFixed(2)}`);
console.log(`After withdrawal: Rs. ${account.withdraw(300).toFixed(2)}`);

// Invalid withdrawals are caught without exposing or altering the private field.
try {
    account.withdraw(5000);
} catch (error) {
    console.log(`Withdrawal declined: ${error.message}`);
}
console.log(`Balance remains: Rs. ${account.getBalance().toFixed(2)}`);