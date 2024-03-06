class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}

class Vehicle {
  constructor(numOfWheels, weight, type) {
    this.numOfWheels = numOfWheels;
    this.weight = weight;
    this.type = type;
  }
  findType() {
    if (this.numOfWheels == 2) this.type = "bike";
    return this.type;
  }

  static funcName() {
    return "huehueh";
  }
}

let bike = new Vehicle(2, 200, "hueh");
console.log(bike.findType());
console.log(Vehicle.funcName());
