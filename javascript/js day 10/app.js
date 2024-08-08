let btn= document.querySelectorAll('button');
console.dir(btn);

let sayHello= ()=>{
    alert('hello');
}

let clicked=()=>{
    alert('button was clicked.');
}
for(let i=0;i<btn.length;i++){
    //btn.onclick=sayHello;
    //btn.onmouseenter=clicked; 
    btn[i].addEventListener("click",sayHello);
    btn[i].addEventListener("click",clicked);
}

let colorBtn = document.querySelectorAll('#myId');
console.dir(colorBtn);
colorBtn.addEventListener("click",function(){
    console.log('generate random color');
});


