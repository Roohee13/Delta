let password = prompt("set your password");
let newPass = password.trim();
console.log(newPass);

let mes= "   hello   me   ";
let fmes= mes.toUpperCase().trim();
console.log(fmes);
console.log(fmes.slice(1,5));
console.log(fmes.slice(-5));

let msg="I Love Coding";
console.log(msg.replace("I","we"));
console.log(msg.repeat(3));

let color="green";
if(color=='green'){
    console.log("Go!! light color is green");
}
if(color=='red'){
    console.log("stop!! light color is red");
}
if(color=='yellow'){
    console.log("Slow Down!! light color is yellow");
}

let size=prompt("Enter the size of popcorn.");
if(size=='XL'){
    console.log('price is 250 rupees');
}else if(size=='L'){
    console.log('price is 200 rupees');
}else if(size=='M'){
    console.log('price is 100 rupees');
}else if(size=='S'){
    console.log('price is 50 rupees');
}else{
    alert("wrong Size!!!!");
}

let str= 'abcde';
if((str[0]=='a')&&(str.length>3)){
    console.log('Good String');
}else{
    console.log('bad string');
}

let day=3;
switch (day){
    case 1:
        console.log("monday");
        break;
    case 2:
            console.log("tuesday");
            break;
    case 3:
            console.log("wednesday");
            break;
}

for(let i=5;i<=50;i=i+5){
   console.log(i);
}
