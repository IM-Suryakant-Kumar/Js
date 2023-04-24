// const path = require("path");

// let pathObj = path.parse(__filename);
// console.log(pathObj);

// -----------------------------
// const os = require("os");

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// // console.log("Total Memory: " + totalMemory);

// // Template strings
// // ES6 / ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// --------------------------------
// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", (err, files) => {
//   if(err) console.log("Error", err);
//   else console.log("Result", files);

// fs.readdir("$", (err, files) => {
//   if(err) console.log("Error", err);
//   else console.log("Result", files);
// });

// --------------------------------------
// const EventEmitter =  require("events");
// const emitter = new EventEmitter();

// // Register a listener
// emitter.on("messagedLogged", (arg) => {  // e, eventArg
//   console.log("Listener Called", arg);
// });

// // Raise an event
// emitter.emit("messagedLogged", { id: 1, url: "http://" });
// // Making a noise, produce - signaling

// Challenge ---------------------------------------
// // Raise: logging (data: message)
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// // Register an event
// emitter.on("logging", (arg) => {
//   console.log(arg.message);
// })

// // Raise listener
// emitter.emit("logging", { id: 2, message: "Raise logging!" });

// --------------------------------------
const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

// Register a listener
logger.on("messagedLogged", (arg) => {  // e, eventArg
  console.log("Listener Called", arg);
});

logger.log("message");

