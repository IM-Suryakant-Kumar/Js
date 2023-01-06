let cap = {
    name: "steve",
    lastName: "Rogers",
    address: {
        city: "Manhattan",
        state: "New York"
    },
    age: 35,
    isAvenger: true,
    movies: ["First Avenger", "Winter Soldier", "Civil War"],
    sayHi: function () {
        console.log("Cap say's Hi");
    }
}

// GET
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();
// SET/UPDATE
// console.log("cap", cap);
// cap.age = 36;
// cap.isAvenger = false;
// cap.friends = ["Tony", "Bruce", "peter"];
// console.log("-------------------------------------------------");
// DELETE
// delete cap.address;
// console.log("cap", cap);
// for(let key in cap){
//     console.log(key, " : ", cap[key]);
// }
// let propKey = "age";
// console.log(cap.age);
// console.log(cap[propKey]);
// console.log(cap["age"]);
console.log(cap.xyz);