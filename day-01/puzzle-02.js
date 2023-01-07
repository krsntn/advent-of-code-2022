const fs = require('fs');
const filename = 'day-01/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

let sumArr = [];
let sum = 0;

inputList.map((value) => {
  if (value === '') {
    sumArr.push(sum);
    sum = 0;
  } else {
    sum += Number(value);
  }
});

sumArr = sumArr
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, cur) => acc + cur);

// output answer
console.log(sumArr);
