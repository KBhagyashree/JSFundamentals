/* ~~~~~  ~~~~~ */
//  An asynchronous event can occur after a set time
let timeoutId = setTimeout(() => console.log("This event occurred after 4 secs"), 4000);
console.log("1");
setTimeout(() => console.log("2"), 2000);
setTimeout(() => console.log("3"), 0);
setTimeout(() => console.log("4"), 4000);
console.log("5");

// Cancel a setTimeout function call
clearTimeout(timeoutId);

let timeintervalId = setInterval(() => console.log("Hello World!"),2000);
let greetCounter = 1;
let timeIntervalId2;
function incGreetCounter(){
    console.log("Hello World " + greetCounter + " time!");
    greetCounter++;
    // incGreetCounter(greetCounter == 6)
    //     clearInterval(timeIntervalId2); 
}
setInterval(incGreetCounter, 3000);
clearInterval(timeintervalId);
