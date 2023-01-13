const fs = require('fs');
const filename = 'day-06/input.txt';
const input = fs.readFileSync(filename, 'utf8');

let ans = '';

const inputArr = input.split('');
for (let i = 13; i < inputArr.length; i++) {
  const set = new Set();
  for (let j = i; j >= i - 13; j--) {
    set.add(inputArr[j]);
  }
  if (set.size === 14) {
    ans = i + 1;
    break;
  }
}
// output answer
console.log(ans);
