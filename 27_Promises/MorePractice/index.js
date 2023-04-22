const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function(orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function(orderId) {
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function(err) {
    console.log(err);
  })
  .then(function(orderId) {
    console.log("No matter what happend, I will definetely be called.!");
  })


//-------------------------
function createOrder() {
  
  const pr = new Promise(function(resolve, reject)  {
    // createOrder
    // validateCart
    // orderId
    if(!validateCart(cart)) {
      const err = new Error("Cart is Not valid");
      reject(err)
    }
    // logic for createOrder
    const orderId = "12345";
    if(orderId) {
      setTimeout(function() {
        resolve(orderId)
      }, 5000)
    }
    
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function(resolve, reject) {
    resolve("Payment Successfull!");
    // reject(new Error("Payment Failed!"));
  })
}

function validateCart(cart) {
  return false;
}