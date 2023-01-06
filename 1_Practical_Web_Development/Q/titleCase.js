let str = "I'm a little tea pot";
let titleCase = "";

let arr = str.split(" ");

for(let i = 0; i < arr.length; i++){
    let val = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    titleCase += val + " ";
}

console.log(titleCase);