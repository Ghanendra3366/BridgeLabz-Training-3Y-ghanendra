// Sample inputs; change them to test other age and citizenship combinations.
const age = 19;
const isCitizen = true;

let eligibilityMessage;
if (isCitizen) {
    if (age >= 21) {
        // Age 21 is used for all services so the requested 18-20 voting tier remains reachable.
        eligibilityMessage = "Eligible for all services.";
    } else if (age >= 18 && age <= 20) {
        eligibilityMessage = "Eligible to vote only.";
    } else {
        eligibilityMessage = "Not eligible yet.";
    }
} else if (age >= 18) {
    eligibilityMessage = "Only age criteria met.";
} else {
    eligibilityMessage = "Not eligible yet.";
}

console.log(eligibilityMessage);