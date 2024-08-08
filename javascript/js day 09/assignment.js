//question 1

let input= document.createElement('input');
let btn= document.createElement('button');
btn.innerText="click me!!!";
let body = document.querySelector("body");
body.append(input);
body.append(btn);
let hr= document.createElement('hr');
body.append(hr);


//question 2
input.placeholder="username";
btn.id="btn";
//question 3
let cbtn=document.querySelector("#btn");
cbtn.classList.add("btnStyle");

//question 4
let heading1 = document.createElement('h1');
heading1.innerText="DOM Practice";
heading1.classList.add('h1');
body.append(heading1);
body.append(hr);

//question 5
let p= document.createElement('p');
p.innerHTML="Apna College <b>Delta</b> Practice";
body.append(p);