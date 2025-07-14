//!Creating an async Function:
// async function getData() {
//     setTimeout(function(){
//         console.log("Hello I am in the SetTimeOut Function");
//     }, 3000);
// }
// getData();
//* Async Function always return the promise:
// let output = getData();


//!Await--?
//!Before understanding await we should understand Fetch API:

// async function getData (){
// ====================
//get reques -> Aysnc:
// let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//* change endpoint:
// let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
// let response = await fetch('https://jsonplaceholder.typicode.com/posts');
// ===============
//* Simple Understanding of Fetching:
// let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
// let data = await response.json();
// console.log(data);
// =================
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }
// getData();

//? What is the scenario:
// 1-Prepare URL --> API Endpoint --> Sync
// 2-Await --> fetch data -> network call --> Async
// 3-Process Data --> Sync

//! POST Request:
const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: "Rehman Ahmed" }),
};
async function getData() {
    const response = await fetch(url);
    let data = await response.json();
    console.log("My Get Data Request: ", data);
}
async function postData() {
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("My Post Data Request: ", data);
}
async function processData() {
    await postData();
    await getData();
}
processData();

//!Adding a new Post:
// fetch('https://dummyjson.com/posts/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'I am in love with someone.',
//         userId: 5,
//         /* other post data */
//     })
// })
//     .then(res => res.json())
//     .then(console.log);
//! Update a Post

//* /* updating title of post with id 1 */
// fetch('https://dummyjson.com/posts/1', {
//     method: 'PUT', /* or PATCH */
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'I think I should shift to the moon',
//     })
// })
//     .then(res => res.json())
//     .then(console.log);

//!Delete a Post:
// fetch('https://dummyjson.com/posts/1', {
//     method: 'DELETE',
//   })
//   .then(res => res.json())
//   .then(console.log);

//!Get all posts by user id
/* getting posts by user with id 5 */
// fetch('https://dummyjson.com/posts/user/5')
// .then(res => res.json())
// .then(console.log);
