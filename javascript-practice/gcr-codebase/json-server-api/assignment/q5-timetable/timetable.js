// Run: npx json-server db.json --port 3105
"use strict";
const baseUrl = "http://localhost:3105/timetable";

async function loadTimetable(day) {
  const container = document.querySelector("#classList");
  container.textContent = "Loading timetable...";
  try {
    const response = await fetch(`${baseUrl}?day=${encodeURIComponent(day)}`);
    if (!response.ok) throw new Error("Timetable request failed.");
    const classes = await response.json();
    container.innerHTML = "";

    if (!classes.length) {
      container.innerHTML = '<p>No classes today.</p>';
      return;
    }
    classes.forEach((item) => {
      const card = document.createElement("article");
      card.className = "class-card";
      card.innerHTML = `<strong>${item.subject}</strong><span>${item.faculty}</span><time>${item.time}</time>`;
      container.append(card);
    });
  } catch (error) {
    container.textContent = "Could not load today's timetable.";
  }
}

document.querySelector("#daySelect").addEventListener("change", (event) => loadTimetable(event.target.value));
loadTimetable(document.querySelector("#daySelect").value);
