
const fs = require('fs');
const filename = 'day-09/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

const instructions = inputList.map((x) => x.split(' '));

let positions = new Array(10).fill(0).map(x => [0,0]);

const ans = new Set();

instructions.map(x => {
  let [direction, unit] = x;
  unit = Number(unit);

  for (let i = 0; i < unit; i++) {
    const headPosition = positions[0];

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

    for (let i = 0; i < positions.length; i++) {
      if (i !== 0) {
        const closeX = [positions[i - 1][0] - 1, positions[i - 1][0], positions[i - 1][0] + 1];
        const closeY = [positions[i - 1][1] - 1, positions[i - 1][1], positions[i - 1][1] + 1];

        if ((!closeX.includes(positions[i][0]) && positions[i][1] !== positions[i - 1][1])
          || (!closeY.includes(positions[i][1]) && positions[i][0] !== positions[i - 1][0])) {
          positions[i] = [positions[i - 1][0] > positions[i][0] ? positions[i][0] + 1 : positions[i][0] - 1, positions[i - 1][1] > positions[i][1] ? positions[i][1] + 1 : positions[i][1] - 1];
        } else if (!closeX.includes(positions[i][0])) {
            if (positions[i - 1][0] > positions[i][0]) {
              positions[i] = [positions[i][0]+1, positions[i][1]];
            } else {
              positions[i] = [positions[i][0]-1, positions[i][1]];
            }
        } else if (!closeY.includes(positions[i][1])){
            if (positions[i - 1][1] > positions[i][1]) {
              positions[i] = [positions[i][0], positions[i][1]+1];
            } else {
              positions[i] = [positions[i][0], positions[i][1]-1];
            }

        }

          if (i === positions.length - 1) {
            ans.add(positions[i].join(','))
          }
      }
    }
  }
})

// output answer
// + 1 is the initial position
console.log(ans.size);

