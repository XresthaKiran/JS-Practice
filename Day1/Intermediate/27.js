// for (i = 0; i < 5; i++) {
//     let row= "";
//   for (j = 0; j <= i; j++) {
//     row+="*";
//   }
//   console.log(row)

// }

let num = 3;
for (i = 0; i < num; i++) {
  let row = "";
  for (j = 0; j < num-i-1; j++ ) {
    row += " ";
  }
  for (k = 0; k < (i * 2 + 1); k++) {
    row += "*";
  }
  console.log(row);
}
