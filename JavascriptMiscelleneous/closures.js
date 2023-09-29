/* ~~~~~~~~~~~~ Closures ~~~~~~~~~~~~ */
// Closure is way of retaining the value of a variable from the outer scope by an inner
// function even after the outer function has completed execution.

console.log('%cOUTPUT FOR TEST CODE: Closure', 'background-color: #ADD8E6; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
console.log('%cAfter call to isCartValid(cart), a closure function is returned. When the closure \
function is called, it remembers the result of cart validation & cart items and prints the acknowledgement.','color: #296E85;');
let cart = ['pen', 'diary', 'notepad', 'bookmarks'];
console.log(cart);

function isCartValid(cart){
    let result = false;
    cart? result = true: result = false;

    // Closure function
    return function ackCartValid(){
        if (result)
            console.log(`${cart} items are available. You're order shall be processed shortly!`);
        else 
            console.log("Cart is empty. Please select items.");
    }
}

let ack = isCartValid(cart);
ack();

/* ~~~~~~~~~~~~ Currying ~~~~~~~~~~~~ */
// Currying is a way of converting a function with multiple arguments into 
// a sequence of functions with single argument.

// CURRYING USING bind()
console.log('%cOUTPUT FOR TEST CODE: Currying with bind()', 'background-color: #ADD8E6; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
console.log('%cResult of multiplyBy2(y) after it is bound to multiply(x,y) with argument value x = 2 :','color: #296E85;');
function multiply(x, y){
    console.log(`${x} * ${y} = ${x * y}`);
}

let multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(3);
multiplyBy2(10);
multiplyBy2(45);

// CURRYING USING CLOSURES
console.log('%cOUTPUT FOR TEST CODE: Currying with Closures', 'background-color: #ADD8E6; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
console.log('%cResult of multiplyBy3(y) after call to multiplyNum(3) - it returns a function with argument value x = 3 :','color: #296E85;');
function multiplyNum(x){
    return (y) => console.log(`${x} * ${y} = ${x * y}`);
}

let multiplyBy3 = multiplyNum(3);
multiplyBy3(4);
multiplyBy3(20);
multiplyBy3(43);

/* ~~~~~~~~~~~~ Memoization ~~~~~~~~~~~~ */
// Memoization is a way fo caching the function return values in the data structure using 
// function parameter as a reference

console.log('%cOUTPUT FOR TEST CODE: Memoization', 'background-color: #ADD8E6; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
console.log('%cmultiplyBy256(num) uses memoization. When it is called with num = 50 for the first time, it \
performs the multiplication. For all the later function calls with num = 50, it returns the cached value.','color: #296E85;');
let tableOf256 = [];

function multiplyBy256(num){
    // tableOf256 array acts like a cache to store results of multiplication of any num with 256
    // If the multiplication with num has not been done previously, then do it now & cache the result.
    console.log(`Checking the cache for num ${num}`);
    if (!tableOf256[num]){
        console.log(`Performing the calculation first time..`);
        tableOf256[num] = 256 * num;
    }
    else {
        console.log(`Result available.`);
    }
    // Return the cached result.
    return tableOf256[num];
}

console.log(`256 * 50 = ${multiplyBy256(50)}`);
console.log(`256 * 50 = ${multiplyBy256(50)}`);
console.log(`256 * 50 = ${multiplyBy256(50)}`);
