let p = new Promise((resolve, reject) => {
  reject(new Error("some error"));
  setTimeout(function () {
    reject(new Error("some error"));
  }, 1000);
  reject(new Error("some error"));
});

p.then(function (err) {
  console.log(1);
  console.log(err);
}).catch(function (err) {
  console.log(2);
  console.log(err);
});
