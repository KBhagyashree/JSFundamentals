/* ~~~~~~~~~~~~ Polyfill ~~~~~~~~~~~~ */
// Polyfill is a way of creating browser fallback i.e. in case a pre-defined method
// isn't supported by the browser, a polyfill method can be used to perform the same operation.

console.log('%cOUTPUT FOR TEST CODE: polyfill for bind()', 'background-color: #ADD8E6; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
// Polyfill for bind() -> mybind()
// mybind() shall behave exactly like bind()

function player(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;    
}

function printPlayerIntro(city, state){
    console.log(`Player ${this.firstname} ${this.lastname} lives in ${city}, ${state}`);
}

Function.prototype.mybind = function(...params){
    let obj = this;
    let args1 = params.slice(1);
    return function(...args2){
        obj.call(params[0], ...args1, ...args2);
    }
}

let player1 = new player('Sachin', 'Tendulkar');
let prt = printPlayerIntro.mybind(player1, 'Mumbai');
prt('Maharashtra');