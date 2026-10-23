"use strict";

// Keep each field's validation rule reusable in the browser and in Node.js.
const studentRules = {
    name: { label: "Name", pattern: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/, message: "Use letters and spaces only." },
    email: { label: "Email", pattern: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/, message: "Enter a valid email address." },
    phone: { label: "Phone", pattern: /^\d{10}$/, message: "Enter exactly 10 digits." },
    password: { label: "Password", pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, message: "Include an uppercase letter, a number, and a special character." }
};

function validateStudentForm(values) {
    return Object.entries(studentRules).reduce((errors, [field, rule]) => {
        if (!rule.pattern.test(values[field] || "")) {
            errors[field] = rule.message;
        }
        return errors;
    }, {});
}

// Build a small interactive form when this script runs in a browser.
if (typeof document !== "undefined") {
    const section = document.createElement("section");
    section.innerHTML = `<h1>Student Registration</h1><form id="student-form" novalidate>
        ${Object.entries(studentRules).map(([field, rule]) => `<label for="student-${field}">${rule.label}</label><input id="student-${field}" name="${field}" ${field === "password" ? 'type="password"' : field === "email" ? 'type="email"' : 'type="text"'} required><small id="error-${field}" aria-live="polite"></small>`).join("")}
        <button type="submit">Register</button></form><p id="student-result" aria-live="polite"></p>`;
    document.body.append(section);

    section.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const values = Object.fromEntries(new FormData(event.currentTarget));
        const errors = validateStudentForm(values);

        for (const field of Object.keys(studentRules)) {
            const input = section.querySelector(`[name="${field}"]`);
            const errorMessage = section.querySelector(`#error-${field}`);
            input.style.border = errors[field] ? "2px solid #c62828" : "2px solid #2e7d32";
            errorMessage.textContent = errors[field] || "";
        }
        section.querySelector("#student-result").textContent = Object.keys(errors).length === 0
            ? "Registration details are valid."
            : "Please correct the highlighted fields.";
    });
} else {
    console.log("Sample registration errors:", validateStudentForm({ name: "Asha Rao", email: "asha@example.com", phone: "9876543210", password: "Study2026!" }));
    console.log("Invalid phone example:", validateStudentForm({ name: "Asha Rao", email: "asha@example.com", phone: "12345", password: "Study2026!" }).phone);
}