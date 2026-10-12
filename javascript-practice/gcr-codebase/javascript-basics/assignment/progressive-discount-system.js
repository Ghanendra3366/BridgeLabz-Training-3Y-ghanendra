// Apply the best single discount tier to the purchase total.
const purchaseTotal = 7250;
let discountPercentage;

if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = Math.round(purchaseTotal * discountPercentage / 100);
const finalPrice = Math.round(purchaseTotal * (1 - discountPercentage / 100));

console.log(`Original total: Rs. ${Math.round(purchaseTotal)}`);
console.log(`Discount: ${discountPercentage}% (Rs. ${discountAmount})`);
console.log(`Final price: Rs. ${finalPrice}`);