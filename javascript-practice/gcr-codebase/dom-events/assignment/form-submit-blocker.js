"use strict";

function getFormErrors(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = "Name is required.";
    if (!values.email.trim()) errors.email = "Email is required.";
    else if (!values.email.includes("@")) errors.email = "Email must contain @.";
    if (values.password.length < 6) errors.password = "Password must be at least 6 characters.";
    return errors;
}

if (typeof document === "undefined") {
    console.log("Sample form errors:", getFormErrors({ name: "", email: "invalid", password: "123" }));
} else {
    const app = document.createElement("main");
    app.innerHTML = `<h1>Contact registration</h1><form id="submit-form" novalidate>
        <label for="name">Name</label><input id="name" name="name"><small data-error="name" aria-live="polite"></small>
        <label for="email">Email</label><input id="email" name="email" type="email"><small data-error="email" aria-live="polite"></small>
        <label for="password">Password</label><input id="password" name="password" type="password"><small data-error="password" aria-live="polite"></small>
        <button type="submit">Submit</button></form><p id="submit-status" aria-live="polite"></p>`;
    const style = document.createElement("style");
    style.textContent = `body{font:16px system-ui;background:#f4f5f0;color:#24332d;padding:30px}main{max-width:540px;margin:auto;padding:28px;background:white;border-radius:10px}label{display:block;margin-top:14px;font-weight:650}input{display:block;width:100%;box-sizing:border-box;padding:10px;margin-top:5px;border:1px solid #aab8b0;border-radius:5px}small{display:block;min-height:1.3em;color:#b42318}button{margin-top:12px;padding:10px 18px;background:#275f4b;color:white;border:0;border-radius:6px}#submit-status{font-weight:700;color:#176b45}`;
    document.head.append(style);
    document.body.append(app);

    const form = app.querySelector("#submit-form");
    const status = app.querySelector("#submit-status");
    function validateAndRender() {
        const values = Object.fromEntries(new FormData(form));
        const errors = getFormErrors(values);
        for (const field of ["name", "email", "password"]) {
            const input = form.elements.namedItem(field);
            const message = form.querySelector(`[data-error="${field}"]`);
            message.textContent = errors[field] || "";
            input.style.borderColor = errors[field] ? "#b42318" : "#27804f";
            if (errors[field]) input.setAttribute("aria-invalid", "true");
            else input.removeAttribute("aria-invalid");
        }
        return errors;
    }

    form.addEventListener("submit", (event) => {
        // Always block navigation; valid data is acknowledged in place.
        event.preventDefault();
        const errors = validateAndRender();
        status.textContent = Object.keys(errors).length === 0 ? "Form Submitted Successfully" : "Please fix the errors above.";
    });
    form.addEventListener("input", (event) => {
        const field = event.target.name;
        if (!field) return;
        const errors = validateAndRender();
        if (!errors[field]) status.textContent = "";
    });
}