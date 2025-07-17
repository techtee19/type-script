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

// Objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Tega",
  retire: (date: Date) => {
    console.log(date);
  },
};

///////////////////////////////////////////////
// excersise
let song: {
  title: string;
  releaseYear: number;
} = { title: "My song", releaseYear: 2023 };

let prices = [100, 200, 300];

prices[0] = 7100;

function myFunc(a: number, b: number): number {
  if (a >= 5 && b < 6) return a * b;
  return a + b;
}

myFunc(4, 8);
