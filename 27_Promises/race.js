// let p1 = new Promise(function(resolve, reject){
//     reject("promise 1 is rejected")
// })

// let p2 = new Promise(function(resolve, reject){
//     reject("promise 2 is resolved")
// })

// let p3 = new Promise(function(resolve, reject){
//     resolve("promise 3 is resolved")
// })


// Promise.race([p1, p2, p3]).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })


let p1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("promse 1 is resolved")
    }, 500)
})

let p2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("promse 2 is resolved")
    }, 1000)
})


Promise.race([p1, p2]).then((val)=>{
    console.log(val);
})