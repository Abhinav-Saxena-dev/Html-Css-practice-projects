 //  1.) String.

// let str = "Hi I am a good boy I I I I.";

// console.log(str.length);

// console.log(str.indexOf("I"), str.lastIndexOf("I"));

// console.log(str.slice(0, 5));

/* console.log(str.replace("good", "bad"));

"case matters" */ //shift  + alt + A is the shortcut for multi line comment.

// 2.)Java script date.

let mydate = new Date();
// console.log(mydate);

// console.log(mydate.getTime()); gives time in seconds. There are all kinds of functions that can be used with object of Date.

// 3.) Dom manipulation (keep a good eye on 'Element' or 'Elements')

// document.getElementById('click').click();
document.getElementById('click').style.border = "2px solid blue"; // element targetted with identifier.

/* let elem = document.getElementById('click');
console.log(elem); */

/* let elemClass = document.getElementsByClassName("contain");
console.log(elemClass); */

// elemClass[0].style.background = "yellow";

/* elemClass[0].classList.add("back");
elemClass[0].classList.add("text");
elemClass[0].classList.remove("text"); */

/* console.log(elemClass[0].innerHTML); // this will give only the HTML inside the taken class as a string.
console.log(elemClass[0].innerText); // this will give only the TEXT inside the taken class as a string. */

/* let tn = document.getElementsByTagName('div');
console.log(tn); */

/* let createdElement = document.createElement('p');
createdElement.innerHTML = "This is a created html element."
tn[1].appendChild(createdElement); */

/* let createdElement2= document.createElement('i');
createdElement2.innerHTML= "This is an itallic text";
tn[1].replaceChild(createdElement2, createdElement); */
// removeChild(element); removes child element
// document.location, title, url, scripts, links, forms, images, domain(only domain, no ports)

// SELECTING USING QUERRY

/* let sel= document.querySelector('.contain');
console.log(sel);

let sel2= document.querySelectorAll('.contain');
console.log(sel2); */ //basically css selectors ka kaam karta hai, styling karne ke liye.

// 3.) EVENTS IN JAVA SCRIPT.

function clicked(){
    console.log("func was clicked");
}

/* window.onload= function() {
    console.log('doc was loaded');
} */

/* document.getElementsByClassName('contain')[1].addEventListener('click', function(){
    console.log("hiii click hua");
}); */

/* document.getElementsByClassName('contain')[1].addEventListener('mouseover', function(){
    console.log("hiii mouse over hua"); 
}); */

// there are also mouseout, mouseup event, mousedown event, explore more events on w3 schools.

// => SETTIMEOUT AND SETTIMEINTERVAL

let Logkaro= () =>{
    document.querySelectorAll('.contain')[0].innerHTML = "YEH DEKHO CHANGE HOGYA";  // querry selector ke saath (.) use hota hai.
    console.log("I AM LOG");
}
// setTimeout(Logkaro, 2000); // "clearTimeout" will stop it from executing.

// setInterval(Logkaro, 2000); // har 2 second baad run hoga. "clearInterval" will stop it.

// 5.) JAVASCRIPT LOCAL STORAGE. LEARN ABOUT IT FROM SOMEWHERE ELSE

// 6.) JSON

/* let obj= {name : "Bhai", value : "Pika"};
let js= JSON.stringify(obj);  // object to string
console.log(js, typeof(js)); */

/* let parsed= JSON.parse(`{"name":"Bhai","value":"Pika", "a":{"Dog":"gahtu", "breed":"jhatu"}}`); // STRING TO OBJECT.
console.log(parsed, typeof(parsed)); */