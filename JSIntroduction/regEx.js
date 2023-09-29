/* ~~~~~ Regular Expressions ~~~~~ */
// 2 ways of creating regular expressions:
// 1. using regular expressions literal / /
// 2. using the RegExp()

// Regular Expression Flags
// Flags are used with regular expressions that allow various options such as global search, 
// case-insensitive search, etc. They can be used separately or together.
// g	Performs a global match (find all matches)
// m	Performs multiline match
// i	Performs case-insensitive matching

// Regular expressions are string patterns to look for in an input string and perform actions
// based on that.
// Meta characters [] . ^ $ * + ? {} () \ | are used for creating different regular expressions to match

// Meta character []
// Square brackets specify a set of characters you wish to match.
let exp1 = /[a]/g;
console.log("abyssmal".match(exp1));
exp1 = /[abs]/g;
console.log("abyssmal".match(exp1));
exp1 = /[^abs]/g;
console.log("abyssmal".match(exp1));
exp1 = /[k-o]/g;
console.log("abyssmal".match(exp1));
exp1 = /[369]/g;
console.log("9863863800".match(exp1));
exp1 = /[3-5]/g;
console.log("9863863800".match(exp1));
exp1 = /[^3-5]/g;
console.log("9863863800".match(exp1));

// Meta character . 
// A period matches any single character (except newline '\n').
let exp2 = /./g;
console.log("aloha".match(exp2));
exp2 = /../g;
console.log("aloha".match(exp2));
exp2 = /..../g;
console.log("aloha".match(exp2));

// Meta character ^
// The caret symbol ^ is used to check if a string starts with a certain character.
let exp3 = /^Alo/g;
console.log(exp3.test("Aloha! from Hawai"));
exp3 = /^A/g;
console.log(exp3.test("Aloha! from Hawai"));
exp3 = /^alo/g;
console.log(exp3.test("Aloha! from Hawai"));

// Meta character $
// The dollar symbol $ is used to check if a string ends with a certain character.
let exp4 = /i$/g;
console.log(exp4.test("Aloha! from Hawai"));
exp4 = /I$/g;
console.log(exp4.test("Aloha! from Hawai"));

// Meta character *
// The star symbol * matches zero or more occurrences of the pattern left to it.
let exp5 = /bo*t/g;
console.log("bt botter bought some butter but, she said, this butter's bitter".match(exp5));
exp5 = /t*er/g;
console.log("betty botter bought some butter but, she said, this butter's bitter".match(exp5));

// Meta character +
// The star symbol + matches one or more occurrences of the pattern left to it.
let exp6 = /bo+t/g;
console.log("bt botter bought some butter but, she said, this butter's bitter".match(exp6));
exp6 = /t+er/g;
console.log("betty botter bought some butter but, she said, this butter's bitter".match(exp6));

// Meta character ?
// The question mark symbol ? matches zero or one occurrence of the pattern left to it.
let exp7 = /bo?t/g;
console.log("bt botter bought some butter but, she said, this butter's bitter".match(exp7));
exp7 = /t?er/g;
console.log("betty botter bought some butter but, she said, this butter's bitter".match(exp7));

// Meta character {n,m}
// Match at least n, and at most m repetitions of the pattern left to it.
let exp8 = /t{1,2}/g;
console.log("bt botter bought some butter but, she said, this butter's bitter".match(exp8));
exp8 = /[a-z]{2,4}/g;
console.log("mn, man, maan, maaan, maaaan".match(exp8));

// Meta character |
// Vertical bar | is used for alternation (or operator).
let exp9 = /b|o|u|i|er/g;
console.log("bt botter bought some butter but, she said, this butter's bitter".match(exp9));

// Meta character ()
// Parentheses () is used to group sub-patterns.
let exp10 = /b(o|i|u)/g;
console.log("bt botter bought some butter but, she said, this butter's bitter".match(exp10));

// Meta character \
// Backslash \ is used to escape various characters including all metacharacters.
let exp11 = /\*|@|!/g;
console.log("let@123*!".match(exp11));

