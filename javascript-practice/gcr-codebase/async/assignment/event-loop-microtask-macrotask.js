"use strict";

console.log("Start");

// setTimeout queues a macrotask; a resolved Promise queues a microtask.
setTimeout(() => console.log("Macrotask: setTimeout callback"), 0);
Promise.resolve().then(() => console.log("Microtask: Promise callback"));

console.log("Synchronous log");
console.log("End");

// Expected order: Start, Synchronous log, End, Promise callback, setTimeout callback.
// JavaScript drains the microtask queue before it starts the next macrotask.