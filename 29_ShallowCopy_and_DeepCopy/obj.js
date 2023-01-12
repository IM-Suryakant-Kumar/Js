let person = {
    name: "Mrinal",
    age: 22,
    hobbies: ['Sports', 'Coding', 'Music']
}


// // Deep copy
// let newPerson = JSON.parse(JSON.stringify(person));
// newPerson.hobbies[0] = 'Dancing';

// console.log(person);
// console.log(newPerson);




// // Shallow copy from Spread operator
// let newPerson = {...person};
// newPerson.hobbies[0] = 'Dancing';

// console.log(person);
// console.log(newPerson);



// Shallow copy from object.assign method
let newPerson = Object.assign({}, person);

newPerson.age = 40;
newPerson.hobbies[1] = 'Programming';

console.log(person);
console.log(newPerson);