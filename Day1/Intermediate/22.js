const vowels = ["a", "e", "i", "o", "u"];
let sentence = "aaaaaasadsdasdawerioubabjabsdjjbvh";
let count = 0;

let text = sentence.toLowerCase();

// for ( let i of sentence.toLowerCase()){

// if (vowels.includes(i))
// {count++;}

// }

for (let i in text) {
  if (vowels.includes(text[i])) {
    count++;
  }
}

console.log(count);
