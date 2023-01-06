// let inputArr = process.argv.slice(2);
// let n = inputArr[0];
let n = 10;

let a = 0;
let b = 1;
let fibbo = "";

for(let i = 1; i <= n; i++){
    fibbo += " " + a;
    let c = a + b;
    a = b;
    b = c;
}

console.log("Fibbonacci Till", n, "=", fibbo);