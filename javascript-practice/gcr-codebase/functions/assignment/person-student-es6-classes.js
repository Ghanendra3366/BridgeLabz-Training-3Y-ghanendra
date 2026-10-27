"use strict";

// ES6 class syntax uses extends and super() to express the same inheritance.
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    getBranch() {
        return this.branch;
    }

    getDetails() {
        return `${this.getName()} studies ${this.getBranch()}.`;
    }
}

// Compare the ES6 class output with the constructor/prototype implementation.
const classStudent = new Student("Anaya", "Computer Science");
console.log(classStudent.getDetails());
console.log(`Person method inherited: ${classStudent instanceof Person}`);
console.log(`Student method available: ${classStudent.getBranch()}`);