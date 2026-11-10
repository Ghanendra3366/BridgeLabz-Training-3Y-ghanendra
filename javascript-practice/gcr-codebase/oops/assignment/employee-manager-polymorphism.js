"use strict";

// Employee provides the base behavior; Manager overrides work() polymorphically.
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is contributing to ${this.department}.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} is coordinating the ${this.department} team.`;
    }
}

const team = [
    new Employee("Asha", "Design"),
    new Manager("Rohan", "Engineering"),
    new Employee("Mira", "Research")
];

// The same method call dispatches to each object's runtime implementation.
team.forEach((teamMember) => console.log(teamMember.work()));