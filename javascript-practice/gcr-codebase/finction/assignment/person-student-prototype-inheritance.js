"use strict";

// Person owns the shared name property and name-related prototype method.
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function getName() {
    return this.name;
};

// Student inherits Person methods and adds its own branch data and method.
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.getBranch = function getBranch() {
    return this.branch;
};
Student.prototype.getDetails = function getDetails() {
    return `${this.getName()} studies ${this.getBranch()}.`;
};

const student = new Student("Anaya", "Computer Science");
console.log(student.getDetails());
console.log(`Person method inherited: ${student instanceof Person}`);
console.log(`Student method available: ${student.getBranch()}`);