// Impure function

// const a = 9;

// function addNum(b) {
//   console.log(a + b);
// }

// addNum(2);
// addNum(2);
// addNum(2);

// Pure function

function addNum(a, b){
    // console.log(`The sum is :`, a+b);// side Effect
    return a+ b;
}

// addNum(2, 5);
console.log(addNum(2, 5));