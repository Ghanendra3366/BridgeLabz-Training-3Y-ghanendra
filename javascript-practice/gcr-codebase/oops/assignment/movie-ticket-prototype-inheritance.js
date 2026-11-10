"use strict";

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Add the print method to the parent prototype so all child instances can reuse it.
MovieTicket.prototype.printTicket = function printTicket() {
    return `${this.movieName} | Seat ${this.seatNo} | Rs. ${this.price.toFixed(2)}`;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const onlineTicket = new OnlineTicket("The Last Monsoon", "C12", 260, 28);
console.log(onlineTicket.printTicket());
console.log(`Total with convenience fee: Rs. ${onlineTicket.getTotalAmount().toFixed(2)}`);
console.log(`Parent prototype method available: ${onlineTicket instanceof MovieTicket && MovieTicket.prototype.isPrototypeOf(onlineTicket)}`);