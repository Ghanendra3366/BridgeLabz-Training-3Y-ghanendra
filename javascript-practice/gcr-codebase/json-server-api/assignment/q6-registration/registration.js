// Run: npx json-server db.json --port 3106
"use strict";
const baseUrl = "http://localhost:3106/users";

const form = document.querySelector("#registrationForm");
const message = document.querySelector("#registrationMessage");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const user = {
    name: formData.get("name").trim(),
    email: formData.get("email").trim().toLowerCase(),
    password: formData.get("password")
  };

  try {
    const existingUsers = await axios.get(baseUrl, { params: { email: user.email } });
    if (existingUsers.data.length) {
      message.className = "message error";
      message.textContent = "Email already registered.";
      return;
    }

    await axios.post(baseUrl, user);
    message.className = "message success";
    message.textContent = "Registration successful.";
    form.reset();
  } catch (error) {
    message.className = "message error";
    message.textContent = "Registration could not be completed.";
  }
});
