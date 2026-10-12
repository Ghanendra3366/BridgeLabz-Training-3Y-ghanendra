// Generate a secret from 1 to 50 and compare it with this test guess.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
    console.log(`Very close! The secret number was ${secretNumber}.`);
} else {
    // The nested check reports the direction only after ruling out a close guess.
    if (userGuess > secretNumber) {
        console.log(`Too high. The secret number was ${secretNumber}.`);
    } else {
        console.log(`Too low. The secret number was ${secretNumber}.`);
    }
}