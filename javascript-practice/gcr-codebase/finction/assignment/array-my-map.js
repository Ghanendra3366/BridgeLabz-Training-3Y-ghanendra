"use strict";

// Define myMap as non-enumerable so normal array iteration is not affected.
Object.defineProperty(Array.prototype, "myMap", {
    configurable: true,
    writable: true,
    enumerable: false,
    value: function myMap(callback, thisArgument) {
        if (this === null || this === undefined) {
            throw new TypeError("myMap must be called on an array-like value.");
        }
        if (typeof callback !== "function") {
            throw new TypeError("myMap callback must be a function.");
        }

        const source = Object(this);
        const length = Math.min(Math.max(Number(source.length) || 0, 0), Number.MAX_SAFE_INTEGER);
        const mappedValues = new Array(length);

        // Preserve holes just as Array.prototype.map does.
        for (let index = 0; index < length; index += 1) {
            if (index in source) {
                mappedValues[index] = callback.call(thisArgument, source[index], index, source);
            }
        }
        return mappedValues;
    }
});

const numbers = [1, 2, 3];
console.log("Doubled:", numbers.myMap((number) => number * 2));
console.log("Indexed values:", numbers.myMap((number, index) => `${index}:${number}`));