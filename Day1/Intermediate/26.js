//Check whether a number is a prime number.

let a;

a=9;

if(a>1 && a%2 !== 0 && a% Math.sqrt(a) !==0){
    console.log(a + " is prime ");
    
}else{console.log(a + " is not prime ");}