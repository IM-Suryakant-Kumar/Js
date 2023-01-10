const person1 = {
  name: "Adam",
  age: 25,
};

function showDetails(city, state) {
  console.log(this.name + " " + this.age + " " + city + " " + state);
}

const showDetailsBind = showDetails.bind(person1, "Noida", "UP");

showDetailsBind();



// Polyfills of bind

Function.prototype.myBind = function (...args1) {
  let obj = this;
  let params = args1.slice(1);
  return function (...args2) {
    obj.apply(args1[0], [...params, ...args2]);
  };
};

const showDetailsMybind = showDetails.myBind(person1, "noida");
showDetailsMybind("UP");
