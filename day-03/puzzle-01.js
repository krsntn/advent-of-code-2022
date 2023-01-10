const fs = require('fs');
const filename = 'day-03/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

const items = [];

inputList.map((value) => {
  const midPoint = value.length / 2;
  const com1 = value.substring(0, midPoint).split('');
  const com2 = value.slice(midPoint).split('');
  const set = new Set();

  com1.map((x) => {
    if (com2.some((y) => x === y)) {
      set.add(x);
    }
  });

  items.push(...Array.from(set));
});

// char code
// A: 65
// a: 97
let total = 0;

items.forEach((x) => {
  let charcode = x.charCodeAt(0);
  if (charcode >= 97) {
    charcode = charcode - 96;
  } else {
    charcode = charcode - 38;
  }
  total += charcode;
});

// output answer
console.log(total);
