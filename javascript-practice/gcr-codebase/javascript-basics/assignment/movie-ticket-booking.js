"use strict";

// Validate booking values before saving or displaying a ticket.
const bookingRules = {
    name: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/
};

function validateBooking(name, email, seats) {
    const errors = {};
    if (!bookingRules.name.test(name.trim())) errors.name = "Use letters and spaces for the name.";
    if (!bookingRules.email.test(email.trim())) errors.email = "Enter a valid email address.";
    if (!Number.isInteger(Number(seats)) || Number(seats) < 1 || Number(seats) > 10) errors.seats = "Choose between 1 and 10 seats.";
    return errors;
}

if (typeof document !== "undefined") {
    const section = document.createElement("section");
    section.innerHTML = `<h1>Movie ticket booking</h1><form id="booking-form" novalidate>
        <label>Name <input name="name" required></label><small data-error="name"></small>
        <label>Email <input name="email" type="email" required></label><small data-error="email"></small>
        <label>Seats <input name="seats" type="number" min="1" max="10" value="1" required></label><small data-error="seats"></small>
        <button type="submit">Book tickets</button></form><div id="ticket" aria-live="polite"></div>`;
    document.body.append(section);

    section.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const values = Object.fromEntries(new FormData(event.currentTarget));
        const errors = validateBooking(values.name, values.email, values.seats);
        for (const field of Object.keys(bookingRules).concat("seats")) {
            const input = section.querySelector(`[name="${field}"]`);
            input.style.border = errors[field] ? "2px solid #c62828" : "2px solid #2e7d32";
            section.querySelector(`[data-error="${field}"]`).textContent = errors[field] || "";
        }
        const ticket = section.querySelector("#ticket");
        if (Object.keys(errors).length === 0) {
            const booking = { name: values.name.trim(), email: values.email.trim(), seats: Number(values.seats) };
            ticket.textContent = `Booking confirmed for ${booking.name}: ${booking.seats} seat(s). Confirmation sent to ${booking.email}.`;
            console.log("Booking:", booking);
        } else {
            ticket.textContent = "Please fix the highlighted fields.";
        }
    });
} else {
    const sampleBooking = { name: "Riya Sharma", email: "riya@example.com", seats: 3 };
    console.log("Sample booking validation:", validateBooking(sampleBooking.name, sampleBooking.email, sampleBooking.seats));
    console.log("Invalid seat count:", validateBooking("Riya Sharma", "riya@example.com", 12).seats);
}