// Test truthy and falsy values

function testTruthyFalsy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}

// testTruthyFalsy(false)  // return falsy
// testTruthyFalsy('')   // return falsy
// testTruthyFalsy(0)   // return falsy
// testTruthyFalsy(-0)   // return falsy
// testTruthyFalsy(+0)   // return falsy
// testTruthyFalsy(4)   // return truthy
// testTruthyFalsy(null)   // return falsy
// testTruthyFalsy(NaN)   // return falsy
// testTruthyFalsy(NaN)   // return falsy
// testTruthyFalsy(undefined)   // return falsy




// testTruthyFalsy({})   // return truthy
// testTruthyFalsy([])   // return truthy
// testTruthyFalsy(()=>{})   // return truthy
// testTruthyFalsy(4)   // return truthy
// testTruthyFalsy("Not empty string")   // return truthy
// testTruthyFalsy(Infinity)   // return truthy
// testTruthyFalsy(new Boolean(false))   // return truthy