const fs = require('fs');
const filename = 'day-10/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

let cycle = 0;
let x = 1;

const signalStrengths = [];

inputList.forEach((line) => {
  if (line === 'noop') {
    markdown(cycle, x);
    cycle++;
  } else {
    const unit = Number(line.split(' ')[1]);
    for (let i = 0; i < 2; i++) {
      markdown(cycle, x);
      cycle++;
    }
    x += unit;
  }
});

const ans = signalStrengths.reduce((acc, cur) => acc + cur);

// output answer
console.log(ans);

function markdown(cycle, x) {
  if (cycle === 20 || (cycle - 20) % 40 === 0) {
    signalStrengths.push(cycle * x);
  }
}
