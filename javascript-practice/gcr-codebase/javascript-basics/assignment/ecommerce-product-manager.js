"use strict";

// Model a catalog item and keep its discount logic with the product data.
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price *= 1 - percent / 100;
        return this.price;
    }

    getDetails() {
        return `${this.name} (${this.category}) - Rs. ${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Wireless Headphones", 2499, "Electronics"),
    new Product(2, "Desk Lamp", 950, "Home"),
    new Product(3, "Mechanical Keyboard", 4599, "Electronics")
];

products[0].applyDiscount(10);
console.log("Products priced above Rs. 1,000:");
products.filter((product) => product.price > 1000)
    .forEach((product) => console.log(product.getDetails()));