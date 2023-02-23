let promise = Promise.resolve();

// promise.then(() => console.log("promise done!"));

// console.log(promise);
// console.log("code finished"); // this alert shows first

Promise.resolve()
  .then(() => console.log("promise done!"))
  .then(() => console.log("code finished"));