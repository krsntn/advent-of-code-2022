const fs = require('fs');
const filename = 'day-11/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

const monkeys = [];
let monkey = {
  id: 0,
  formula: '',
  unit: 0,
  test: 0,
  true: 0,
  false: 0,
};
const monItems = [];
const inspectCounts = [];

inputList.map((line) => {
  if (line.startsWith('Monkey ')) {
    const regex = /\d+/;
    monkey.id = line.match(regex)[0];
    inspectCounts.push(0);
  } else if (line.startsWith('  Starting items: ')) {
    let items = line.slice(17);
    items = items.split(', ');
    monItems.push(items.map((x) => Number(x)));
  } else if (line.startsWith('  Operation: ')) {
    const formula = line[23];
    let unit = line.slice(25);
    monkey.formula = formula;
    monkey.unit = unit;
  } else if (line.startsWith('  Test: ')) {
    const test = line.slice(21);
    monkey.test = Number(test);
  } else if (line.startsWith('    If true: ')) {
    const id = line.slice(29);
    monkey.true = Number(id);
  } else if (line.startsWith('    If false: ')) {
    const id = line.slice(30);
    monkey.false = Number(id);
    monkeys.push(monkey);
    monkey = {};
  }
});

for (let i = 0; i < 20; i++) {
  for (let x = 0; x < monkeys.length; x++) {
    const monkey = monkeys[x];
    const count = monItems[x].length;

    let loop = 0;
    while (loop < count) {
      inspectCounts[x]++;

      const item = monItems[x].shift();
      let worryLevel = calc(item, monkey.formula, monkey.unit);
      worryLevel = Math.floor(worryLevel / 3);
      if (worryLevel % monkey.test === 0) {
        monItems[monkey.true].push(worryLevel);
      } else {
        monItems[monkey.false].push(worryLevel);
      }
      loop++;
    }
  }
}

const ans = inspectCounts
  .sort((a, b) => b - a)
  .slice(0, 2)
  .reduce((acc, cur) => acc * cur);

// output answer
console.log(ans);

function calc(item, formula, unit) {
  switch (formula) {
    case '*':
      return Number(item) * (unit === 'old' ? Number(item) : Number(unit));
    case '+':
      return Number(item) + (unit === 'old' ? Number(item) : Number(unit));
  }
}
