//! Promises in JS
// let newPromis = new Promise( (resolve, reject)=>{
//     console.log("Hello Love Rehman Ahmed");
// });
//* resolve:
// let newPromis = new Promise( (resolve, reject)=>{
//     console.log("Hello Love Rehman Ahmed");
//     resolve(1000);
// });
//* reject:
// let newPromis = new Promise( (resolve, reject)=>{
//     console.log("Hello Love Rehman Ahmed");
//     reject(new Error("Internal Server Error"));
// });
//? Promises used in asynchronous code:
// let promis = new Promise((resolve, reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("My name is Love Ahmed");
//     },3000);
//     resolve(1);
// });
//? Using then and catch in promises:
// let promis1 = new Promise((reject, resolve) => {
//     let success = true;
//     if (success) {
//         resolve("Promise Fullfiled");
//     }
//     else {
//         reject("Promise Rejected");
//     }
// });
// promis1.then((message) => {
//     console.log("Then ka Message is:" + message);
// }).catch((error) => {
//     console.log("Error ka Message is: " + error);
// }).finally((message) => {
//     console.log("Me to final hun me to chalu ga pakka!!");
// });
//Todo: You can add many then's in promises
//? Multiple Promises:
// let promis1 = new Promise((reject, resolve) => {
//     setTimeout(resolve, 1000, "First");
// });
// let promis2 = new Promise((reject, resolve) => {
//     setTimeout(resolve, 2000, "Second");
// });
// let promis3 = new Promise((reject, resolve) => {
//     setTimeout(resolve, 1000, "Third");
//     // setTimeout(reject, 1000, "Third");
// });

// Promise.all([promis1, promis2, promis3]).then((values)=>{
//     console.log(values);
// }).catch((error)=>{
//     console.log(error);
// });
//! All settled ():
Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results));
//! promis.race();
Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result));
//! Promise.any()
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
