const cart = ["shoes", "pants", "kurta"];

const createOrder = cart => {
  return new Promise((resolve, reject) => {
    if(validateCart(cart)) {
      setTimeout(() => {
        resolve("12345");
      }, 1000)
    } else {
      reject(new Error("Carrt is not valid"));
    }
  })
} 

const validateCart = () => {
  return true;
}

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment successfull!");
    }, 1000)
  })
}

const showOrderSummary = (paymentInfo) => {
  return new Promise((resolve, reject) => {
    if(paymentInfo === "Payment successfull!") {
      setTimeout(() => {
        resolve("Order successfull");
      }, 1000);
    } else {
      reject(new Error("Payment Failed!"))
    }
  })
}

const updateWallet = (orderSummary) => {
  return new Promise((resolve, reject) => {
    if(orderSummary === "Order successfull" ) {
      setTimeout(() => {
        resolve("Wallet Updated!");
      }, 1000);
    } else (
      reject(new Error("Wallet Deduction Failed!!"))
    )
  })
}


createOrder(cart)
  .then(orderId => {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then(orderId => {
    return proceedToPayment(orderId);
  })
  .then(paymentInfo => {
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then(orderSummary => {
    console.log(orderSummary);
    return updateWallet(orderSummary);
  }).then(walletInfo => {
    console.log(walletInfo);
  })
  .catch(err => {
    console.log(err);
  })
