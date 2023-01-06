let a1 = [3, 5, 4, 4, 7];
let a2 = [9, 5, 7, 9, 8, 6];
let sum = [];

let n1 = a1.length;
let n2 = a2.length;
let n = n1 > n2 ? n1 : n2;
let c = 0;

let i = n1 - 1;
let j = n2 - 1;
let k = n - 1;


while (k >= 0) {
    let d = c;

    if (i >= 0) {
        d += a1[i];
    }
    if (j >= 0) {
        d += a2[j];
    }

    c = Math.trunc(d / 10);
    d %= 10;

    sum.unshift(d);

    i--;
    j--;
    k--;
}
// if (c != 0) {
//     sum.unshift(c);
// }
console.log(a1);
console.log(a2);
console.log(sum);