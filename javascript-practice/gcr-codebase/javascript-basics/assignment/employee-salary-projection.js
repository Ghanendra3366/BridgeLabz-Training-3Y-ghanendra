// Project salary at the end of each year using a fixed annual increment rate.
const currentSalary = 600000;
const annualIncrementRate = 8;
let projectedSalary = currentSalary;
const salaryProjection = [];

for (let year = 1; year <= 5; year += 1) {
    projectedSalary += projectedSalary * annualIncrementRate / 100;
    salaryProjection.push({
        year: `Year ${year}`,
        salary: Math.round(projectedSalary)
    });
}

console.table(salaryProjection);