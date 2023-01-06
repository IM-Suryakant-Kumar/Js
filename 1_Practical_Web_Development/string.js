let singleQuotes = '      how are you        ';
let doubleQuotes = "Double quotes ki string";

// console.log(singleQuotes);
// console.log(doubleQuotes);
// let char = singleQuotes.charAt(4);
// let ascci = singleQuotes.charCodeAt(4);
// let substr = singleQuotes.substring(2, 8);
// console.log(ascci);
// console.log(substr);
// console.log(char);
singleQuotes = singleQuotes.trim();
let arrstr = singleQuotes.split(" ");
console.log(arrstr);
let str = arrstr.join("+");
console.log(str);