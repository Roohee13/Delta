let num=23;
if(num%10==0){
    console.log("good");
}else{
    console.log("bad");
}

let name="Roohee";
let age=23;
console.log(`${name} is ${age} years old.`);

let quater=2;
switch (quater) {
    case 1:
        console.log("Jan , Feb ,March");
        break;
    case 2:
        console.log("April , May ,June");
        break;
    case 3:
        console.log("July , Aug ,Sept");
        break;
    case 4:
        console.log("Oct , Nov ,Dec");
        break;
    

    default:
        console.log("Wrong Entry");
        break;
}

let str="Apley";
if(((str[0]==='a')||(str[0]==='A'))&&(str.length>5)){
    console.log("Golden String");
}else{
    console.log("Not A Golden String");
}

let num1=2;
let num2=5;
let num3=7;
if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is largest`);
    }else{
        console.log(`${num3} is largest`);
    }
}else {
    if(num2>num3){
    console.log(`${num2} is largest`);
    }else{
    console.log(`${num3} is largest`);
    }
}

let number1=36325;
let number2=28735;
if(number1%10 == number2%10){
    console.log(`${number1} and ${number2} has same last digit ${number1%10}`);
}else{
    console.log("Do naot hae same last digit");
}