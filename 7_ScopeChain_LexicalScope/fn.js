// ** code run in execution context present inside callStack
// scope -> Area where a function or a variable can be found 
console.log("line number 3",varName);
var varName=10;
// fn b definition
function b(){
    console.log("line number 7",varName);
}
console.log("line number 9",varName);
function fn(){
    console.log("line number 11",varName);
    var varName=20;
    // from fn
    b();
    console.log(varName);
}
fn();