"use strict";

// Salary is stored monthly; bonus adjusts it before annual payout is calculated.
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary *= 1 + percent / 100;
    }
}

const employees = [
    new Employee(1, "Asha Patel", "Design", 65000),
    new Employee(2, "Dev Shah", "Engineering", 82000),
    new Employee(3, "Mira Das", "Marketing", 58000),
    new Employee(4, "Rohan Iyer", "Operations", 61000),
    new Employee(5, "Nina Roy", "Finance", 72000)
];

// Apply a 5% annual salary bonus, then total the resulting annual payroll.
employees.forEach((employee) => employee.applyBonus(5));
employees.forEach((employee) => console.log(`${employee.name} (${employee.department}): Rs. ${employee.getAnnualSalary().toFixed(2)} annually`));
const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`Total annual company payout: Rs. ${totalAnnualPayout.toFixed(2)}`);