"use strict";

if (typeof document === "undefined") {
    console.log("Open this script in a browser to use the custom dropdown.");
} else {
    const choices = ["Frontend", "Backend", "Quality Assurance", "Design"];
    const app = document.createElement("main");
    app.innerHTML = `<h1>Choose a team</h1><div id="custom-dropdown"><button id="dropdown-toggle" type="button" aria-haspopup="listbox" aria-expanded="false">Select a team</button><ul id="dropdown-options" role="listbox" hidden></ul></div><p id="dropdown-status" aria-live="polite"></p>`;
    const style = document.createElement("style");
    style.textContent = `body{font:16px system-ui;background:#edf2f7;color:#24354a;padding:32px}main{max-width:500px;margin:auto;background:white;padding:28px;border-radius:10px}#custom-dropdown{position:relative;width:260px}button{width:100%;padding:12px;text-align:left;background:white;border:1px solid #879bb0;border-radius:6px;cursor:pointer}ul{position:absolute;z-index:2;top:100%;left:0;right:0;margin:4px 0;padding:4px;list-style:none;background:white;border:1px solid #c8d2dc;border-radius:6px;box-shadow:0 8px 20px #24354a22}li{padding:10px;cursor:pointer}li:hover,li:focus{background:#e9f2fb;outline:none}`;
    document.head.append(style);
    document.body.append(app);

    const dropdown = app.querySelector("#custom-dropdown");
    const toggle = app.querySelector("#dropdown-toggle");
    const options = app.querySelector("#dropdown-options");
    const status = app.querySelector("#dropdown-status");
    choices.forEach((choice) => {
        const option = document.createElement("li");
        option.textContent = choice;
        option.tabIndex = 0;
        option.setAttribute("role", "option");
        options.append(option);
    });

    function setOpen(isOpen) {
        options.hidden = !isOpen;
        toggle.setAttribute("aria-expanded", String(isOpen));
    }
    toggle.addEventListener("click", () => setOpen(options.hidden));
    options.addEventListener("click", (event) => {
        if (event.target.matches("li")) {
            toggle.textContent = event.target.textContent;
            status.textContent = `Selected: ${event.target.textContent}`;
            setOpen(false);
        }
    });
    options.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") event.target.click();
    });

    // Capture phase closes the menu before events reach unrelated page controls.
    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) setOpen(false);
    }, true);
}