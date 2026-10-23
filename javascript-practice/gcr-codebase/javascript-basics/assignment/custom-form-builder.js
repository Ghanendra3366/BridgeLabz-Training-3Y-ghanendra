"use strict";

// Generate labeled controls from trusted field configuration objects.
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.form = document.createElement("form");
        this.form.innerHTML = `${fields.map((field, index) => {
            const fieldId = `builder-field-${index}`;
            return `<label for="${fieldId}">${field.label}</label><input id="${fieldId}" name="${field.name}" type="${field.type}" required>`;
        }).join("")}<button type="submit">Submit</button>`;
    }

    getFormData() {
        return Object.fromEntries(new FormData(this.form));
    }
}

// Only instantiate when a browser DOM exists; this file remains syntax-checkable in Node.
if (typeof document !== "undefined") {
    const builder = new FormBuilder([
        { type: "text", name: "username", label: "Username" },
        { type: "email", name: "email", label: "Email" }
    ]);
    const heading = document.createElement("h1");
    heading.textContent = "Custom Form Builder";
    document.body.append(heading, builder.form);
    builder.form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Submitted form data:", builder.getFormData());
    });
} else {
    console.log("FormBuilder is ready to render when run in a browser.");
}