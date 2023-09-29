/* ~~~~~ Sets ~~~~~ */
/*   A JavaScript Set is a collection of unique values.
    Each value can only occur once in a Set.
    A Set can hold any value of any data type. */

'use strict'
// Defining/Creating a Set
const letters = new Set(["a", "b", "c"]);
console.log(letters);


// Adding new entries to a Set using add()
letters.add("d");
letters.add("e");
letters.add("f");
letters.add("a");           // Any duplicate entries shall be removed from the set
letters.add("a");
letters.add("c");
console.log(letters);

// Deleting new entries to Set using delete()
letters.delete("f");
letters.delete("e");
console.log(letters);

// getting the size of a set using size property
console.log("The size of set - letters is " + letters.size);

// getting entries of a set
console.log(letters.entries());         // entries() returns [value, value]
console.log(letters.values());          // values() returns all values
console.log(letters.keys());            // keys() returns all values

// check if value exists using has()
console.log("letter \'a\' exists in the set - letters: "+ letters.has("a"));
console.log("letter \'f\' exists in the set - letters: "+ letters.has("f"));

// emptying an entire set using clear()
letters.clear();
console.log(letters);