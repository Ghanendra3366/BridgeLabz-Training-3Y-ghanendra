// Run: npx json-server db.json --port 3102
"use strict";
const apiUrl = "http://localhost:3102/employees";

function loadEmployees() {
  const request = new XMLHttpRequest();
  request.open("GET", apiUrl);
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      renderEmployees(JSON.parse(request.responseText));
    } else showError("Could not load employees.");
  };
  request.onerror = () => showError("Could not load employees.");
  request.send();
}

function renderEmployees(employees) {
  const list = document.querySelector("#employeeList");
  list.innerHTML = "";
  employees.forEach((employee) => {
    const row = document.createElement("article");
    row.className = "employee";
    row.dataset.employeeId = employee.id;
    row.innerHTML = `<strong>${employee.name}</strong><button type="button" data-status="${employee.status}">${employee.status === "active" ? "Active" : "Inactive"}</button>`;
    row.querySelector("button").addEventListener("click", () => toggleEmployee(employee, row));
    list.append(row);
  });
}

function toggleEmployee(employee, row) {
  const button = row.querySelector("button");
  const previousStatus = employee.status;
  const nextStatus = previousStatus === "active" ? "inactive" : "active";
  button.dataset.status = nextStatus;
  button.textContent = nextStatus === "active" ? "Active" : "Inactive";

  const request = new XMLHttpRequest();
  request.open("PATCH", `${apiUrl}/${employee.id}`);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      employee.status = nextStatus;
      showError("");
    } else revertStatus(button, previousStatus);
  };
  request.onerror = () => revertStatus(button, previousStatus);
  request.send(JSON.stringify({ status: nextStatus }));
}

function revertStatus(button, status) {
  button.dataset.status = status;
  button.textContent = status === "active" ? "Active" : "Inactive";
  showError("Status update failed. The previous status was restored.");
}

function showError(message) { document.querySelector("#employeeError").textContent = message; }
loadEmployees();
