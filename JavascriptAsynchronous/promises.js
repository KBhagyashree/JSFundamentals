/* ~~~~~~~~~~~~ Handling Asynchronous Events ~~~~~~~~~~~~ */
// Asynchronous Events in JS can be handled in 2 ways:
// 1. Callbacks
// 2. Promises

/* ~~~~~~~~~~~~ Callbacks ~~~~~~~~~~~~ */
// Callaback means sending a function to be called later to a function as its
// argument. This is the easiest way of handling an asynchrnous event in JS.
// However, Callbacks are not reliable when there is a sequence of asynchrnous events
// that must occur. Since,there is no gaurantee that a callback function will 
// execute. Also for a sequence of async events, the code starts to grow
// horizontally and is thus, not easy to read or maintain. This is also,
// called the pyramid of doom. Thus, Promises are a better way of handling 
// async events.

console.log('%cOUTPUT FOR TEST CODE: Callbacks', 'background-color: #FFD580; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
console.log("SetTimeout() takes a callback function.");

// fnc() is a callback function!
let fnc = () => console.log("Hello from the Callback Function!");
console.log("Calling SetTimeout() set to 10 secs. After 10 secs there shall be a response from the callback function.");
setTimeout(fnc, 10000);

/* ~~~~~~~~~~~~ Promises ~~~~~~~~~~~~ */
// Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Promise allows the us to attach a function to be called once an async event occurs.
// To understand promises we must understand it States & it's Result.
// States of Promise:
// 1. Pending - The async event is yet to complete, thus, the promise is still pending/unfulfilled
// 2. Fulfilled - The async event has occurred & the promise is fulfilled. It will execute resolve().
// 3. Reject - The async event has failed & the promise is rejected. It will execute reject() & error shall occur.
// Promise Result:
// Generally promises send a result. The result can be any data that we would like to process
// further once the aysn event is complete.
console.log('%cOUTPUT FOR TEST CODE: Promises', 'background-color: #FFD580; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let cart = ['pencil', 'pen', 'diary'];

function isCartValid(cart){
    return new Promise(function(resolve, reject){
        let orderId = 12345;
        if(cart.length)
            resolve(orderId);
        else {
            let err = new Error("Cart is invalid");
            reject(err);
        }
    });
}

let prm = isCartValid(cart);
console.log(prm);
prm
.then(function isPaymentReceived(orderId){
    console.log(`Payment received for order ${orderId}`);
    let orderStatus = "Packing Order";
    return orderStatus;
})
.then(function printOrderStatus(orderStatus){
    console.log(`Your order status is ${orderStatus}`);
})
.catch(function(err){
    console.log(err);
})
.then(() => console.log('functions after catch() will be executed no matter what.'));
