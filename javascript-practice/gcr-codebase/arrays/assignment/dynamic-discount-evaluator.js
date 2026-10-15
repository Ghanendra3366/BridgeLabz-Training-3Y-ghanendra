// Store each cart item with its category and original price.
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Apply category discounts before calculating the cart-level adjustment.
const discountedItems = [];
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    discountedItems.push({
        item: product.item,
        originalPrice: product.price,
        discountRate: `${discountRate * 100}%`,
        discountedPrice: product.price * (1 - discountRate)
    });
}

const originalCartTotal = cart.reduce((total, product) => total + product.price, 0);
const discountedSubtotal = discountedItems.reduce((total, product) => total + product.discountedPrice, 0);
const extraDiscount = originalCartTotal > 50000 ? discountedSubtotal * 0.05 : 0;
const finalTotal = discountedSubtotal - extraDiscount;

console.table(discountedItems);
console.log(`Original cart total: Rs. ${originalCartTotal.toFixed(2)}`);
console.log(`Extra cart discount: Rs. ${extraDiscount.toFixed(2)}`);
console.log(`Final total: Rs. ${finalTotal.toFixed(2)}`);