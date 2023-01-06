function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === 'coffee') {
            resolve('Order Placed');
        } else {
            reject('Sorry we only serve coffee');
        }
    })
}


function processOrder(order){
    return new Promise(function (resolve){
        console.log(`Order is being processed`);
        resolve(`coffee Served for the ${order}`);
    })
}

// placeOrder(`tea`).then(function (orderFromCustomer){
//     console.log(`Request Recieved`);
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function (err){
//     console.log(err);
// })




// Async-await

async function serverOrder(){

    try {
        const orderReceived = await placeOrder(`tea`);
        console.log(orderReceived);
        const processedOrder = await processOrder(orderReceived);
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }

}

serverOrder();