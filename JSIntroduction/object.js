/* ~~~~~ Useful definitions ~~~~~ */ 
/*  object: An object in javascript is a collection of key-value pairs. 
            It is a non-primitive data type. Which means it is user-defined.

    key:    A key is an identifier given to data to be stored in an object. 
            keys can be of type of string or symbol. Special characters could
            be used while defining keys. Best practice would be to avoid using spaces.
            keys cannot begin with a number. Keys cannot be a method or object either.
            **when a string key or a symbol key is used, it is accepted and 
            converted into a valid identifier.
            For eg:
            const obj = {'name': 'Arun', age: 90}
            console.log(obj); --> {name: 'Arun', age: 90}
             
            let addr = Symbol('ADDR');
            obj.addr = "gandhi nagar";
            console.log(obj); ---> {name: 'Arun', age: 90, addr: 'gandhi nagar'}

    value:  A value is the data associated with a key while defining an object. 
            Value can be of primitive type, a method or a function. 

    property: A key-value pair is called a property in javascript. So it is 
            to hear the term 'object properties'referring to basically, the key-value
            pairs defined in that object.

    method: A method is an action that can be performed on an object. It is basically,
            a function definition. Method, thus are functions defined as values within an
            object allowing the user to perform actions like getting a value, setting a value,
            etc.

    constructor/constructor function: When an object is defined using function() or a class, the 
           code can be re-used to create several instances from the same definition. Such a function
           is called a constructor/constructor function. Constructors can take initial values and 
           initialize object data properties.

    prototype: When objects are created using constructors, the objects have a prototype associated 
            with it, that holds the constructor function and other pre-defined methods and data properties.
            An object inherits properties from the object prototype. If we try to use a property not defined
            in the object contructor, the browser checks the prototype and returns the value from the prototype
            if its available. Since, every object is based of the Object(), the Object prototype shall also 
            be associated with every object. And thus, there shall be chain of prototypes linked with
            an object. Changes made in the prototype are especially useful when we would like to make 
            changes in all its object instances at once. 
*/

/* ~~~~~ Ways of defining objects ~~~~~ */
// 1. Using an Object Literal - {}
const student1 = {name: "Arun", std: 6, grade: "C", getClass: function(){return this.std + " " + this.grade;}};
console.log(student1);

// 2. Using an instance of Object()
const student2 = new Object({name: "Kiran", std: 8, grade: "A", getClass: function(){return this.std + " " + this.grade;}});
console.log(student2);

// 3. By Creating a function() constructor
function Student3(name, grade){
    this.name = name;
    this.std = 5;
    this.grade = grade;
    this.getClass =  function(){return this.std + " " + this.grade;}
}
const student3 = new Student3("Vicky", "C");
console.log(student3);

// 4. By defining a class
// using constructor() the object can be initialized
// for fixed values the key value pairs can be defined outside the constructor 
class Student4 {
    constructor(name, std, grade){
        this.name = name;
        this.std = std;
        this.grade = grade;
    }
    getClass =  function(){return this.std + " " + this.grade;}
}
const student4 = new Student4("Karan", 5, "A");
console.log(student4);

/* ~~~~~ Accessing object properties ~~~~~ */
// Using DOT property accessor
console.log(student1.name + " belongs to std " + student1.std + " grade "+ student1.grade);

// Using ['']
console.log(student2['name'] + " belongs to std " + student2['std'] + " grade "+ student2['grade']);

// Modifying values
console.log(student3.name + " is leaving the school.");
student3.name = "Kunal";
console.log(student3.name + " shall be joining in his place");

/* ~~~~~ Adding/Modifying/Deleting keys ~~~~~ */
//  Adding keys
student1.age = 11;
student2['age'] = 10;
student3.age = 13;
Object.assign(student4, {age:10});

// Object.definePorperty() can also be used to add another property to the object
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log("The age of " + student1.name + " is " + student1.age);
console.log("The age of " + student2.name + " is " + student2.age);
console.log("The age of " + student3.name + " is " + student3.age);
console.log("The age of " + student4.name + " is " + student4.age);

//  Deleting keys
delete student1.age;
console.log("The age of " + student1.name + " is " + student1.age);
delete student2['age'];
console.log("The age of " + student2.name + " is " + student2.age);

//  Renaming keys
//  1. First copy the values you wish to delete in new keys
student1.firstname = student1.name;
student2['firstname'] = student2.name;
Object.assign(student3, {firstname: student3.name});
student4.firstname = student4.name;
console.log("The first name of student 1 is "+ student1.firstname);
console.log("The first name of student 2 is "+ student2.firstname);
console.log("The first name of student 3 is "+ student3.firstname);
console.log("The first name of student 4 is "+ student4.firstname);

// 2. Then delete the old keys
delete student1.name;
delete student2['name'];
delete student3.name;
delete student4['name'];

// Copying values from one key to another
student1.subjects = ["Languages", "Maths", "Science", "Social Studies"];
student2.subjects = student1.subjects;
Object.assign(student3, {subjects: student1.subjects});
student4['subjects'] = student2.subjects;

console.log(student1.subjects);
console.log(student2.subjects);
console.log(student3.subjects);
console.log(student4.subjects);

/* ~~~~~ using methods ~~~~~ */
console.log(student1.firstname + " goes to "+ student1.getClass());
console.log(student2.firstname + " goes to "+ student2.getClass());
console.log(student3.firstname + " goes to "+ student3.getClass());
console.log(student4.firstname + " goes to "+ student4.getClass());

/* ~~~~~ adding properties to constructors using prototype ~~~~~ */
Student4.prototype.getSubjects = function(){return this.subjects.toString();}
console.log(student4.getSubjects()); 
Student4.prototype.lastname = "Mehta";
console.log("The full name of student 4 is " + student4.firstname + " " + student4.lastname);
console.log(student4);
console.log(Student4.prototype);