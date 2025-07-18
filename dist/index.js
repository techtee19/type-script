"use strict";
let sales = 123456789;
let course = "TypeScript Fundamentals";
let isPublished = true;
let level;
let numbers = [1, 2, 3];
let user = [1, "Tega"];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "Tega",
    retire: (date) => {
        console.log(date);
    },
};
function KgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLbs(10);
KgToLbs("10kg");
let song = { title: "My song", releaseYear: 2023 };
let prices = [100, 200, 300];
prices[0] = 7100;
function myFunc(a, b) {
    if (a >= 5 && b < 6)
        return a * b;
    return a + b;
}
myFunc(4, 8);
//# sourceMappingURL=index.js.map