"use strict";

function validateStep(stepIndex, value) {
    const normalizedValue = value.trim();
    if (stepIndex === 0) return normalizedValue.length > 0 ? "" : "Enter your name to continue.";
    if (stepIndex === 1) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedValue) ? "" : "Enter a valid email address.";
    return normalizedValue.length >= 8 ? "" : "Password must contain at least 8 characters.";
}

if (typeof document === "undefined") {
    console.log("Sample step validation:", validateStep(1, "learner@example.com") || "valid");
} else {
    const fields = [
        { label: "Name", name: "name", type: "text", placeholder: "Your name" },
        { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
        { label: "Password", name: "password", type: "password", placeholder: "At least 8 characters" }
    ];
    const app = document.createElement("main");
    app.innerHTML = `<h1>Account setup</h1><p id="step-indicator"></p><form id="step-form" novalidate><label id="field-label"></label><input id="step-input"><p id="step-error" aria-live="polite"></p><button id="back-button" type="button">Back</button><button id="next-button" type="submit">Next</button></form><section id="summary" hidden></section>`;
    const style = document.createElement("style");
    style.textContent = `body{font:16px system-ui;background:#eaf1ed;color:#19332c;padding:32px}main{max-width:520px;margin:auto;padding:30px;background:white;border-radius:10px}input{display:block;width:100%;box-sizing:border-box;margin:8px 0;padding:12px;border:1px solid #9db4a8;border-radius:6px}button{margin:8px 8px 0 0;padding:10px 16px;border:0;border-radius:6px;background:#216b56;color:white;cursor:pointer}#step-error{color:#b42318;min-height:1.5em}#back-button{background:#687873}`;
    document.head.append(style);
    document.body.append(app);

    const form = app.querySelector("#step-form");
    const input = app.querySelector("#step-input");
    const stepError = app.querySelector("#step-error");
    const summary = app.querySelector("#summary");
    const values = {};
    let currentStep = 0;

    function renderStep() {
        const field = fields[currentStep];
        app.querySelector("#step-indicator").textContent = `Step ${currentStep + 1} of ${fields.length}`;
        app.querySelector("#field-label").textContent = field.label;
        app.querySelector("#field-label").htmlFor = "step-input";
        input.type = field.type;
        input.name = field.name;
        input.placeholder = field.placeholder;
        input.value = values[field.name] || "";
        app.querySelector("#back-button").disabled = currentStep === 0;
        app.querySelector("#next-button").textContent = currentStep === fields.length - 1 ? "Finish" : "Next";
        stepError.textContent = "";
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const errorMessage = validateStep(currentStep, input.value);
        if (errorMessage) {
            stepError.textContent = errorMessage;
            input.setAttribute("aria-invalid", "true");
            return;
        }
        values[fields[currentStep].name] = input.value.trim();
        if (currentStep < fields.length - 1) {
            currentStep += 1;
            renderStep();
            input.focus();
            return;
        }
        form.hidden = true;
        app.querySelector("#step-indicator").hidden = true;
        summary.hidden = false;
        summary.innerHTML = `<h2>Registration summary</h2><p></p><p></p><p></p>`;
        [values.name, values.email, "Password saved"].forEach((value, index) => {
            summary.querySelectorAll("p")[index].textContent = `${fields[index].label}: ${value}`;
        });
    });

    input.addEventListener("input", () => {
        stepError.textContent = "";
        input.removeAttribute("aria-invalid");
    });
    app.querySelector("#back-button").addEventListener("click", () => {
        if (currentStep === 0) return;
        values[fields[currentStep].name] = input.value;
        currentStep -= 1;
        renderStep();
        input.focus();
    });
    renderStep();
}