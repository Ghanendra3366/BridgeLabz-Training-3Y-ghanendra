"use strict";

// Fetch the real mock product catalog and report each title, price, and image URL.
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}.`);
        }

        const products = await response.json();
        for (const product of products) {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);

            // Create optional product cards when the script is loaded in a browser.
            if (typeof document !== "undefined") {
                const card = document.createElement("article");
                const image = document.createElement("img");
                image.src = product.image;
                image.alt = product.title;
                image.width = 120;
                const title = document.createElement("h2");
                title.textContent = product.title;
                const price = document.createElement("p");
                price.textContent = `$${product.price}`;
                card.append(image, title, price);
                document.body.append(card);
            }
        }
    } catch (error) {
        console.log("Failed to load products. Please try again.");
        console.log(`Fetch detail: ${error.message}`);
    }
}

fetchProducts();