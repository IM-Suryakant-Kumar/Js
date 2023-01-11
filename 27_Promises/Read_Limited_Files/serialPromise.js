const fs = require("fs").promises;

let fileRead1 = fs.readFile("./f1.txt");

// console.log(fileRead1);

function cb1(data) {
  console.log("Data -> " + data);
  let fileRead2 = fs.readFile("./f2.txt");
  return fileRead2;
}

function cb2(data) {
  console.log("Data -> " + data);
  let fileRead3 = fs.readFile("./f3.txt");
  return fileRead3;
}

function cb3(data) {
  console.log("Data -> " + data);
}

fileRead1
  .then(cb1)
  .then(cb2)
  .then(cb3)
  .catch((err) => {
    console.log(err);
  });
