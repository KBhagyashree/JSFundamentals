/* ~~~~~~~~~~~~ Operators ~~~~~~~~~~~~ */
// An operator is a special symbol used to perform operations on operands (values and variables).
// Types of Operators:
// 1. Assignment Operators
// 2. Arithmetic Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. String Operators
// 7. Other Operators

/* ~~~~~~~~~~~~ Assignment Operators ~~~~~~~~~~~~ */
// = -> Assignment operator
// += -> Addition Assignment Operator
// -= -> Subtraction Assignment Operator
// *= -> Multiplication Assignment Operator
// /= -> Division Assignment Operator
// %= -> Remainder Assignment Operator
// **= -> Exponentiation Assignment Operator
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Assignment Operators', 
'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let x;   
console.log('x = ', x = 9);             // Assignment Operator
console.log('x += 1; x = ', x += 1);    // Addition Assignment Operator
console.log('x -= 2; x = ', x -= 2);    // Subtraction Assignment Operator
console.log('x *= 5; x = ', x *= 5);    // Multiplication Assignment Operator
console.log('x /= 8;  x = ', x /= 8);   // Division Assignment Operator
console.log('x %= 3; x = ', x %= 3);    // Remainder Assignment Operator
console.log('x **= 5; x = ', x **= 5);  // Exponentiation Assignment Operator

/* ~~~~~~~~~~~~ Arithmetic Operators ~~~~~~~~~~~~ */
// +  ->	Addition	
// -  ->	Subtraction	
// *  ->	Multiplication	
// /  ->	Division
// %  ->	Remainder
// ++ ->	Increment (increments by 1)
// -- ->	Decrement (decrements by 1)
// ** ->	Exponentiation (Power)
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Arithmetic Operators', 
'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
let y = 20;
console.log('y = ', y);
console.log('x + y = ', x+y);
console.log('x - y = ', x-y);
console.log('x * y = ', x*y);
console.log('x / y = ', x/y);
console.log('x % y = ', x%y);
console.log('++x; x = ', ++x);
x++;
console.log('x++;');
console.log('x = ', x);
console.log('--x; x = ', --x);
x--;
console.log('x--;');
console.log('x = ', x);
console.log('x**2; x = ', x**2);

/* ~~~~~~~~~~~~ Comparison Operators ~~~~~~~~~~~~ */
// ==  ->	Equal to: returns true if the operands are equal
// !=  ->	Not equal to: returns true if the operands are not equal
// === ->	Strict equal to: true if the operands are equal and of the same type
// !== ->	Strict not equal to: true if the operands are equal but of different type or not equal at all
// >   ->	Greater than: true if left operand is greater than the right operand
// >=  ->	Greater than or equal to: true if left operand is greater than or equal to the right operand
// <   ->	Less than: true if the left operand is less than the right operand
// <=  ->	Less than or equal to: true if the left operand is less than or equal to the right operand
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Comparison Operators', 
'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
x = 90;
y = 90;
console.log('x = ' + x + ', y = ' + y);
console.log('is x == y? Result: ', x==y );
console.log('is x != y? Result: ', x!=y);
console.log('is x === y? Result: ', x===y);
console.log('is x !== y? Result: ', x!==y);
x = 89;
console.log('x = ' + x + ', y = ' + y);
console.log('is x > y? Result: ', x>y);
console.log('is x < y? Result: ', x<y);
console.log('is x >= y? Result: ', x>=y);
console.log('is x <= y? Result: ', x<=y);

/* ~~~~~~~~~~~~ Logical Operators ~~~~~~~~~~~~ */
// && ->	Logical AND: true if both the operands are true, else returns false	
// || ->	Logical OR: true if either of the operands is true; returns false if both are false	
// !  ->	Logical NOT: true if the operand is false and vice-versa
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Logical Operators', 
'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
x = true;
y = false;
console.log('x = ' + x + ', y = ' + y);
console.log('x && y? Reuslt: ', x&&y);
console.log('x || y? Reuslt: ', x||y);
console.log('!x? Reuslt: ', !x);

/* ~~~~~~~~~~~~ Bitwise Operators ~~~~~~~~~~~~ */
// &   ->	Bitwise AND
// |   ->	Bitwise OR
// ^   ->	Bitwise XOR
// ~   ->	Bitwise NOT
// <<  ->	Left shift
// >>  ->	Sign-propagating right shift
// >>> ->	Zero-fill right shift
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Bitwise Operators', 
'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
x = 128;
y = 64;
// Function to convert decimals to binary values
// 'Functions' is covered in later topics
// JS doesn't have a direct way of representing binary values, thus, the conversion has to be
// handled via a function. Representing numeric values in the binary format allows us to
// get a better idea of bitwise operators
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
console.log('x = ' + dec2bin(x) + ', y = ' + dec2bin(y));
console.log('x & y = ', dec2bin(x & y));
console.log('x | y = ', dec2bin(x | y));
console.log('x ^ y = ', dec2bin(x ^ y));
console.log('~x = ', dec2bin(~x));
console.log('x << 1 = ', dec2bin(x << 1));
console.log('x >> 2 = ', dec2bin(x >> 2));
console.log('x >>> 3 = ', dec2bin(x >>> 3));

/* ~~~~~~~~~~~~ String Operators ~~~~~~~~~~~~ */
// + -> String concatenation operator enables users to combine 2 or more strings
console.log('%cOUTPUT FOR TEST CODE: Data Types -> String Operators', 
'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
x  = 'The capital of India is ';
y = 'New Delhi';
console.log('x = ', x);
console.log('y = ', y);
console.log('x + y = ', x+y);

/* ~~~~~~~~~~~~ Other Operators ~~~~~~~~~~~~ */
// ,            -> evaluates multiple operands and returns the value of the last operand.	
// ?:	        -> returns value based on the condition	(5 > 3) ? 'success' : 'error'; 	
// typeof	    -> returns a string indicating the data type	
console.log('%cOUTPUT FOR TEST CODE: Data Types -> Other Operators', 
'background-color: #90EE90; font-weight: bold;');
/* >>>>>>>>>>>>> T  E  S  T  C  O  D  E <<<<<<<<<<<<< */
console.log('x = (1, 2, 4, 3); x = ', x = (1,2,4,3));
console.log('(5 > 3) ? success : error ; Result = ' + ((5 > 3) ? 'success' : 'error')); 
console.log('typeof x is '+ typeof x);
