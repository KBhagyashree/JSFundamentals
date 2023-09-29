/* ~~~~~ this operator ~~~~~ */
// If this is used with 'use strict' mode, it will be undefined

// this operator refers to the 'window' object @
// 1. anywhere within the code except inside an object contructor function
// 2. inside a function

console.log(this);                          // Window {...}

this.name = "Akash";
console.log(this.name);                     // 'Akash'
console.log(this.age);                      // undefined 

// Inside the function as well, this refers to the window object
this.greeting  = "Good Morning!";
function greetGM(){
    console.log(this.greeting);
}

greetGM();

function greetGN(){
    this.greeting = "Good Night!";
    console.log(this.greeting);
}
greetGN();

// Inside an object constructor, this refers to the object
function Student(name, score){
    this.name = name;
    this.std = 3;
    this.grade = "A";
    this.score = score;
    // here this refers to the object - Student
    this.getClassDetails = function(){ return this.std + " " + this. grade;}
    this.getResult = function(){
        function getPassBand(){
            // For a function defined inside an object method, the this refers to the window object
            console.log("this.score = " + this.score);
            if (this.score != undefined && this.score > 70)
                return "distinction";
            else if (this.score != undefined && this.score <= 70 && score > 35)
                return "first class";
            else if (this.score != undefined && this.score <= 35)
                return "fail";
            else 
                return undefined;
        }
        return getPassBand();
    }
    this.getResultArrow = function(){
        getPassBand = () => {
            // Inside an arrow function, the this refers to the parent scope, thus, it
            // refers to the this within the method scope.
            console.log("this.score: "+ this.score);
            if (this.score != undefined && this.score > 70)
                return "distinction";
            else if (this.score != undefined && this.score <= 70 && score > 35)
                return "first class";
            else if (this.score != undefined && this.score <= 35)
                return "fail";
            else 
                return undefined;
        }
        return getPassBand();
    }
}

const rohan = new Student("Rohan", 75);
console.log("Rohan goes to " + rohan.getClassDetails());
console.log("Rohan's result: " + rohan.getResult());
console.log("Rohan's result: " + rohan.getResultArrow());

/* ~~~~~ generator function ~~~~~ */
// generator functions are defined by function* or function * followed by function name 
// of your choice. * after the keyword function indicates it is a generator function.
// Generator function is useful for neatly handling asynchronous events. 
// Generator function means the function whose state can be halted as required and resumed
// as required. 
// parameters can also be passed to generator functions. 
function* genfunc(x){
    console.log("This was printed after the 1st call to the generator function.");
    yield 100;  // keyword yield means the function execution is haldted and 100 indicates the return value
    console.log("This was printed after the 2nd call to the generator function.");
    yield x;
    console.log("This was printed after the 3rd call to the generator function.");
    return 300; // keyword return indicates the end of function execution
    console.log("This was printed after the 4th call to the generator function.");
    return 400; // Any code after the return statement shall not be executed even if calls are made
    // to the generator function
}

// Calls to generator function are done using the generator function object
// the generator object {value: <yeild/return value>, done: <true/false> }
const genObj = genfunc(32);
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
