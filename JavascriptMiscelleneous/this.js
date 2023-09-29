/* ~~~~~~~~~~~~ this ~~~~~~~~~~~~ */
// In JavaScript 'this' keyword refers to object. The object that is invoked depends upon the
// scope where the 'this' keyword is used.
// If 'this' is used inside an object constructor it refers to that object.
// Everywhere else it refers to the window object.

console.log('%cOUTPUT FOR TEST CODE: this', 'background-color: #ADD8E6; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
// 'this' REFERS TO WINDOW OBJECT
// Here the scope is global
this.bkFakeName = 'Chrome Window'
console.log(`Global Scope -> window.bkFakeName ${this.bkFakeName}`);

// Here the scope is function
function printName(){
    console.log(`Function Scope -> window.bkFakeName = ${this.bkFakeName}`);
}
printName();
// Here the scope is block
{
    console.log(`Block Scope -> window.bkFakeName = ${this.bkFakeName}`);
}

function player(firstname, lastname){
    // Here 'this' refers to the object
    this.firstname = firstname;
    this.lastname = lastname;
    this.printFullName = () => console.log(`Player: ${this.firstname} ${this.lastname}`);
}

function printPlayerIntro(city, state){
    console.log(`Player ${this.firstname} ${this.lastname} lives in ${city}, ${state}`);
}

// 'this' REFERS TO PLAYER OBJECT
let player1 = new player('Sachin', 'Tendulkar');
player1.printFullName();

/* ~~~~~~~~~~~~ call() ~~~~~~~~~~~~ */
// call() is a way of attaching a 'this' to any object we desire. 
// This is an easy way to reuse object methods or functions outside of the object. 
// The first argument of call() is a reference to the object followed by arguments to 
// the function.
console.log('%cOUTPUT FOR TEST CODE: call()', 'background-color: #ADD8E6; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
printPlayerIntro.call(player1, 'Mumbai', 'Maharashtra');


/* ~~~~~~~~~~~~ apply() ~~~~~~~~~~~~ */
// apply() is a way of attaching a 'this' to any object we desire. 
// This is an easy way to reuse object methods or functions outside of the object. 
// The first argument of apply() is a reference to the object followed by arguments to 
// the function. The arguments to the function will be sent as an array i.e. wrapped in [] brackets.
console.log('%cOUTPUT FOR TEST CODE: apply()', 'background-color: #ADD8E6; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
printPlayerIntro.apply(player1, ['Mumbai', 'Maharashtra']);

/* ~~~~~~~~~~~~ bind() ~~~~~~~~~~~~ */
// bind() is a way of binding a function to a variable so that the function can be called
// later in time. Just like call() & apply() the first argument of bind() is reference to the 
// object of interest, i.e. what do we want the 'this' to point to. 
// It also takes arguments to the function at the time of binding. Or the arguments can be sent
// at the time of function call too. 
// Partial binding of arguments is also allowed incase the functions accepts more than 1 argument.
console.log('%cOUTPUT FOR TEST CODE: bind()', 'background-color: #ADD8E6; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let prt = printPlayerIntro.bind(player1);
prt('Mumbai', 'Maharashtra');