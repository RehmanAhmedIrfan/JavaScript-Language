//! Window Commands:
// window
// window.open();
// window.close();
// window.console.log("Hello WOrld!");
// window.print();
//! Document COmmads
// document.getElementById('myHeading');
// document.getElementById('myPara');
// document.getElementsByClassName('text');
// document.getElementsByTagName('p');
// document.querySelector('#my1Para');
// document.querySelector('.text');
// document.querySelector('p');
// document.querySelectorAll("#my1Para");
// document.querySelectorAll(".text");
// document.querySelectorAll("p");
// $0
// let para = $0; para

//! Access & Update Existing Element in DOM:
//* innerHTML (Type the following commands in browser)
// document : hit enter
// let button = $0;
// button.innerHTML;
// button.innerHTML = '<p>Hello Ahmed Click me!</p>';
// button.innerHTML;
// button;
//* outerHTML
// document : hit enter
// let button = $0;
// button.outerHTML;
// button.outerHTML = '<p>Hello Ahmed Click me!</p>';
//* textContent
// renders the text as same as to UI
// document.getElementById("my1Para");
// my1Para.textContent
//* innerText
// Display the whole text inside any tag
// document.getElementById("my1Para");
// my1Para.innerText
//? Creating & Adding Elements using DOM:
// let H2 = document.createElement('h2');
// H2.textContent = "My Name is Rehman Love"
// let doc = document.querySelector('body');
// doc.appendChild(H2);
//! Adding element to a specific adjacent location in document
//? insertAdjacentElement();
//* beforeBegin:
//* afterBegin:
//* beforEnd:
//* afterEnd:
// let mydiv = document.querySelector('#mydiv');
// let newElement = document.createElement('span');
// newElement.textContent = "My Name is Love Rehman Ahmed";
// mydiv.insertAdjacentElement('beforebegin', newElement);
// mydiv.insertAdjacentElement('afterbegin', newElement);
// mydiv.insertAdjacentElement('beforend', newElement);
// mydiv.insertAdjacentElement('afterend', newElement);
//! Deleting Element in DOM:
// let parent = document.querySelector('#mydiv');
// let child = document.querySelector('#fPara');
// parent.removeChild(child);
