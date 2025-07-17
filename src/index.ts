let sales = 123_456_789;
let course = "TypeScript Fundamentals";
let isPublished = true;
let level;

// function render(document) {
//   console.log(document);
// }

// arrays
let numbers: number[] = [1, 2, 3];

// Tuples: a fixed length array with known types
let user: [number, string] = [1, "Tega"];

// Enums: a list ot related constants
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);
