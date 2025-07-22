class KeyVAluePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyVAluePair<string, number>("age", 30);

// GENERIC FUNCTIONS
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let number = ArrayUtils.wrapInArray(1);

// GENERIC INTERFACES
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<User>("url");
result.data?.username;

let results = fetch<Product>("url");
results.data?.title;

//  GENERIC CONSTRAINTS
class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends { name: string }>(value: T): T {
  return value;
}

echo({ name: "ada " });
