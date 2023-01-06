function confirmEnding(str, target){
    let sl = str.length;
    let tl = target.length;
    if(str.substring(sl - tl) === target){
        return true;
    }
    return false;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Congratulation", "an"));