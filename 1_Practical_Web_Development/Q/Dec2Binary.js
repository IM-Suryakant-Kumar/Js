let dec = 13; //Output 1101

let temp = dec;
let bin = 0;
let p = 1;
while(temp != 0){
    let r = temp % 2;
    let q = Math.trunc(temp / 2);
    bin = bin + (r * p);
    p = p * 10;
    temp = q;
}

console.log("Binary =", bin);