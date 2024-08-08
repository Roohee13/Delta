//--------------QUESTION 1----------------
let num=[1,2,3,4];
let res= (arr)=>{
   let sqArr= arr.map((el)=>(el*el));
   console.log("squared array :",sqArr);
   let totalSum= sqArr.reduce((sum,el)=>(sum+el));
   console.log("summed value :",totalSum);
   return totalSum/arr.length;
}

console.log(res(num));

//--------QUESTION 2-----
let numPlusFive= num.map((el)=>el+5);
console.log('original array:',num);
console.log('array with 5 added to each element',numPlusFive);

//-------------QUESTION 3----------------
let uppercaseNum= (arr)=>{
    let ans= arr.map((el)=>(el.toUpperCase()));
    return ans;
};

console.log(uppercaseNum(['adan','sdds','sdaa','awdf']));

//---------------QUESTION 4-----------------
let doubleAndReturnAns = (arr,...args)=>{
    let double= args.map((el)=>el*el);
    let ans=[...arr,...double];
    return ans;
}

console.log(doubleAndReturnAns([1,2,3,4],1,2,3,4));

//-----------------------QUESTION 5---------------------
let obj1={
   name: 'roohee',
   class:12,
   age:24
};

let obj2={
    school:'aps',
    college:'pwc'
};

let mergeObjects= (obj1,obj2)=>{
   let fobj={...obj1,...obj2};
   return fobj;
};
console.log(mergeObjects(obj1,obj2));