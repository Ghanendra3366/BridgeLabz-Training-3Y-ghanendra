"use strict";

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicleMake, vehicleModel, plateNumber) {
        super(name, rating);
        this.vehicle = { make: vehicleMake, model: vehicleModel, plateNumber };
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare(ratePerKilometer = 18) {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new TypeError("Trip distance is required.");
        }
        if (!Number.isFinite(Number(this.distance)) || Number(this.distance) < 0) {
            throw new RangeError("Trip distance must be a non-negative number.");
        }
        return Number(this.distance) * ratePerKilometer;
    }
}

const driver = new Driver("Nikhil", 4.9, "Hyundai", "i20", "KA-01-AB-1234");
console.log(`Driver ${driver.name} (${driver.rating} stars), vehicle: ${driver.vehicle.make} ${driver.vehicle.model}`);

for (const distance of [12, -4, undefined]) {
    try {
        const trip = new Trip("Indiranagar", "MG Road", distance);
        console.log(`Fare for ${String(distance)} km: Rs. ${trip.calculateFare().toFixed(2)}`);
    } catch (error) {
        console.log(`Could not calculate fare: ${error.message}`);
    }
}