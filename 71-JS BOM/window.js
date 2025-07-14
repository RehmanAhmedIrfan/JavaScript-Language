//! Type All these commands in browser console 

window.document.getElementById("header");
document.getElementById("header");
let w = window.innerWidth;
let h = window.innerHeight;
window.open();
window.close();
window.moveTo();
window.resizeTo();
screen.width;
screen.height;
screen.availWidth;
screen.availHeight;
screen.colorDepth;
screen.pixelDepth;
window.location.href;
window.location.hostname;
window.location.pathname;
window.location.protocol;
window.location.assign("https://www.w3schools.com");
navigator.cookieEnabled;
navigator.appName;
navigator.appCodeName;
navigator.product;
navigator.appVersion;
navigator.userAgent;
navigator.platform;
navigator.language;
navigator.onLine;
navigator.javaEnabled();
window.alert("sometext");
alert("I am an alert box!");
//?Confirm Button:
function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}
//? Prompt Button:
let person = prompt("Please enter your name" , "Harry Potter");
let text;
if(person == null || person == ""){
    text = "User cancelled the prompt!"
}else{
    text = "Hello " + person + "! How are you today?";
}