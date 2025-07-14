//! Creating an Object from a JSON String
// const txt = '{"name":"John", "age":30, "city":"New York"}'
// const obj = JSON.parse(txt);
// console.log(obj);
//! Create a JSON string from a JavaScript object.
// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj);
// console.log(myJSON);
//! Property Getters and Setters
//* This example creates a getter for a property called fullName:
// Create an object:
// var person = {
//     firstName: "Rehman",
//     lastName: "Ahmed",
//     get fullName(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName);
//* This example creates a setter and a getter for the language property:
// var person = {
//     firstName: "Rehman",
//     lastName: "Ahmed",
//     language: "NO",
//     get lang (){
//         return this.language;
//     },
//     set lang (value){
//         return this.language = value.toUpperCase();
//     }
// };
// person.lang = "en";
// console.log(person.lang);
//! Object.defineProperty() is a new Object method in ES5.
// Create an Object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
};
//Change a Property;
Object.defineProperty(person, "language", {
    value: "EN",
    writable: true,
    enumerable: true,
    // enumerable: false, // if it is false then enumeration is not allowed
    configurable: true,
});
// Enumerate Properties
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}
// Display Properties
console.log(txt);
