// Run: npx json-server db.json --port 3104
"use strict";
const baseUrl = "http://localhost:3104";

async function loadDashboard() {
  try {
    const responses = await Promise.all([
      fetch(`${baseUrl}/users`),
      fetch(`${baseUrl}/orders`),
      fetch(`${baseUrl}/products`)
    ]);
    if (responses.some((response) => !response.ok)) throw new Error("One or more dashboard APIs failed.");

    const [users, orders, products] = await Promise.all(responses.map((response) => response.json()));
    document.querySelector("#userCount").textContent = users.length;
    document.querySelector("#orderCount").textContent = orders.length;
    document.querySelector("#productCount").textContent = products.length;
  } catch (error) {
    document.querySelector("#dashboardWarning").textContent = "Some data could not be loaded.";
    document.querySelector("#userCount").textContent = "--";
    document.querySelector("#orderCount").textContent = "--";
    document.querySelector("#productCount").textContent = "--";
  }
}

loadDashboard();
