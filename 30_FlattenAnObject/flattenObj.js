let obj = {
  name: "Adam",
  age: 20,

  address: {
    city: "noida",
    pincode: 210309,
  },
};

// flatten obj function
function flattenObj(obj, parent, res = {}) {
  for (const key in obj) {
    let propName = parent ? parent + "_" + key : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

console.log(flattenObj(obj));
