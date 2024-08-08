//-----------------FOR EACH METHOD----------------

let arr=[1,2,3,4,5];

let print = function(el){
    console.log(el);
}

arr.forEach(print);

arr.forEach(function(el){
   console.log(el);
});

arr.forEach((el)=>{
    console.log(el);
 });

const Student=[{
    name:'aman',
    marks:95,
},{
    name:'shradha',
    marks:94.5,
},{
    name:'roohee',
    marks:100,
}];

Student.forEach(Student =>{
    console.log(Student.marks);
});

//-----------------MAP METHOD-------------------

let num=[1,2,3,4];
let double= num.map(el =>{
    return el*el;
});
console.log(double);

let gpa = Student.map(el =>{
    return el.marks/10;
});
console.log(gpa);

//---------------FILTER METHOD--------------------
let num1=[2,4,6,7,3,54,1];
let newArr= num1.filter(el => (el%2==0));
console.log(newArr);

//--------------EVERY METHOD (Similar to logical AND Operator)----------------------
let ele= num1.every(el =>(el>0));
console.log(ele);

//------------SOME METHOD (Similar to logical OR operator)----------------------
let ele1= num1.some(el =>(el>0));
console.log(ele1);

//-------------REDUCE METHOD-----------------------
let fValue = num1.reduce((res,el) => ( res+el));
console.log(fValue);

//----------FINDING MAXIMUM OF NA ARRAY USING REDUCE------------------
let mValue= num1.reduce((max,el) => {
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(mValue);

//-----------PRACTICE QUESTION 1-----------------------------
//Q1.check if all numbers in our array are multiple of 10 or not?
let num2 = [10,50,70,30];
let ans= num2.every((el) => el%10==0);
console.log(ans);

//Q2. create a function to find minimum number in an array?
function minValue(num){
    let min = num.reduce((min,el)=>{
        if(el<min){
            return el;
        }else{
            return min;
        }
    });
    return min;
}

console.log(minValue(num2));
console.log(minValue([2,4,6,8,-435]));

//------------------DEFAULT PARAMETERS----------------
let fSum= (a,b=3) =>a+b;
console.log(fSum(2));

//-----------------SPREAD METHOD-------------------
console.log(Math.min(...num2));
console.log(..."apnacollege");

//--------------SPREAD METHOD WITH ARRAY LITERALS----------------
let even =[2,4,6,8,10];
let odd= [1,3,5,7,9];
let num3=[...even,...odd];
console.log(num3);

//---------------SPREAD METHOD WITH OBJECT LITERALS-----------------
const data={
   email:'rooheesongh@gmail.com',
   password: "abc"
};

let dataCopy={
    ...data,
    id:123, 
    country: 'India'
};

console.log(data);
console.log(dataCopy);

let arr1=[1,2,3,4,5];
let obj1={...arr1};
let obj2={..."hello"};
console.log(obj1);
console.log(obj2);


//----------------REST(opposite of spread)-------------------
let func= (...args)=>{
   return  args.reduce((min,el)=>{
    if(el<min){
        return el;
    }else{
        return min;
    }
   });
}

console.log(func(1,2,3,4,5,-2));
console.log(func(arr1));

//------------------DESTRUCTURING---------------
let names= ['tony','mony','rohan','sohan','rya','peter','ojhn','oksy'];
let [winner,runnerup,secWinnerup,...others]=names;   //rest concept is used here
console.log(winner, others);


//--------DESTRUCTING OBJECTS----------------

let dataCopy1={
    ...data,
    id:123, 
    country: 'India',
    pssword:"123",
    username:'abc'
};

let{username: user, pssword :secret}=dataCopy1;
console.log(user,secret);


