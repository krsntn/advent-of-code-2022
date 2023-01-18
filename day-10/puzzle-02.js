const fs = require('fs');
const filename = 'day-10/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

let cycle = 0;
let x = 0;
let row = '';
const screen = [];

inputList.forEach((line) => {
  if (line === 'noop') {
    draw();
    cycle++;
  } else {
    const unit = Number(line.split(' ')[1]);

    // 1st cycle
    draw();
    cycle++;

    // 2nd cycle
    draw();
    cycle++;

    x += unit;
  }
});

// output answer
console.log(screen);

function draw() {
  const curPos = cycle % 40;
  row += [x, x + 1, x + 2].includes(curPos) ? '#' : '.';

  if (cycle !== 0 && curPos === 39) {
    screen.push(row);
    row = '';
  }
}
