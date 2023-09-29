// All About Arrays

// Creating an Array
const arr1 = [1,2,3,4,5];
const arr2 = new Array("violet", "indigo", "blue", "green", "yellow", "orange", "red");

// Type of
console.log(typeof arr1);         // typeof defined variable is object
console.log(typeof arr2);         // typeof defined variable is object
console.log(typeof Array);        // typeof pre-defined javascript object i.e. Array() is function

// Accessing array elements
console.log(arr1[0]);
console.log(arr1[1]);
let sum = arr1[0] + arr2[0];
arr2[3] *= 2;
arr2[9] = 90;

// convert Array elements to string
let arr2Str = arr2.toString();
console.log(arr2Str);




