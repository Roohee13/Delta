console.log("hello world javascript");
let a=5;
let b=10;
console.log("sum is : ",(a+b));
let pencilPrice=10;
let erasorPrice=20;
let penPrice=30;
console.log(`the total price is ${pencilPrice + penPrice} rupees`);
let color= 'red';
if(color == 'red'){
    console.log('stop');
}
if(color == 'yellow'){
    console.log("be ready");
}
if(color == 'green'){
    console.log('go');
}

let str='appl';
if((str.length >3) &&(str[0] === 'a')){
    console.log("Good String");
}else{
    console.log("bad string");
}

let fn=prompt("enter your firstname");
let ln =prompt('enter your lastname');
let msg= fn +" "+ln;
alert("msg");