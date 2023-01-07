const fs = require('fs');
const filename = 'day-01/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

let largest = 0;
let sum = 0;

inputList.map((value) => {
  if (value === '') {
    if (sum > largest) largest = sum;
    sum = 0;
  } else {
    sum += Number(value);
  }
});

// output answer
console.log(largest);
