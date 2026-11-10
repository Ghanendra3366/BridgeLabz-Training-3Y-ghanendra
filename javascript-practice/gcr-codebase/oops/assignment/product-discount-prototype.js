"use strict";

// Product hides the discount formula behind one reusable prototype operation.
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function applyDiscount(percent) {
    if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
        throw new RangeError("Discount must be between 0 and 100 percent.");
    }
    return this.price * (1 - percent / 100);
};

const products = [
    { product: new Product("Travel Backpack", 3200), discount: 10 },
    { product: new Product("Desk Lamp", 1800), discount: 15 },
    { product: new Product("Notebook Set", 450), discount: 5 }
];

// Callers provide only a percentage; the shared method handles the arithmetic.
products.forEach(({ product, discount }) => {
    console.log(`${product.name}: Rs. ${product.applyDiscount(discount).toFixed(2)} after ${discount}% off`);
});
console.log(`Prototype method shared: ${products[0].product.applyDiscount === products[1].product.applyDiscount}`);