//Assignment question 1

let arr=[2,4,5,7,8];
let arrayAverage = (arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
       sum += arr[i];
    }
    let avg= sum/arr.length;
    return avg;
}

console.log(arrayAverage(arr));
console.log(arrayAverage([5,5,5,5,5]));

//Assignmnet question 2
/*const isEven= n =>{
    if(n%2==0){
        return "even";
    }else{
        return "Not even";
    }
}*/

const isEven= n =>(n%2==0);

console.log(isEven(7));//false
console.log(isEven(77688));//true

let a=4;
function callback(){
    console.log(this.a);
}
const object={
  a:5,
  method(callback){
    callback();
  }

  
};

object.method(callback,1,2);




