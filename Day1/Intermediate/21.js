let a, rem, num = 0;

a = 123456;

while (a > 0) {
  rem = a % 10;   // 6 / 5 / 4
  a = Math.trunc(a /10); // 12345
  num = num * 10 + rem; //  0 + 6 / 65 / 654 
}


// console.log(num);
console.log( Math.floor(a /10));// 1234)
console.log( Math.trunc(a /10));// 1234)
