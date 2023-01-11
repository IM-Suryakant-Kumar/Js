let p1 = Promise.reject("Promise rejected").catch((val)=>{
    console.log(val);
});
// console.log(p1);