// Map

let myArr = [1, 2, 3, 4, 5];

let squaredArr = myArr.map(function (x) {
  return x * x;
});

// console.log(myArr);
// console.log(squaredArr);

// Custom

function myPolyfillMap(arr, cb) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }

  return newArr;
}

function square(x) {
  return x * x;
}

// console.log(myArr);
// console.log(myPolyfillMap(myArr, square));

// filter

let fArr = [2, 4, 6, 7, 9, 11, 14, 16];

let evenArr = fArr.filter(function (x) {
  return x % 2 === 0;
});

// console.log(evenArr);

// Custom

function myPolyfillFilter(arr, cb) {
  filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

function isEven(x) {
  if (x % 2 === 0) {
    return x;
  }
}

// console.log(fArr);
// console.log(myPolyfillFilter(fArr, isEven));

// reduce

const rArr = [1, 2, 3, 4, 5];

let sumArr = rArr.reduce(function (accumulator, x) {
  return accumulator + x;
}, 0);

// console.log(sumArr);

// Custom 

function myPolyfillReduce(arr, cb){
    let sum = cb(arr);
    return sum;
}

function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(myPolyfillReduce(rArr, sum));