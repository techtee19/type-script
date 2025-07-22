"use strict";
var _a;
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
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let speed = null;
let ride = {};
const mockDocument = {
    getElementById: (_id) => ({ value: "mock-value" }),
};
let phone = mockDocument.getElementById("phone");
console.log("Phone value:", phone.value);
function render(document) {
    if (typeof document === "string")
        document.toUpperCase();
}
//# sourceMappingURL=index.js.map