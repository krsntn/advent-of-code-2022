const fs = require('fs');
const filename = 'day-09/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

const instructions = inputList.map((x) => x.split(' '));

let headPosition = [0, 0];
let tailPosition = [0, 0];

const ans = new Set();

instructions.map((x) => {
  let [direction, unit] = x;
  unit = Number(unit);

  for (let i = 0; i < unit; i++) {
    const headP = [...headPosition];

    switch (direction) {
      case 'R':
        headPosition[0]++;
        break;
      case 'D':
        headPosition[1]++;
        break;
      case 'L':
        headPosition[0]--;
        break;
      case 'U':
        headPosition[1]--;
        break;
    }

    const closeX = [headPosition[0] - 1, headPosition[0], headPosition[0] + 1];
    const closeY = [headPosition[1] - 1, headPosition[1], headPosition[1] + 1];

    if (
      !closeX.includes(tailPosition[0]) ||
      !closeY.includes(tailPosition[1])
    ) {
      tailPosition = headP;
      ans.add(tailPosition.join(','));
    }
  }
});

// output answer
// + 1 is the initial position
console.log(ans.size + 1);
