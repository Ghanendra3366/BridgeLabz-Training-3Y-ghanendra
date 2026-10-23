"use strict";

// var is hoisted with an undefined value; function declarations are callable early.
console.log(`score before assignment: ${score}`);
announce();
var score = 50;
function announce() {
    console.log("Game started");
}

// let is hoisted but remains in the temporal dead zone until initialized.
try {
    console.log(status);
} catch (error) {
    console.log(`status before declaration: ${error.name} (temporal dead zone)`);
}
let status = "ready";
startGame();
function startGame() {
    console.log(`status inside startGame(): ${status}`);
}

// Corrected version declares values before calling the arrow functions.
const fixedScore = 50;
const fixedStatus = "ready";
const announceWithArrow = () => console.log("Game started (arrow version)");
const startGameWithArrow = () => console.log(`Fixed score: ${fixedScore}; status: ${fixedStatus}`);
announceWithArrow();
startGameWithArrow();
console.log("Arrow functions assigned to const are not hoisted like function declarations.");