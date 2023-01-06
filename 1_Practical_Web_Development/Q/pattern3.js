let inputArr = process.argv.slice(2);
let n = inputArr[0];

let p = "";
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
        p += "\t";
    }
    for(let k = 1; k < i * 2 ; k++){
        p += "*\t";
    }
    
    p += "\n";
}

console.log(p);