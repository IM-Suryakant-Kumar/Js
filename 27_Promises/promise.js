const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;

function customPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catchers = [];

  function resolve(result) {
    if (state !== PENDING) return;

    state = FULLFILLED;
    value = result;

    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = err;

    catchers.forEach((c) => c(value));
  }

  this.then = function (successCallback) {
    if (state === FULLFILLED) {
      successCallback(value);
    } else {
      handlers.push(successCallback);
    }
  };

  this.catch = function (failureCallback) {
    if (state === REJECTED) {
      failureCallback(value);
    } else {
      catchers.push(failureCallback);
    }
  };

  executor(resolve, reject);
}

const doWork = (res, rej) => {
  if (2 == 2) {
    setTimeout(() => {
      res("Promise Resolve");
    }, 1000);
  } else {
    setTimeout(() => {
      rej("Promise Rejected");
    }, 1000);
  }
};

let greeting = new customPromise(doWork);

greeting.then((val) => {
  console.log("then log", val);
});

greeting.catch((val) => {
  console.log("catch log", val);
});
