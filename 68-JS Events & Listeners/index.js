//! Syntax:
// element.addEventListener(event, callbackFunction, options);

// function changeText() {
//     let fPara = document.getElementById('fPara');
//     fPara.textContent = "Love Ahmed"
// }
// let fPara = document.getElementById('fPara');
// fPara.addEventListener('click', changeText);
// fPara.removeEventListener('click',changeText);
//!Important
// function changeText(event) {
//     console.log(event);
//     let fPara = document.getElementById('fPara');
//     fPara.textContent = "Love Ahmed"
// }
// let fPara = document.getElementById('fPara');
// fPara.addEventListener('click', changeText); // event will be listened(goto) the event listener function***
//! Default Behavior:
// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click Done Bro!!"
// });
//! Understanding Target property
// let mydiv = document.getElementById('wrapper');
// document.addEventListener('click', alertPara);
let paras = document.querySelectorAll('p');
// function alertPara(event){
//     alert("You have Clicked on :" + event.target.textContent);
// }
//* if we want to target only span
function alertPara(event){
    if(event.target.nodeName === "SPAN"){
        alert("You have Clicked on :" + event.target.textContent);
    }
}
for (let i = 0; i<paras.length; i++){
    let para = paras[i];
    para.addEventListener('click', alertPara);
}
