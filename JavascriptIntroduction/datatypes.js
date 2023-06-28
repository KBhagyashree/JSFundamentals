/* ~~~~~~~~~~~~ DataTypes ~~~~~~~~~~~~ */
// Categories of Data Types in JS:
// 1. PRIMITIVE DATA TYPES: Data types that can hold a single value of data.
// 2. NON PRIMITIVE DATA TYPES: Data types that can hold multiple values of data.

/* ~~~~~~~~~~~~ Primitive DataTypes ~~~~~~~~~~~~ */
// Following are the different primitive data types in JS:
// 1. NUMBER: an integer or a floating-point numbe
// 2. BIGINT: an integer with arbitrary precision
// 3. BOOLEAN: Any of two values: true or false
// 4. STRING: represents textual data
// 5. SYMBOL: data type whose instances are unique and immutable
// 6. UNDEFINED: a data type whose variable is not initialized
// 7. NULL: denotes a null value

// NUMBER
// Number type can only represent numbers less than (2^53 - 1) and more than -(2^53 - 1)
// For example,
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Number', 'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let num = 0;
num = 34; console.log("Number can be a postive integer value like: " + num);
num = 34.567; console.log("Number can be a floating point value like: " + num);
num = 4.598e3; console.log("Number can be an exponential value like: (4.598e3) = " + num);
num = -10009; console.log("Number can be a negative integer value like: " + num);
num = 9/0; console.log("Number can be an +Infinity value like: (9/0) = " + num);
num = -4/0; console.log("Number can be a -Infinity value like: (-4/0) = " + num);
num = "abc"/60; console.log("Number can be a NaN - Not a number value like: (\"abc\"/60) = " + num);

// BIGINT
// If we want a larger number than greater than (2^53 - 1) and less than -(2^53 - 1)
// A BigInt number is created by appending n to the end of an integer.
// These are basically values of higher accuracy.
// For example,
console.log('%cOUTPUT FOR TEST CODE: Data Types -> BigInt', 'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let bignum = 0;
bignum = 900719925124740998n; console.log("Big Integer value example: " + bignum);
bignum = -8607192515666670998n; console.log("Big Integer value example: " + bignum);

// BOOLEAN
// Boolean represents one of two values: true or false
// Numeric equivalent of true - 1 and false - 0
// These value typically used for performing logical comparisons.
// For example,
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Boolean', 'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let flag = true; console.log("Is the switch ON?: " + flag); 
flag = false; console.log("Is the switch OFF?: " + flag);

// STRING
// A String is sequence of multiple characters. 
// A variable of type of string can also store a single character. 
// JS offers many functions to perform various string operations. 
// Typically a string value can be surrounded within a pair of double/single quotes or a backticks.
// A console.log statement is of type string.
// Let us look at a few examples, 
console.log('%cOUTPUT FOR TEST CODE: Data Types -> String', 'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let str;
str = 'a'; console.log("String can hold a single character: "+ str);
str = 'an apple a day keeps a doctor away'; 
console.log("String can hold a string of multiple characters as well: "+ str);

// Common String Operations
// length - property that holds the length of the string
str = 'UNESCO - United Nations Educational, Scientific and Cultural Organization';
console.log("Example String: " + str);

let strLength = str.length;
console.log("String Length: " + strLength);

// String Concatenation - 2 strings can be concatenated using the + operator
// or the conat() function
let strConcat = str + ". It is headquarted in Paris, France."
console.log("Concatenated String: " + strConcat);

// String Parts Extraction - 
// String parts can be extracted by using the following functions
// slice(start, end)
// substring(start, end)

let strSlice = str.slice(7, 25);
console.log("Part of string from places 7 to 25: " + strSlice);

strSlice = str.slice(35);
console.log("Part of string from places 35 to end: " + strSlice);

strSlice = str.slice(-45, -20);
console.log("Part of string from places -45 to -20: " + strSlice);

// substring() is similar to slice() except substring() treats 
// indices less 0 as 0.
strSubString = str.substring(7, 25);
console.log("Part of string from places 7 to 25: " + strSubString);

strSubString = str.substring(35);
console.log("Part of string from places 35 to end: " + strSubString);

strSubString = str.substring(-45, -20);
console.log("Part of string from places -45 to -20: " + strSubString);

// String Parts Replacement -
// replace('part_of_string', 'new_value') 
let strReplace = str.replace('-', 'stands for');
console.log("Replacing \'-\' with \'stands for\': " + strReplace);

// Make String Uppercase - 
// toUpperCase()
let strUpper = str.toUpperCase();
console.log("All UPPERCASE string: " + strUpper);

// Make String Lowercase - 
// toLowerCase()
let strLower = str.toLowerCase();
console.log("All lowercase string: " + strLower);

str = "     Hello    World      ";
console.log("Example String: " + str);

// Removing Whitespace From Start & End -
// trim()
let strTrim = str.trim();
console.log("String after removal of whitespace from start & end: " + strTrim);

// Removing Whitespace from Start - 
// trimStart()
let strTrimStart = str.trimStart();
console.log("String after removal of whitespace from start only: " + strTrimStart);

// Removing Whitespace from End - 
// trimEnd()
let strTrimEnd = str.trimEnd();
console.log("String after removal of whitespace from end only: " + strTrimEnd);

// Padding Value to Start of String
// padStart()
let strStartPad = str.padStart(30,'*');
console.log("Pad * from the Start till string length becomes 30: " + strStartPad);

// Padding Value to End of String
// padEnd()
let strEndPad = str.padEnd(30,'$');
console.log("Pad $ to the End till string length becomes 30: " + strEndPad);

// Get a Specific Character given the Index
// charAt()
console.log("Character at index 14 is: " + str.charAt(14));

// Get a Specific Character using []
console.log("str[14] = " + str[14]);
console.log("str[15] = " + str[15]);
console.log("str[20] = " + str[20]);

// UNDEFINED
// The undefined data type represents value that is not assigned. 
// If a variable is declared but the value is not assigned, 
// then the value of that variable will be undefined.
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Undefined', 'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let data;
console.log("Value of not defined \'data\' variable: " + data);

// We can explicitly define a variable as undefined
data = undefined;
console.log("On assigned undefined value to the \'data\' variable: " + data);

// NULL
// 'null' is a special value that represents empty or unknown value. 
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Null', 'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
data = null;
console.log("\'data\' variable is  empty: " + data);

// SYMBOL
// Symbols are immutable (cannot be changed) and are unique.
// Symbols with the same description are not the same.
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Null', 'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let symb = Symbol('hello');
console.log(symb);
