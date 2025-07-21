class Account {
  //   readonly id: number;
  //   owner: string;
  //   private _balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

let account = new Account(1, "Tega", 100);
account.deposit(1200);
//   console.log(typeof account);
console.log(account instanceof Account);
console.log(account.balance);

// INDEX SIGNATURES
class SeatAssignent {
  // A1, A2, A3, ...
  // Mosh, John, Mary, ...

  [seatNumner: string]: string;
}

let seats = new SeatAssignent();
seats.A1 = "Mosh";
seats.A2 = "John";

// STATIC MEMBERS
class Ride {
  private static _activeRides: number = 0;

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

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// INHERITANCE IN OOP
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

// METHOD OVERRIDING
class Teacher extends Person {
  override get fullName() {
    return "Professor" + " " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

// POLYMORPHISM
class Principal extends Person {
  override get fullName() {
    return "Principal" + " " + super.fullName;
  }
}

printNames([
  new Student(1, "Tega", "Ojo"),
  new Teacher("Jane", "Doe"),
  new Principal("Mary", "Smith"),
]);

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}
