//Question 1
const solution = number => {
    // Your solution
    
    let sum=0;
    for(let i=3;i<number;i++){
       if((i%3==0)|| (i%5==0)){
        sum+=i;
       }
    }
    return sum;
  };
  
  console.log(solution(0)); // 0
  console.log(solution(-15)); // 0
  console.log(solution(10)); // 23
  console.log(solution(20)); // 78
  console.log(solution(200)); // 9168


  //***************************** QUESTION 2********************************** */
  const even_or_odd = number => {
    // Your solution
    if(number%2===0){
        return "even";
    }
    else{
        return 'Odd';
    }
  };
  
  console.log(even_or_odd(0)); // 'Even'
  console.log(even_or_odd(2)); // 'Even'
  console.log(even_or_odd(3)); // 'Odd'
  console.log(even_or_odd(-3)); // 'Odd'


  //question 3
  const past = (h, m, s) => {
    // Your solution
    return ((h*60*60)+(m*60)+s)*1000;
  };
  
  console.log(past(0, 0, 0)); // 0
  console.log(past(0, 1, 1)); // 61000
  console.log(past(1, 0, 0)); // 3600000
  console.log(past(1, 0, 1)); // 3601000
  console.log(past(1, 1, 1)); // 3661000

  //question 4
  const greet = name => {
    //Your solution
    return `Hello, ${name} how are you doing today?`;
  };
  
  console.log(greet('Ryan')); // "Hello, Ryan how are you doing today?"
  console.log(greet('Sara')); // "Hello, Sara how are you doing today?"

  //question 5
  const century = year => {
    // Your solution
    return Math.ceil(year/100);
  };
  
  console.log(century(1705)); // 18
  console.log(century(1900)); // 19
  console.log(century(1601)); // 17
  console.log(century(2000)); // 20
  console.log(century(89)); // 1

  //question 6
  const litres = time => {
    // Your solution
    return Math.floor(time*0.5);
  };
  
  console.log(litres(0)); // 0
  console.log(litres(2)); // 1
  console.log(litres(1.4)); // 0
  console.log(litres(12.3)); // 6
  console.log(litres(0.82)); // 0
  console.log(litres(11.8)); // 5
  console.log(litres(1787)); // 893


  //question 7
  const isDivisible = (n, x, y) => {
    // Your solution
    return n%x==0 && n%y==0? true : false;
  };
  
  console.log(isDivisible(3, 3, 4)); // false
  console.log(isDivisible(12, 3, 4)); // true
  console.log(isDivisible(8, 3, 4)); // false
  console.log(isDivisible(48, 3, 4)); // true

  //question 8
  const getCount = str => {
    // Your solution
    let count=0;
    for(i=0;i<str.length;i++){
        if(str[i] === 'a' || str[i] === 'e'|| str[i] === 'i'|| str[i] === 'o'|| str[i] === 'u'){
            count++;
        }

    }
    return count;
  };
  
  console.log(getCount('my pyx')); // 0
  console.log(getCount('pear tree')); // 4
  console.log(getCount('abracadabra')); // 5
  console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13

  //question 9

  const disemvowel = str => {
    // Your solution
    let newStr='';
    
    for(i=0;i<str.length;i++){
        let char= str[i].toLowerCase();
        if(char !== 'a' && char !== 'e'&& char !== 'i'&& char !== 'o'&& char !== 'u'){
            newStr+= str[i];
        }

    }
    return newStr;

  };
  
  console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'