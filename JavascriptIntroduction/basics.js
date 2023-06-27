/* ~~~~~~~~~~~~ Types of Comments ~~~~~~~~~~~~ */
// We can add meaningful descriptions/explanations to the JS code using
// a Single Line Comment - '//' or a Multiline/Block Comment '/* .... */'

// 1. SINGLE LINE COMMENT
// A single line of description can be converted into a comment by using '//'.
// Such a comment is called a single line comment. This comment is an example of single 
// line comment. 

// 2. MULTILINE/BLOCK COMMENT
// If the description is long and covers multiple lines, this block of description
// can be commented out using '/* <multiple lines description here> */'.
// Such a comment is called a mutiline comment. Below is an example of multiline/block
// comment
/* Lorem ipsum dolor sit amet. Id dignissimos veritatis ut incidunt architecto sit 
consequatur expedita est maiores ratione et totam accusamus aut consectetur maiores? 
Vel voluptatibus commodi et minima sint qui nihil nihil aut nulla ullam. 
Et Quis mollitia id iste blanditiis ea earum iusto At incidunt voluptatem est 
architecto doloremque a enim iste. Nam consequatur provident non recusandae 
iusto quo voluptatum consequatur. */

/* ~~~~~~~~~~~~ console.log() ~~~~~~~~~~~~ */
// console.log() is a browser console function to print strings to the browser console.
// It is useful for debugging JS code. 
console.log('%cOUTPUT FOR TEST CODE: console.log()', 'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
console.log("Hello from basics.js!");
console.log("Hope you're doing well!");

/* ~~~~~~~~~~~~ Variables & Constants ~~~~~~~~~~~~ */
// Creating variable and constants is a way of directing the browser
// to temporarily allocate space to store some data while the code executes.

// VARIABLES 
// Variables in JS can be created using 'var' & 'let' keyword
// 'let' was introduced in ES6
// Values once assigned to variables CAN CHANGE as the code executes.

// CONSTANT
// Constants in JS can be created using 'const' keyword
// Values once assigned to constants CANNOT CHANGE as the code executes.
console.log('%cOUTPUT FOR TEST CODE: Variables & Constants', 'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
var num1 = 90;
let num2 = 76;
console.log("Number 1 = " + num1);
console.log("Number 2 = " + num2);
num1 = 100;
num2 = 34;
console.log("Number 1 = " + num1);
console.log("Number 2 = " + num2);

const pi = 3.14;
console.log("The value of pi is " + pi);

try {
    console.log("If we try changing the const value of pi...");
    pi = 3.146;
}
catch(Error){
    console.log("We get the following error:")
    console.log(Error);
}
