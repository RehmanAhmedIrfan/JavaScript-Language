//! Changing CSS using JavaScript: DOM:-
//* Changing styles with the help of ".style" property:
// let paraElem = document.getElementById('spara');
// console.log(paraElem.style);
// paraElem.style.backgroundColor = 'blue';
//* Changing styles with the help of ".cssText" property:
// let secElem = document.getElementById('sdiv');
// secElem.style.cssText; // getting css properties:
// secElem.style.cssText = "background-color: black; color: white; padding: 0.5rem;"
//* Adding Classes and Id's in elements with .setAttribute():
// let secElem = document.querySelector('#sdiv')
// secElem.setAttribute('class', 'myDiv');
// secElem.setAttribute('id', 'myID');
// secElem.setAttribute('style', "padding: 0.5rem");
//* .className();
// let fPara = $0;
// fPara.className;
// fPara.className = "Ahmed Rehman";
//? .classList();
//* .classList.add();
//* .classList.remove();
//* .classList.toggle();
//* .classList.contain();
// let fPara = document.querySelector('#sdiv')
// fPara.classList;
// fPara.classList.add('thirdClass');
// fPara.classList.remove('secondClass');
// fPara.classList.toggle('secondClass');
// fPara.classList.contains('firstClass'); // return true or false