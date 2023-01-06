let n = 1234567;
let k = -3;

let l = 0;
let temp = n;
while (temp != 0) {
    l++;
    temp = Math.floor(temp / 10);
}

k = k % l;
if(k < 0){
    k = k + l;
}

// let div = Math.pow(10, k);
// let mul = Math.pow(10, (l - k));

let div = 1;
let mul = 1;
temp = l;
while(temp != 0){
    if(k != 0){
        div *= 10;
        k--;
    } else {
        mul *= 10;
    }
    temp--;
}

let rem = n % div;
let q = Math.floor(n / div);

let rn = rem * mul + q;
console.log("Rotated Number Of", n, " =", rn);