/* ~~~~~ Maps ~~~~~ */

// Defining/Creating a Map
// Create an empty map and insert key-value pairs later using set()
const map1 = new Map();
// Define map key-value pairs at the time of declaration itself
const map2 = new Map([
                     ["India", {hot: "Rajasthan", chilly: "Shimla", humid: "Mumbai"}],
                     ["USA", {hot: "Arizona", chilly: "Washington", humid: "Florida"}],
                     ["countryCodeIndia", +91],
                     ["countryCodeUSA", +1]
                    ]);

// Inserting new key-value pairs to a map using set()
map1.set("apt", "Serene Meadows");
map1.set("area", "Shivajinagar");
map1.set("landmark", "Near Prakash General Store");
map1.set("city", "Pune");
map1.set("pincode", 422021);

// Accessing key-value pairs from a map using get()
console.log("Radhika stays in "+ map1.get("apt") + " apartment.");
console.log(map2.get("India"));

// Get the size of map
console.log("The size of map1 is " + map1.size);
console.log("The size of map2 is " + map2.size);

// Check if a key-value pair exsists using has();
function checkMap1PairExists(key){
    if (map1.has(key))
        console.log("Value with " + key + " exists");
    else
        console.log("Value with " + key + " does not exist");
}

checkMap1PairExists('pincode');
checkMap1PairExists('city');
checkMap1PairExists('state');

// Printing all the key-value pairs in map2 
console.log(map2.entries());        // printing all entries using entries()
console.log(map2.keys());           // printing ONLY keys using keys()
console.log(map2.values());         // printing ONLY values using values()

// Delete key-value pair using delete()
map2.delete('USA');
map2.delete('countryCodeUSA');
console.log(map2.entries());

// Clearing all key-value pairs in map using clear()
map2.clear();
console.log(map2.entries());        // map becomes empty

