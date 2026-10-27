"use strict";

// Each constructor contributes one property and one method to the chain.
function Person(name) {
    this.name = name;
}
Person.prototype.introduce = function introduce() {
    return `Name: ${this.name}`;
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.describeDepartment = function describeDepartment() {
    return `Department: ${this.department}`;
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.describeSubject = function describeSubject() {
    return `Subject: ${this.subject}`;
};

// Professor instances can resolve methods from their own and inherited prototypes.
const professor = new Professor("Dr. Kavita Rao", "Physics", "Astrophysics");
console.log(professor.introduce());
console.log(professor.describeDepartment());
console.log(professor.describeSubject());
console.log(`Prototype chain is Person -> Faculty -> Professor: ${professor instanceof Person && professor instanceof Faculty && professor instanceof Professor}`);