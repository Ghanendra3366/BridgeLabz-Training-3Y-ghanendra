"use strict";

// This object is updated in place after the edit form is submitted.
const user = { name: "John", email: "john@mail.com", age: 21 };

if (typeof document !== "undefined") {
    const section = document.createElement("section");
    section.innerHTML = `<h1>Edit user profile</h1><form id="user-form">
        <label>Name <input name="name" required></label>
        <label>Email <input name="email" type="email" required></label>
        <label>Age <input name="age" type="number" min="0" required></label>
        <button type="submit">Save changes</button></form><h2>Updated user</h2><pre id="user-details"></pre>`;
    document.body.append(section);

    const form = section.querySelector("#user-form");
    for (const [key, value] of Object.entries(user)) {
        form.elements.namedItem(key).value = value;
    }
    const details = section.querySelector("#user-details");
    details.textContent = JSON.stringify(user, null, 2);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formValues = Object.fromEntries(new FormData(form));
        user.name = formValues.name.trim();
        user.email = formValues.email.trim();
        user.age = Number(formValues.age);
        details.textContent = JSON.stringify(user, null, 2);
        console.log("Updated user:", user);
    });
} else {
    user.name = "John Smith";
    user.age = 22;
    console.log("Updated user example:", user);
}