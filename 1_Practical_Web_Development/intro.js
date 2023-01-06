function sayHi(){
    let rval = Math.random() > 0.5 ? true : "Less than 0.5";
    return rval;
}

let rval = sayHi();
console.log("rval", rval);
let rval1 = sayHi();
console.log("rval1", rval1);