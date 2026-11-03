"use strict";

const availableThemes = ["light", "dark", "blue"];

function applyTheme(themeName, targetBody) {
    if (!availableThemes.includes(themeName)) throw new Error(`Unknown theme: ${themeName}`);
    // Both the theme class and persisted custom attribute use setAttribute().
    targetBody.setAttribute("class", `theme-${themeName}`);
    targetBody.setAttribute("data-theme", themeName);
}

if (typeof document === "undefined") {
    console.log(`Theme options: ${availableThemes.join(", ")}`);
} else {
    const app = document.createElement("main");
    app.innerHTML = `<h1>Theme Switcher</h1><p>Choose an appearance for this page.</p><div id="theme-buttons"><button type="button" data-theme-choice="light">Light</button><button type="button" data-theme-choice="dark">Dark</button><button type="button" data-theme-choice="blue">Blue</button></div><p id="theme-status" aria-live="polite"></p>`;
    const style = document.createElement("style");
    style.textContent = `body{font:16px system-ui;margin:0;padding:32px;transition:background .2s,color .2s}body.theme-light{background:#f7f7f2;color:#25332f}body.theme-dark{background:#19221f;color:#f4f6f3}body.theme-blue{background:#e5f2ff;color:#153a5b}main{max-width:620px;margin:10vh auto;padding:32px;border:1px solid currentColor;border-radius:12px}button{margin:6px;padding:10px 18px;border:1px solid currentColor;border-radius:6px;background:transparent;color:inherit;cursor:pointer}`;
    document.head.append(style);
    document.body.append(app);
    document.body.setAttribute("class", "theme-light");
    document.body.setAttribute("data-theme", "light");

    app.querySelector("#theme-buttons").addEventListener("click", (event) => {
        const button = event.target.closest("[data-theme-choice]");
        if (!button) return;
        applyTheme(button.dataset.themeChoice, document.body);
        app.querySelector("#theme-status").textContent = `Current theme: ${button.dataset.themeChoice}`;
    });
}