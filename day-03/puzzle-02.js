const fs = require('fs');
const filename = 'day-03/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

const items = [];

inputList.map((value, index) => {
  const remaining = index % 3;
  const set = new Set();

  if (remaining === 0) {
    value.split('').map((x) => {
      if (
        inputList[index + 1].split('').some((y) => x === y) &&
        inputList[index + 2].split('').some((y) => x === y)
      ) {
        set.add(x);
      }
    });
  }

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
