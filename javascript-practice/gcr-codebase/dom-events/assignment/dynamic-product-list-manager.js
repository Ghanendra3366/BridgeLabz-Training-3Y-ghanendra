"use strict";

if (typeof document === "undefined") {
    console.log("Open this script in a browser to use the product list manager.");
} else {
    // Build the demo UI so this single JavaScript file can run on a blank page.
    const app = document.createElement("main");
    app.innerHTML = `<h1>Product List</h1><form id="product-form"><label for="product-name">New product</label><input id="product-name" maxlength="60" required><button>Add product</button></form><ul id="product-list"></ul><p id="list-status" aria-live="polite"></p>`;
    const style = document.createElement("style");
    style.textContent = `body{font:16px system-ui;background:#f2f6f5;color:#18323a;margin:0;padding:32px}main{max-width:640px;margin:auto;background:white;padding:28px;border-radius:12px;box-shadow:0 12px 32px #18323a18}form{display:flex;gap:8px}input{flex:1;min-width:0;padding:10px;border:1px solid #aebfc2;border-radius:6px}button{padding:9px 14px;border:0;border-radius:6px;background:#176b63;color:white;cursor:pointer}li{display:flex;align-items:center;gap:8px;padding:12px 4px;border-bottom:1px solid #e1e9e9}.product-name{flex:1}li input{flex:1}.delete-button{background:#a83232}#list-status{min-height:1.5em;color:#35645e}`;
    document.head.append(style);
    document.body.append(app);

    const form = app.querySelector("#product-form");
    const productInput = app.querySelector("#product-name");
    const productList = app.querySelector("#product-list");
    const status = app.querySelector("#list-status");
    let editingItem = null;

    function saveEdit() {
        if (!editingItem) return;
        const editor = editingItem.querySelector("input");
        const name = editor.value.trim();
        if (name) editingItem.querySelector(".product-name").textContent = name;
        editingItem.classList.remove("is-editing");
        editor.remove();
        editingItem.querySelector("[data-action='edit']").textContent = "Edit";
        editingItem = null;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = productInput.value.trim();
        if (!name) return;
        const item = document.createElement("li");
        item.innerHTML = `<span class="product-name"></span><button type="button" data-action="edit">Edit</button><button type="button" class="delete-button" data-action="delete">Delete</button>`;
        item.querySelector(".product-name").textContent = name;
        productList.append(item);
        productInput.value = "";
        status.textContent = `${name} added.`;
        productInput.focus();
    });

    // One parent listener handles every row's Edit and Delete actions.
    productList.addEventListener("click", (event) => {
        const actionButton = event.target.closest("button[data-action]");
        if (!actionButton) return;
        const item = actionButton.closest("li");
        if (actionButton.dataset.action === "delete") {
            if (editingItem === item) editingItem = null;
            item.remove();
            status.textContent = "Product deleted.";
            return;
        }
        if (editingItem && editingItem !== item) saveEdit();
        if (editingItem === item) {
            saveEdit();
            return;
        }
        editingItem = item;
        const name = item.querySelector(".product-name");
        const editor = document.createElement("input");
        editor.value = name.textContent;
        editor.setAttribute("aria-label", "Edit product name");
        name.after(editor);
        item.classList.add("is-editing");
        actionButton.textContent = "Save";
        editor.focus();
        editor.select();
    });

    // Blur and outside clicks save the active inline edit automatically.
    productList.addEventListener("focusout", (event) => {
        if (event.target.matches("li input")) saveEdit();
    });
    document.addEventListener("click", (event) => {
        if (editingItem && !editingItem.contains(event.target)) saveEdit();
    });
}