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

// Objects  type aliases: we use type aliasies to define the structure of objects
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Tega",
  retire: (date: Date) => {
    console.log(date);
  },
};

//Union Types: using a vertical bar we can create union types
function KgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

KgToLbs(10);
KgToLbs("10kg");

// Intercetion types
type Dragable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Dragable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal(exact, specific) types: used to limit the values that are assigned to a variable
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// Nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);
greet(undefined);

// Optional chaining
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// optional property access operator
console.log(customer?.birthday?.getFullYear());

// optional element access operator
// cutomers?.[0]

// Nullish Coaelscing
let speed: number | null = null;
let ride = {
  // Falsy values in js(undefined, null, '', false, 0)
};

// type assertions
// let phone = <HTMLInputElement>document.getElementById("phone");
// phone.value;

// Mock document for Node.js environment (learning purposes)
const mockDocument = {
  getElementById: (_id: string) => ({ value: "mock-value" })
};

// Example of type assertion with mock
let phone = <HTMLInputElement>mockDocument.getElementById("phone");
console.log("Phone value:", phone.value);

// The unknown type
function render(document: unknown) {
  if (typeof document === "string") document.toUpperCase();
}

///////////////////////////////////////////////
// excersise
// let song: {
//   title: string;
//   releaseYear: number;
// } = { title: "My song", releaseYear: 2023 };

// let prices = [100, 200, 300];

// prices[0] = 7100;

// function myFunc(a: number, b: number): number {
//   if (a >= 5 && b < 6) return a * b;
//   return a + b;
// }

// myFunc(4, 8);
