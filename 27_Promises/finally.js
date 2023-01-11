var loader = true;
function test() {
  var a = 1 + 1;
  return new Promise((resolve, reject) => {
    if (a === 2) {
      resolve("Promise resolved Yesssssss!!!");
    } else {
      reject("Promise rejected Noooooooo!!!");
    }
  });
}

test()
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    // console.log("Experiment completed");
    loader = false;
  });
