let low = 2;
let high = 30;
let r = ``;

for(let i = low; i <= high; i++){
    let flag = true;
    for(let j = 2; j * j <= i; j++){
        if(i % j == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        r = `${r + i} `;
    }
}

console.log(r);