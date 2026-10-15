// Generate eight random scores in the inclusive range 30 through 100.
const studentScores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Map creates labeled records, while reduce, Math, and filter summarize scores.
const scoreReport = studentScores.map((score, index) => ({
    student: `Student ${index + 1}`,
    score
}));
const scoreTotal = studentScores.reduce((total, score) => total + score, 0);
const averageScore = scoreTotal / studentScores.length;
const highestScore = Math.max(...studentScores);
const lowestScore = Math.min(...studentScores);
const passedStudents = studentScores.filter((score) => score >= 50).length;

console.table(scoreReport);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedStudents} of ${studentScores.length}`);