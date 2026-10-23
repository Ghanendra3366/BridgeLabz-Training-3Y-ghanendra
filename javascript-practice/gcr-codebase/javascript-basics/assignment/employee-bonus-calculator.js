"use strict";

// Employee values arrive as strings, so validate and convert them before calculating.
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        if (!employee || !Object.prototype.hasOwnProperty.call(employee, "salary") || !Object.prototype.hasOwnProperty.call(employee, "years")) {
            throw new TypeError("Employee record is missing salary or years.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);
        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError("Salary and years must convert to valid numbers.");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        console.log(`${employee.name}: salary Rs. ${salary.toFixed(2)}, service ${years} years, bonus Rs. ${bonus.toFixed(2)}`);
    } catch (error) {
        console.log(`Employee record error: ${error.message}`);
    }
}