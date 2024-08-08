//---------------getElementByClassName------------------------

console.log("---------------GET ELEMENT BY CLASS NAME-----------------------");
let smallImage =document.getElementsByClassName('oldImg');
for(let i=0;i<smallImage.length;i++){
     console.dir(smallImage[i]);
     console.dir(smallImage[i].src);
     smallImage[i].src ="assets/spiderman_img.png";
     console.log(`the value of image no. ${i} is changed.`)
}

//----------------getElementById----------------
console.log("---------------GET ELEMENT BY  ID-----------------------");
console.dir(document.getElementById('mainImg'))

//----------------getElementByTagName--------------------
console.log("---------------GET ELEMENT BY TAG NAME-----------------------");
console.dir(document.getElementsByTagName('p'));

//---------------query selector---------------
console.log("---------------QUERY SELECTORS-----------------------");
console.dir(document.querySelector('p'));  //selects single value(first occurance)
console.dir(document.querySelector('#mainImg'));
console.dir(document.querySelector('.oldImg'));
console.dir(document.querySelectorAll('p'));  //selects all value(each and every occurance in the form og NodeList)

//------------------------Setting content in object----------------
console.log("---------------INNER TEXT-----------------------");
console.dir(document.querySelector('p').innerText);
console.log("---------------INNER HTML-----------------------");
console.dir(document.querySelector('p').innerHTML);
console.log("---------------TEXT CONTENT-----------------------");
console.dir(document.querySelector('p').textContent);

console.log("---------------MANIPULATING STYLES-----------------------");
document.querySelector('h1').style.color='purple';
console.log('heading color changed from black to purple');
let links=document.querySelectorAll('.box a');
for(link of links){
    link.style.color="magenta";
}
console.log('link color changed from blue to magenta')

console.log("---------------using classlist-----------------------");
let img= document.querySelector('img');
console.dir(img.classList.add("green"));
console.dir(img.classList.add("blue"));
console.dir(img.classList.add("yellow"));
console.dir(img.classList.add("abc"));
console.dir(img.classList.add("pink"));
console.dir(img.classList);
 console.dir(img.classList.remove("green"));
 console.dir(img.classList);
 console.dir(img.classList.contains("blue"));
 console.dir(img.classList.contains("ass"));
 console.dir(img.classList);
 console.dir(img.classList.toggle("ass"));
 console.dir(img.classList);
 console.dir(img.classList.toggle("abc"));
 console.dir(img.classList);

console.log("---------------ADDING ELEMENTS ON PAGE--------------------");
let newP= document.createElement('p');
console.dir(newP);
newP.innerText="Hi, i am a new paragraph.";
console.dir(newP);
let body= document.querySelector('body');
body.appendChild(newP);
let box=document.querySelector('.box');
box.appendChild(newP);
let btn= document.createElement('button');
btn.innerText='click me';
box.appendChild(btn);

newP.append("This is the new Text.");
newP.append(btn);
newP.append("do not click this button.")

box.prepend(newP);

let p=document.querySelector('p');
let newBtn= document.createElement('button');
newBtn.innerText="NEW BUTTON !!!";

p.insertAdjacentElement('afterend',newBtn);

console.log("----------------REMOVING ELEMENTS FROM OUR HTML PAGE----------------------");
btn.remove();







