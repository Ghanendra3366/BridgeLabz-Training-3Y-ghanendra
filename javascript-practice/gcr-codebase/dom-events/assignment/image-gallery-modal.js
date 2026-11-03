"use strict";

if (typeof document === "undefined") {
    console.log("Open this script in a browser to preview the image gallery.");
} else {
    // Use six remote photo URLs as gallery thumbnails and modal previews.
    const imageUrls = [
        "photo-1470770841072-f978cf4d019e", "photo-1500530855697-b586d89ba3ee",
        "photo-1470252649378-9c29740c9fa8", "photo-1472396961693-142e6e269027",
        "photo-1501785888041-af3ef285b470", "photo-1441974231531-c6227db76b6e"
    ].map((photoId) => `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=700&q=80`);
    const app = document.createElement("main");
    app.innerHTML = `<h1>Image Gallery</h1><p>Select an image to preview.</p><div id="gallery"></div><div id="image-modal" hidden><div class="modal-content" role="dialog" aria-modal="true" aria-label="Image preview"><button id="close-modal" type="button" aria-label="Close preview">Close</button><img id="modal-image" alt=""><p id="modal-caption"></p></div></div>`;
    const style = document.createElement("style");
    style.textContent = `body{font:16px system-ui;background:#edf2f0;color:#1d302d;margin:0;padding:30px}main{max-width:1000px;margin:auto}#gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px}#gallery img{width:100%;height:170px;object-fit:cover;border-radius:8px;cursor:pointer}#image-modal{position:fixed;inset:0;display:grid;place-items:center;padding:24px;background:#071310c9}#image-modal[hidden]{display:none}.modal-content{max-width:min(900px,100%);max-height:90vh;padding:14px;background:white;border-radius:10px}.modal-content img{display:block;max-width:100%;max-height:75vh;object-fit:contain}.modal-content button{margin-bottom:8px;padding:8px 14px}`;
    document.head.append(style);
    document.body.append(app);

    const gallery = app.querySelector("#gallery");
    const modal = app.querySelector("#image-modal");
    imageUrls.forEach((url, index) => {
        const image = document.createElement("img");
        image.src = url;
        image.alt = `Landscape gallery image ${index + 1}`;
        image.dataset.fullImage = url.replace("w=700", "w=1600");
        gallery.append(image);
    });

    gallery.addEventListener("click", (event) => {
        const image = event.target.closest("img");
        if (!image) return;
        app.querySelector("#modal-image").src = image.dataset.fullImage;
        app.querySelector("#modal-image").alt = image.alt;
        app.querySelector("#modal-caption").textContent = image.alt;
        modal.hidden = false;
    });
    modal.addEventListener("click", () => { modal.hidden = true; });
    // Clicking the dialog itself must not bubble to the backdrop close handler.
    modal.querySelector(".modal-content").addEventListener("click", (event) => event.stopPropagation());
    app.querySelector("#close-modal").addEventListener("click", () => { modal.hidden = true; });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") modal.hidden = true;
    });
}