/* ~~~~~ About JSON ~~~~~ */
// JSON stands for Javascript Object Notation
// JSON is light weight, language indepdendent, text format for data storage.

// JSON Object String
let jsonObj = '{"name" : "John", "age": 45, "city": "San Francisco", "isSeniorCitizen": false, "addr": null}';

// Converting a JSON string to JS Object
let obj = JSON.parse(jsonObj);
console.log(obj);

// Converting a JS object into a JSON Object string
obj.addr = "17 street, Providence Court";
console.log(JSON.stringify(obj));


// JSON Array String
let jsonArr = '["BMW", "Mercedes", "Fiat", "Chevrolet"]';

// Converting a JSON Array to JS Array
let arr = JSON.parse(jsonArr);
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);

// Converting a JS Array to JSON array string 
arr[5] = "Bentley";
arr[6] = "Audi";
console.log(JSON.stringify(arr));
