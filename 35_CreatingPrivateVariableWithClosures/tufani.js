let myFunction = (function () {
  let name = "";  // Private

  getName = function () {
    return name;
  };

  setName = function (newName) {
    name = newName;
  };

  return {
    getName: getName,
    setName: setName,
  };
})();

// myFunction.setName("Martin");
// console.log(myFunction.getName())

console.log(myFunction.name);