"use strict";
var _a, _b;
class KeyVAluePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyVAluePair("age", 30);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let number = ArrayUtils.wrapInArray(1);
function fetch(_url) {
    return { data: null, error: null };
}
let result = fetch("url");
(_a = result.data) === null || _a === void 0 ? void 0 : _a.username;
let results = fetch("url");
(_b = results.data) === null || _b === void 0 ? void 0 : _b.title;
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
echo({ name: "ada " });
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
//# sourceMappingURL=generics.js.map