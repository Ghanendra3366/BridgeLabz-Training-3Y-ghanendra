// The bonus is global and can be read by calculateSalary().
let bonus = 5000;
let isPermanent = false;

function calculateSalary(permanentStatus) {
    // Function-local values shadow the global status without changing it.
    let salary = 40000;
    let isPermanent = permanentStatus;

    if (isPermanent) {
        salary += bonus;
    }

    console.log(`Permanent: ${isPermanent} | Total salary: Rs. ${salary}`);
}

// Compare both local statuses, then show the global status is unchanged.
calculateSalary(true);
calculateSalary(false);
console.log(`Global isPermanent is still ${isPermanent}; global bonus is still Rs. ${bonus}.`);