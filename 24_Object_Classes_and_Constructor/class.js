class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showDetails() {
    return this.name;
  }
}

class child extends person {
  constructor() {
    super("steve");
  }
}

// let person1 = new person("Adam", 23);
// console.log(person1.showDetails());

let person1 = new child("Adam", 23);
console.log(person1.showDetails());
