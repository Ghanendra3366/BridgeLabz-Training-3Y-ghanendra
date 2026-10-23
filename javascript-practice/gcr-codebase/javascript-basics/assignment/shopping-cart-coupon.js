"use strict";

// Keep cart item operations and total calculation together in a class.
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity = 1) {
        if (!name || price < 0 || quantity < 1) {
            throw new TypeError("Provide an item name, non-negative price, and positive quantity.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(couponCode) {
        const couponMatch = /^(SAVE|DISC)(\d{1,2})$/.exec(couponCode.trim().toUpperCase());
        if (!couponMatch) {
            return { valid: false, message: "Coupon must look like SAVE20 or DISC10." };
        }

        const discountPercent = Number(couponMatch[2]);
        if (discountPercent < 1 || discountPercent > 100) {
            return { valid: false, message: "Coupon discount must be from 1% to 100%." };
        }

        const total = this.getTotal();
        const finalTotal = total * (1 - discountPercent / 100);
        return { valid: true, discountPercent, originalTotal: total, finalTotal };
    }
}

const cart = new Cart();
cart.addItem("Notebook", 250, 2);
cart.addItem("Pen set", 180, 1);
const couponResult = cart.applyCoupon("SAVE20");

console.log(`Cart total: Rs. ${cart.getTotal().toFixed(2)}`);
if (couponResult.valid) {
    console.log(`Coupon discount: ${couponResult.discountPercent}%`);
    console.log(`Final total: Rs. ${couponResult.finalTotal.toFixed(2)}`);
} else {
    console.log(couponResult.message);
}