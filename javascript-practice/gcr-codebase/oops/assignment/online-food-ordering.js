"use strict";

const menuItems = [
    { name: "Masala Dosa", price: 140 },
    { name: "Paneer Wrap", price: 190 },
    { name: "Lemon Soda", price: 60 }
];

function calculateBill(orderItems) {
    // Resolve every requested name; throw immediately if the menu has no match.
    const itemPrices = orderItems.map((orderedName) => {
        const menuItem = menuItems.find((item) => item.name.toLowerCase() === orderedName.toLowerCase());
        if (!menuItem) {
            throw new Error(`Item "${orderedName}" is not available on the menu.`);
        }
        return menuItem.price;
    });
    return itemPrices.reduce((total, price) => total + price, 0);
}

try {
    const order = ["Masala Dosa", "Paneer Wrap", "Lemon Soda"];
    console.log(`Order: ${order.join(", ")}`);
    console.log(`Bill total: Rs. ${calculateBill(order).toFixed(2)}`);
} catch (error) {
    console.log(`Unable to calculate bill: ${error.message}`);
}

try {
    calculateBill(["Masala Dosa", "Chocolate Cake"]);
} catch (error) {
    console.log(`Invalid order handled: ${error.message}`);
}