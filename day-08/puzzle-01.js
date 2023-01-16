const fs = require('fs');
const filename = 'day-08/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

const rows = inputList;
const columns = [];

for (let j = 0; j < rows[0].length; j++) {
  let column = '';
  for (let i = 0; i < rows.length; i++) {
    column += rows[i][j];
  }
  columns.push(column);
}

let visibleCount = 0;
for (let x = 0; x < rows.length; x++) {
  for (let y = 0; y < rows[x].length; y++) {
    const element = rows[x][y];
    const right = rows[x].slice(y + 1);
    const left = rows[x].substring(0, y);
    const down = columns[y].substring(x + 1);
    const up = columns[y].substring(0, x);

    if (
      right?.split('').every((x) => Number(x) < element) ||
      left?.split('').every((x) => Number(x) < element) ||
      down?.split('').every((x) => Number(x) < element) ||
      up?.split('').every((x) => Number(x) < element)
    ) {
      visibleCount++;
    }
  }
}

// output answer
console.log(visibleCount);
