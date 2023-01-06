// let inputArr = process.argv.slice(2);
// let n = inputArr[0];
let n = 8753;
let d = 0;

while (n != 0) {
    d++;
    // n = Math.trunc(n / 10);
    n = Math.floor(n / 10);
}

console.log(d);