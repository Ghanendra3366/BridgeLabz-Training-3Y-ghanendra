"use strict";

const inventory = [
    { id: 1, name: "Wireless Mouse", category: "Electronics", price: 850, stock: 4 },
    { id: 2, name: "Desk Monitor", category: "Electronics", price: 12500, stock: 12 },
    { id: 3, name: "Canvas Tote", category: "Accessories", price: 650, stock: 3 },
    { id: 4, name: "Water Bottle", category: "Accessories", price: 420, stock: 20 },
    { id: 5, name: "Notebook Pack", category: "Stationery", price: 300, stock: 5 }
];

const LOW_STOCK_LIMIT = 5;

function getLowStockProducts(products) {
    return products.filter((product) => product.stock <= LOW_STOCK_LIMIT);
}

function sortProductsByPrice(products) {
    // Sort a copy so the caller's inventory order is not modified.
    return [...products].sort((first, second) => first.price - second.price);
}

function calculateTotalInventoryValue(products) {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(products) {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) groups[product.category] = [];
        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products (5 units or fewer):", getLowStockProducts(inventory).map((product) => product.name));
console.log("Price order:", sortProductsByPrice(inventory).map((product) => `${product.name}: Rs. ${product.price}`));
console.log(`Total inventory value: Rs. ${calculateTotalInventoryValue(inventory).toFixed(2)}`);
console.log("Products by category:", Object.fromEntries(Object.entries(groupByCategory(inventory)).map(([category, items]) => [category, items.map((item) => item.name)])));