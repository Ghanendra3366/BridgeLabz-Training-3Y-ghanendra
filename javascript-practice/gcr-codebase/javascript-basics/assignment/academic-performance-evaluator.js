// Five marks are out of 100; a failed subject prevents promotion.
const subjectMarks = [88, 91, 79, 86, 90];
const totalMarks = subjectMarks.reduce((total, mark) => total + mark, 0);
const averageMarks = totalMarks / subjectMarks.length;
const percentage = (totalMarks / (subjectMarks.length * 100)) * 100;
const hasFailedSubject = subjectMarks.some((mark) => mark < 35);

let result;
if (hasFailedSubject || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85 && averageMarks >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);