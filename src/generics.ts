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

function fetch<T>(_url: string): Result<T> {
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

// Extending generic classes
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // The key of operator can be used to restrict the type of T
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);

// Pass on the generic type number
// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// Restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }

// Fixing/terminating generic type parameter
// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

// let store = new CompressibleStore<Product>();
// store.compress();
