// call, apply, bind

// const person1 = {
//   name: "Adam",
//   age: 25,

//     showDetails: function () {
//       console.log(this.name + " is " + this.age + " years old");
//     }
// };

// -------------------------------------------
const person1 = {
  name: "Adam",
  age: 25,
};

const person2 = {
  name: "Steve",
  age: 20,
};

let showDetails = function (city, car) {
  console.log(`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`);
};

// Function borrowing

// showDetails.call(person1, "Delhi", "Mercedes");
// showDetails.call(person2, "Noida", "BMW");
// showDetails.apply(person2,["Noida", "BMW]);
let showDetailsBind = showDetails.bind(person2, "Noida", "BMW");

showDetailsBind()
