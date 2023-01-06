let cp = require("child_process");
// console.log("Trying to open our 🧡");
// // cp.execSync("calc");
// // cp.execSync("code");
// cp.execSync("start chrome https:\\www.pepcoding.com");
// console.log("opened our 🧡");
let output = cp.execSync("node abc.js");
console.log("Output 🔥 "+ output);
