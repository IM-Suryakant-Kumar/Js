// this in browser strict mode
"use strict";

// console.log(this);  // returns window object

// function showThis() {
//   console.log(this); // returns undefined
// }

// showThis();

let obj = {
    name: "Adam",
    f: function(){
        // console.log(this) // return object itself

        function g(){
            console.log(this); // undefined
        }

        g()
    }
}

obj.f()
