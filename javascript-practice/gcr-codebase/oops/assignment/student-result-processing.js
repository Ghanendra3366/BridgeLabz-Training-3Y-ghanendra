"use strict";

// Marks are out of 100; grade cutoffs are A >= 90, B >= 80, C >= 70, else F.
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (this.marks.length === 0) {
            throw new Error(`Cannot calculate an average for ${this.name}: no marks provided.`);
        }
        return this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();
        if (average >= 90) return "A";
        if (average >= 80) return "B";
        if (average >= 70) return "C";
        return "F";
    }
}

const students = [
    new Student("Aarav", [92, 88, 95, 91]),
    new Student("Mira", [84, 79, 82, 85]),
    new Student("Dev", [64, 71, 68, 73])
];

students.forEach((student) => {
    console.log(`${student.name}: average ${student.calculateAverage().toFixed(2)}, grade ${student.getGrade()}`);
});