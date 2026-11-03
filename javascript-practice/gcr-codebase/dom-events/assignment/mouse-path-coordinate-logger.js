"use strict";

if (typeof document === "undefined") {
    console.log("Open this script in a browser to track pointer coordinates.");
} else {
    const app = document.createElement("main");
    app.innerHTML = `<h1>Mouse Path Logger</h1><p id="coordinates" aria-live="polite">Move inside the area to see client coordinates.</p><div id="tracking-box" role="application" aria-label="400 by 400 pixel mouse tracking area"></div>`;
    const style = document.createElement("style");
    style.textContent = `body{font:16px system-ui;background:#f5f0e9;color:#332b24;padding:24px}main{max-width:500px;margin:auto}#tracking-box{position:relative;width:min(400px,calc(100vw - 48px));height:min(400px,calc(100vw - 48px));border:2px solid #815d3d;background:#fff;overflow:hidden;touch-action:none}#coordinates{min-height:1.5em}.dot{position:absolute;width:12px;height:12px;border-radius:50%;background:#d71920;transform:translate(-50%,-50%);pointer-events:none}`;
    document.head.append(style);
    document.body.append(app);

    const trackingBox = app.querySelector("#tracking-box");
    const coordinates = app.querySelector("#coordinates");
    trackingBox.addEventListener("mousemove", (event) => {
        coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
    });
    trackingBox.addEventListener("dblclick", (event) => {
        const bounds = trackingBox.getBoundingClientRect();
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.style.left = `${event.clientX - bounds.left}px`;
        dot.style.top = `${event.clientY - bounds.top}px`;
        trackingBox.append(dot);
    });
}