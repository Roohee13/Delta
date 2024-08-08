let para1=document.createElement("p");
para1.innerText="Hey I'm red!!";

let body = document.querySelector('body');
body.append(para1);
para1.classList.add('red');

let heading3=document.createElement("h3");
heading3.innerText="Hey I'm blue h3!!";


body.append(heading3);
heading3.classList.add('blue');

let div=document.createElement("div");
body.append(div);
div.classList.add('div1');

let heading1=document.createElement("h1");
heading1.innerText="I'm in a div.";
div.append(heading1);

let para2=document.createElement("p");
para2.innerText="ME TOO.";
div.append(para2);
