const fs = require('fs');
const filename = 'day-05/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n\n');

const sections = [inputList[0].split('\n'), inputList[1].split('\n')];
sections[0].pop(); // remove used line

const stacksLength = (sections[0][0].length + 1) / 4;
const stacks = new Array(stacksLength).fill([]);

sections[0].map((line) => {
  [...line]
    .filter((x, i) => i % 4 === 1)
    .map((value, index) => {
      if (value !== ' ') {
        stacks[index] = [...stacks[index], value];
      }
    });
});

sections[1].map((line) => {
  const arrLine = line.split(' ');
  const count = Number(arrLine.slice(1, 2));
  const fromStack = Number(arrLine.slice(3, 4)) - 1;
  const toStack = Number(arrLine.slice(5, 6)) - 1;

  const items = stacks[fromStack].slice(0, count);
  stacks[fromStack] = stacks[fromStack].slice(count);
  stacks[toStack].unshift(...items);
});

const ans = stacks.map((stack) => stack[0]).join('');

// output answer
console.log(ans);
