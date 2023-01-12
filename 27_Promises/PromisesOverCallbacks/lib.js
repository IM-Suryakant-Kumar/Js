function updateAccount(product, cb) {
  setTimeout(() => {
    console.log(product + " purchased");
    cb();
    cb();
    cb();
  }, 2000);
}

function promiseUpdateAccount(product) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });
}

module.exports = {
  updateAccount: updateAccount,
  promiseUpdateAccount: promiseUpdateAccount,
};
