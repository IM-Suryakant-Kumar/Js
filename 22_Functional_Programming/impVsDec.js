// Is the square of the number is even


// Imperative way
// const x = 4;

// const xSquare = x*x;

// let isEven;

// if(xSquare % 2 === 0){
//     isEven = true;
// }else {
//     isEven = false;
// }

// console.log(isEven);


// Declarative

const isSquareEven = (x) => ((x*x)%2 === 0? true:false)
console.log(isSquareEven(4));