let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("some error"));
  }, 1000);
  reject(new Error("Some error"));
});

p.then(null, function (err) {
  console.log(1);
  console.log(err);
}).catch(function (err) {
  console.log(2);
  console.log(err);
});
