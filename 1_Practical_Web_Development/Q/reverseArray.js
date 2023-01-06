let first = [1, 2, 3, 4, 5];
let rev = [];
// for(let i = 0; i < first.length; i++){
//     let val = first[i];
//     rev.unshift(val);
// }
// for(let val of first){
//     rev.unshift(val);
// }
// for(let val in first){
//     rev.unshift(val);
// }
for(let i = first.length - 1; i >= 0; i--){
    rev.push(first[i]);
}
console.log(first);
console.log(rev);