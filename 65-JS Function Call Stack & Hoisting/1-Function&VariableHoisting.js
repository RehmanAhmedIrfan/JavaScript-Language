//! Variable HOising
// var age = 22; // Print: 22
// console.log(age);
// var age = 22; Print Undefined
// in case of Let and Const it would not work it will give an error: Reference Error

//! Function HOisting : normal Function
// myFullName("Ahmed");
// function myFullName(fullName){
//     console.log(fullName);
// }
//! Function HOisting : Expressional Function
// sayHello();
// let sayHello = function(){
//     console.log("Hello jee Kesy hoo saare!");
// }
//! Function HOisting : Fat Arrow Function
// myFullName("Rehman Ahmed");
// const myFullName = (fullName) => {
//     console.log(fullName);
// }
//!Class Hoisting is also not possible
// const Obj1 = new Human();
// class Human {
// }
//Todo Functions are the first class citizens:-
//? Assigning Funciton to a variable
// let greet = function(){
//     console.log("Greetings for the day");
    
// }
// greet();
//? Passing Function as an argument to another function
// function greetMe (greet, fullName){
//     console.log("Hello", fullName);
//     greet();
// }
// function greet (){
//     console.log("Greetings for the day");
    
// }
// greetMe(greet, "Ahmed");
//? Function Returning Function
// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);
//? Function storing to Data Structure
const arr = [
    function (a,b){
        return a+b;
    },
    function (a,b){
        return a-b;
    },
    function (a,b){
        return a*b;
    },
];
let first = arr[0];
let second = arr[1];
let third = arr[2];
let ans = first(10,5);
console.log(ans);
//? Passing Function to an object
let obj = {
    age: 22,
    wt: 180,
    ht:30,
    greet: ()=>{
        console.log("Hello Duniya");
    }
}
console.log(obj.age);
obj.greet();
