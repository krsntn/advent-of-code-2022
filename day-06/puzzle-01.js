const fs = require('fs');
const filename = 'day-06/input.txt';
const input = fs.readFileSync(filename, 'utf8');

let ans = '';

const inputArr = input.split('');
for (let i = 3; i < inputArr.length; i++) {
  const set = new Set([
    inputArr[i - 3],
    inputArr[i - 2],
    inputArr[i - 1],
    inputArr[i],
  ]);
  if (set.size === 4) {
    ans = i + 1;
    break;
  }
}
// output answer
console.log(ans);
