let a, count = 0;

a=123;

while(a > 0){
a = Math.trunc(a /10); // 123/10 = 12
count++;
}

console.log(count);