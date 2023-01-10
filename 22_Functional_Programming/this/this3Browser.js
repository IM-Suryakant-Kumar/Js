// this in browser in non strict

// console.log(this) // return window object

// function showThis(){
//     console.log(this); // returns window object
// }

// showThis()

let obj = {
    name: "Adam",
    f: function(){
        // console.log(this) // return object itself

        function g(){
            console.log(this); // return window object
        }

        g()
    }
}

obj.f()