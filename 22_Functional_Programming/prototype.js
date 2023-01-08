// Array.prototype.myMap = function (cb) {
//   let newArr = [];

//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i]))
//   }

//   return newArr
// }

// function square(x){
//     return x*x;
// }

// const arr = [1, 2, 5, 6]
// console.log(arr.myMap(square));

// filter

// Array.prototype.myFilter = function (cb) {
//   let newArr = [];

//   for (let i = 0; i < this.length; i++) {
//     if(cb(this[i])){
//         newArr.push(this[i]);
//     }
//   }

//   return newArr;
// };

// function isEven(x) {
//   return x % 2 === 0;
// }

// const arr = [1, 2, 5, 6, 14, 66, 16, 28];
// console.log(arr.myFilter(isEven));

// Reduce

Array.prototype.myReduce = function (cb, j) {
  let value = j;

  for (let i = j; i < this.length; i++) {
    value = cb(value, this[i])
  }
  return value;
};

let arr = [1, 2, 3, 4, 5];

function sum(accumulator, x) {
  return accumulator + x;
}

console.log(arr.myReduce(sum, 0));
