function Component(constructor: Function) {
  console.log("Component  decorator called");

  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting component into the DOM");
  };
}

@Component
class ProfileComponent {}
