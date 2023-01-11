let p1 = new Promise(function(resolve, reject){
    resolve("promise 1 is resolved")
})

let p2 = new Promise(function(resolve, reject){
    reject("promise 2 is rejected")
})

let p3 = new Promise(function(resolve, reject){
    resolve("promise 3 is resolved")
})


let promiseALl = Promise.all([p1, p2, p3])
promiseALl.then((promiseArr)=> {
    console.log(promiseArr);
}).catch((err)=> {
    console.log(err);
})