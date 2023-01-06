let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
// output: [1, 2, 3, 100, 10]
let union = [];

for(let i = 0; i < arr1.length; i++){
    let val = arr1[i];
    if(!(union.includes(val))){
        union.push(val);
    }
}
for(let i = 0; i < arr2.length; i++){
    let val = arr2[i];
    if(!(union.includes(val))){
        union.push(val);
    }
}
console.log(union);