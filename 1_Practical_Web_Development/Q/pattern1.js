let inputArr = process.argv.slice(2);
let n = inputArr[0];
// let n = 5;

let p = "";

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        p += "*\t";
    }
    p += "\n";
}

console.log(p);