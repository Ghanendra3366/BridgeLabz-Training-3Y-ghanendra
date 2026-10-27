"use strict";

// The arrow captures the factory's this, not the user object that later calls it.
const arrowUserFactory = function arrowUserFactory() {
    return {
        name: "Mira",
        showName: () => this.name
    };
};

const arrowUser = arrowUserFactory.call({ name: undefined });
console.log(`Arrow method this.name: ${String(arrowUser.showName())}`);
console.log("The arrow has no own this binding, so it cannot use the user object as this.");

// A normal method receives the object as this when called with user.showName().
const correctedUser = {
    name: "Mira",
    showName() {
        return this.name;
    }
};

console.log(`Normal method this.name: ${correctedUser.showName()}`);