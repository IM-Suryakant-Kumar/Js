let str = "The quick brown fox jumped over the lazy dog";

console.log(longestArray(str));

function longestArray(str){
    let str1 = str.split(' ');
    let word = 0;
    for(let rstr of str1){
        let l = rstr.length;
        if(l > word){
            word = l;
        }
    }
    return word;
}