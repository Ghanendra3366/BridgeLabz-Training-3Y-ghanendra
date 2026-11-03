"use strict";

const studentRecords = [
    { name: "Asha Patel", branch: "Computer Science", cgpa: "9.1" },
    { name: "Dev Shah", branch: "Electronics", cgpa: "8.4" },
    { name: "Mira Das", branch: "Mechanical", cgpa: "8.8" },
    { name: "Rohan Iyer", branch: "Computer Science", cgpa: "7.9" }
];

function filterStudents(records, query) {
    const normalizedQuery = query.trim().toLowerCase();
    return records.filter((student) => Object.values(student).some((value) => value.toLowerCase().includes(normalizedQuery)));
}

if (typeof document === "undefined") {
    console.log("Computer Science matches:", filterStudents(studentRecords, "COMPUTER SCIENCE").length);
} else {
    const app = document.createElement("main");
    app.innerHTML = `<h1>Student Directory</h1><label for="student-search">Search students</label><input id="student-search" type="search" placeholder="Name, branch, or CGPA"><p id="filter-status" aria-live="polite"></p><table><thead><tr><th>Name</th><th>Branch</th><th>CGPA</th></tr></thead><tbody id="student-rows"></tbody></table>`;
    const style = document.createElement("style");
    style.textContent = `body{font:16px system-ui;background:#f1f5f7;color:#233441;padding:30px}main{max-width:850px;margin:auto}input{display:block;width:100%;box-sizing:border-box;padding:11px;margin:8px 0 12px;border:1px solid #9aadb8;border-radius:6px}table{width:100%;border-collapse:collapse;background:white}th,td{text-align:left;padding:12px;border-bottom:1px solid #dfe7ea}th{background:#dcebef}#filter-status{min-height:1.5em;color:#8e382d}`;
    document.head.append(style);
    document.body.append(app);

    const tbody = app.querySelector("#student-rows");
    const status = app.querySelector("#filter-status");
    function renderRows(records) {
        tbody.replaceChildren();
        records.forEach((student) => {
            const row = document.createElement("tr");
            for (const value of Object.values(student)) {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.append(cell);
            }
            tbody.append(row);
        });
        status.textContent = records.length === 0 ? "No results found" : `${records.length} student(s) found`;
    }

    app.querySelector("#student-search").addEventListener("input", (event) => {
        renderRows(filterStudents(studentRecords, event.target.value));
    });
    renderRows(studentRecords);
}