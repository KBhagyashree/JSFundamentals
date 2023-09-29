// let, var, const
// block scope, global scope, function scope


/* ~~~~~ call(), apply(), bind() ~~~~~ */
// const player1 = {
//     firstname: "Mahendra",
//     lastname: "Dhoni",
//     printFullName : function (){
//         console.log(this.firstname + " " + this.lastname);
//     },
//     printHometown : function(hometown, state){
//         console.log(this.firstname + " " + this.lastname + " comes from " + hometown + ", " + state);
//     }
// }

// const player2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar"
// }

// // functions common to both the object can be defined outside the object definition/constructor
// function printRecord(runs, matches){
//     console.log(this.firstname + " " + this.lastname + " has scored total " + runs + " runs in " + matches + " matches");
// }

// player1.printFullName();
// player1.printFullName.call(player2);                            // function borrowing, this -> player2
// player1.printHometown("Ranchi", "Jharkhand");                   
// player1.printHometown.call(player2, "Mumbai", "Maharashtra");   // this -> player2 & argument passing to call()
// printRecord.call(player1, 10773, 350);
// printRecord.apply(player2, [18426, 463]);                       // this -> player2, arguments passed as an array list

// // Function binding so that it can be called later
// let player2FullName = player1.printFullName.bind(player2);
// console.log(player2FullName);
// player2FullName();

// /* ~~~~~ Polyfill for bind() ~~~~~ */
// Function.prototype.mybind = function(...args1){
//     let obj = this;
//     let params = args1.slice(1);
//     return function(...args2){
//         obj.apply(args1[0], [...params, ...args2]);
//     }
// }

// let player2PrintRecord = printRecord.mybind(player2);
// console.log(player2PrintRecord);
// player2PrintRecord(18426, 463);

// let player2PrintRecord2 = player1.printFullName.mybind(player2);
// console.log(player2PrintRecord2);
// player2PrintRecord2();

// /* ~~~~~ function currying ~~~~~ */
// // transforms a function with multiple arguments into a nested series of functions, 
// // each taking a single argument.

// function multiply(x, y){
//     return console.log(x + " x " + y + " = " + x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

// // function currying using closure
// function add(x){
//     function add2(y){
//         return console.log(x + " + " + y + " = " + (x + y));
//     }
//     return add2;
// }

// add(3)(4);
