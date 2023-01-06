let arr = [2, 3, 6, 6, 8, 8, 8, 9 ];

let firstidx = idxAns(8, true);
let lastidx = idxAns(8, false);
console.log(firstidx);
console.log(lastidx);

function idxAns(target, firstidx){

    let s = 0;
    let e = arr.length - 1;
    let ans;
    
    while(s <= e){
        let m = s + Math.floor((e - s) / 2);

        if(target < arr[m]){
            e = m - 1;
        } else if(target > arr[m]){
            s = m + 1;
        } else {
            ans = m;
            if(firstidx){
                e = m - 1;
            } else {
                s = m + 1;
            }
        }
    }
    return ans;
}