"use strict";

const MAX_CHARACTERS = 100;

function getCounterState(remainingCharacters) {
    if (remainingCharacters === 0) return "limit-reached";
    if (remainingCharacters <= 20) return "near-limit";
    return "within-limit";
}

if (typeof document === "undefined") {
    console.log(`Character counter ready; limit is ${MAX_CHARACTERS}.`);
    console.log(`At 20 characters remaining: ${getCounterState(20)}`);
} else {
    const app = document.createElement("main");
    app.innerHTML = `<h1>Live Character Counter</h1><label for="message">Your message</label><textarea id="message" rows="6" aria-describedby="counter"></textarea><p id="counter" aria-live="polite">100 characters remaining</p><button id="reset-counter" type="button">Reset</button>`;
    const style = document.createElement("style");
    style.textContent = `body{font:16px system-ui;background:#f5f4ed;color:#262d2a;padding:32px}main{max-width:600px;margin:auto;background:white;padding:28px;border-radius:10px}textarea{display:block;width:100%;box-sizing:border-box;padding:12px;font:inherit;border:1px solid #aeb8b3;border-radius:6px}button{padding:10px 18px;background:#245b4b;color:white;border:0;border-radius:6px;cursor:pointer}#counter{font-weight:700}.near-limit{color:#a46b00}.limit-reached{color:#b42318}`;
    document.head.append(style);
    document.body.append(app);

    const textarea = app.querySelector("#message");
    const counter = app.querySelector("#counter");
    function updateCounter() {
        const remaining = MAX_CHARACTERS - textarea.value.length;
        counter.textContent = `${remaining} characters remaining`;
        counter.className = getCounterState(remaining);
    }

    // beforeinput prevents extra text, including most paste and typing actions.
    textarea.addEventListener("beforeinput", (event) => {
        if (textarea.value.length >= MAX_CHARACTERS && event.inputType.startsWith("insert")) {
            event.preventDefault();
        }
    });
    textarea.addEventListener("input", () => {
        if (textarea.value.length > MAX_CHARACTERS) textarea.value = textarea.value.slice(0, MAX_CHARACTERS);
        updateCounter();
    });
    app.querySelector("#reset-counter").addEventListener("click", () => {
        textarea.value = "";
        updateCounter();
        textarea.focus();
    });
}