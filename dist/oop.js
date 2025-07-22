"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error("Invalid value");
        this._balance = value;
    }
}
let account = new Account(1, "Tega", 100);
account.deposit(1200);
console.log(account instanceof Account);
console.log(account.balance);
class SeatAssignent {
}
let seats = new SeatAssignent();
seats.A1 = "Mosh";
seats.A2 = "John";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Persons {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
class Teacher extends Persons {
    get fullName() {
        return "Professor" + " " + super.fullName;
    }
}
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
class Principal extends Persons {
    get fullName() {
        return "Principal" + " " + super.fullName;
    }
}
printNames([
    new Student(1, "Tega", "Ojo"),
    new Teacher("Jane", "Doe"),
    new Principal("Mary", "Smith"),
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    reneder() {
        console.log("Renddering a circle");
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=oop.js.map