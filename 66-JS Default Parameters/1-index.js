//!Function with one default parameter
// const myName = (fullName = "Rehman") => {
//     console.log("My name is: ", fullName);
// }
// myName("Love Rehman Ahmed");
//!Function with one default parameter
// function myName (fName, lName = "Ahmed"){
//     console.log("My name is: ", fName, " ", lName);
// }
// myName("Love", "Rehman");
//!passing object as a default parameter
// function myFunction (value = {age:80, wt:180,}){
//     console.log("Hello G! ", value);
// }
// myFunction();
// myFunction("Say Love Ahmed");
//!passing object as a default parameter
// function myFunctionArr (value = [80,180]){
//     console.log("Hello G! ", value);
// }
// myFunctionArr();
// myFunctionArr("Say Love Ahmed");
//? In case when we pass null: the answer printed will be null
//? In case when we pass undefined: the answer printed will be default parameter value
//! Passing function as a default parameter
// function getAge(){
//     return 90;
// }
// function utility(myName = "Love", age = getAge()){
//     console.log(myName," ",age );
// }
// utility();