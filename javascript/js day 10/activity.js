
//Activity
let btn= document.querySelector('button');
btn.addEventListener("click",function(){
    let randomColor= getRandomColor();
    let h3=document.querySelector('h3');
    h3.innerText=randomColor;

    let div= document.querySelector('div');
    div.style.backgroundColor=randomColor;
    console.log('color updated');
});

function getRandomColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
// event listeners for elements
let p= document.querySelector('p');
p.addEventListener("click",function(){
    console.log("paragraph was clicked");
});

let box= document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log('mouse inside box');
});
//this in event listeners

function changeColor(){
    console.log(this);
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}

btn.addEventListener("click",changeColor);
box.addEventListener("click",changeColor);
//keyboard events
let inputs= document.querySelector("input");
console.dir(inputs);
inputs.addEventListener("keydown",function (event) {
   
    console.log("code =",event.code);
    if(event.code=="ArrowUp"){
        console.log("character moes forward.")
    }else if(event.code=="ArrowDown"){
        console.log("character moes backwards.")
    } else if(event.code=="ArrowLeft"){
        console.log("character moes left.")
    }else{
        console.log("character moes right.")
    }
});
