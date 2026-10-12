// Choose a greeting based on the user's local hour.
const userName = "Aarav";
const currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour <= 17) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

console.log(`${greeting} ${userName}!`);