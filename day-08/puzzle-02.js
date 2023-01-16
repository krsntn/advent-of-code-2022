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

let set = new Set();
for (let x = 0; x < rows.length; x++) {
  for (let y = 0; y < rows[x].length; y++) {
    const element = rows[x][y];
    const right = rows[x].slice(y + 1);
    const left = rows[x].substring(0, y);
    const down = columns[y].substring(x + 1);
    const up = columns[y].substring(0, x);

    if (!right.length || !left.length || !down.length || !up.length) {
      continue;
    }

    let rightView = right?.split('').findIndex((x) => x >= element);
    rightView = rightView === -1 ? right.length : rightView + 1;

    let leftView = left
      ?.split('')
      .reverse()
      .findIndex((x) => x >= element);
    leftView = leftView === -1 ? left.length : leftView + 1;

    let downView = down?.split('').findIndex((x) => x >= element);
    downView = downView === -1 ? down.length : downView + 1;

    let upView = up
      ?.split('')
      .reverse()
      .findIndex((x) => x >= element);
    upView = upView === -1 ? up.length : upView + 1;

    set.add(rightView * leftView * downView * upView);
  }
}

// output answer
console.log([...set].sort((a, b) => a - b).reverse()[0]);
