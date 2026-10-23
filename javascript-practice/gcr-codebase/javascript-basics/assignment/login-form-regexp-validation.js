"use strict";

// Return field-specific messages so the user knows exactly what to correct.
function validateLogin(username, password) {
    const errors = [];
    if (username.length < 5) errors.push("Username must contain at least 5 characters.");
    if (password.length < 8) errors.push("Password must contain at least 8 characters.");
    if (!/[0-9]/.test(password)) errors.push("Password must include a number.");
    if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
    if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must include a special character.");
    return errors;
}

if (typeof document !== "undefined") {
    const section = document.createElement("section");
    section.innerHTML = `<h1>Sign in</h1><form id="login-form" novalidate>
        <label>Username <input name="username" autocomplete="username"></label><small data-errors="username"></small>
        <label>Password <input name="password" type="password" autocomplete="current-password"></label><small data-errors="password"></small>
        <button type="submit">Log in</button></form><p id="login-result" aria-live="polite"></p>`;
    document.body.append(section);

    section.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const values = Object.fromEntries(new FormData(event.currentTarget));
        const errors = validateLogin(values.username, values.password);
        section.querySelector('[data-errors="username"]').textContent = values.username.length < 5
            ? "Username must contain at least 5 characters."
            : "";
        section.querySelector('[data-errors="password"]').textContent = errors.filter((message) => message.startsWith("Password")).join(" ");
        for (const input of section.querySelectorAll("input")) {
            input.style.border = (input.name === "username" ? values.username.length < 5 : errors.some((message) => message.startsWith("Password")))
                ? "2px solid #c62828"
                : "2px solid #2e7d32";
        }
        section.querySelector("#login-result").textContent = errors.length === 0 ? "Login validation passed." : "Please correct the form errors.";
    });
} else {
    console.log("Valid login example errors:", validateLogin("riya88", "SecurePass8!"));
    console.log("Invalid login example errors:", validateLogin("ria", "weak"));
}