//Print the Fibonacci sequence up to 10 terms.

let b = 1,
  a = 0,
  fib = [], next;
for (i = 0; i < 10; i++) {
  fib.push(a);
  next = a + b;
  a = b;
  b = next;
}

console.log(fib.join(" ,"));

