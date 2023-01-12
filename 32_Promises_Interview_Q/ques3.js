// Create a setTimeOut with Promises

function delay(ms) {
  return new Promise(resolve=>setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("run after 3 seconds"));
