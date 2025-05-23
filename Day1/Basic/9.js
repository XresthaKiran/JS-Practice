let a;

a = 40;

let text = "";

if (a > 0) {
  text = "positive";
} else if ((a = 0)) {
  text = "zero";
} else {
  text = "negative";
}


console.log("The number is" +" "+ text +".");