// This keyword

const Student={
  name: 'Roohee Singh',
  age:24,
  eng:56,
  math:45,
  phy:45,
  getAvg(){
    console.log(this);
    let avg=(this.phy+this.eng+this.math)/3;
    console.log(avg);
  }
}

Student.getAvg();

//try and catch
console.log("Hello");
console.log("Hello");
try{
    console.log(a);
}catch(err){
    console.log("caught an error ... a is not defined.");
    console.log(err);
}
console.log("Hello");
console.log("Hello");
console.log("Hello");

//Arrow Function
const sum = (a,b)=>{
    console.log(a+b);
}

sum(2,5);

const cube= (n)=>{
    return n*n*n;
}
console.log(cube(3));

const power=(a,b) =>{
    return a**b;
};

console.log(power(2,4));

//IMplicit return
const mul=(a,b) =>(a*b);
console.log(mul(2,3));

//set Timeout function
console.log("hi there!");
setTimeout(() => {
    console.log("Apna College");
},3000);
console.log("Welcome to");


//setinterval

let id= setInterval(() => {
    console.log("Apna College");
},2000);
console.log(id);
let id2= setInterval(() => {
    console.log("welcome College");
},2000);
console.log(id2);

clearInterval(id);
clearInterval(id2);

//this keyword along with arrow function

const Students={
    name: 'Roohee Singh',
    age:24,
    eng:56,
    math:45,
    phy:45,
    prop:this,//global scope.. will print the windows object
    getAvg: function(){
      console.log(this);//calling function scope... will print the student object
      let avg=(this.phy+this.eng+this.math)/3;
      console.log(avg);
    },
    getName: ()=>{
        console.log(this);//parent object scope.. will show windows object
        return this.name;//undefined
    },

    getInfo1: function(){
        setTimeout(()=>{
            console.log(this);//student object...it happens because 'this' in the timeout function takes the upper functon as it's parent function the calles within its scope... which is the student object.
        },2000);
    } ,
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);// windows object.... it happens because 'this' in the timeout function takes the timeout function as its calling function and thus prints the scope of the timeout function which is windows object.
        },2000);
    } 
  };

  Students.getAvg();
  Students.getName();

  //practice question 1
  const sq = n =>(n*n);

  console .log(sq(100));

  //Practice question 2
  let id3= setInterval(() => {
    console.log("Hello world");
  }, 2000);
 setTimeout(() => {
    clearInterval(id3);
 }, 10000);