const lib = require("./lib")



let amount = 2000;
let tocut = 200;


function chargeDebitCard(){
    amount = amount-tocut
    console.log(`Remaining amount is ${amount}`);
}

// chargeDebitCard()

let promiseObj = lib.promiseUpdateAccount("tv").then(chargeDebitCard)