// this keyword in nodejs with non strict mode

'use strict'


// console.log(this);  // returns an empty object

// function showThis(){
//     console.log(this);  // returns undefined
// }

// showThis()


let obj = {
    name : "Adam",
    f: function(){
        // console.log(this);  // Object itself

        function g(){
            console.log(this); // returns undefined
        }

        g()
    }
}

obj.f()