const fs = require('fs');
const filename = 'day-02/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

const map = {
  A: 1,
  B: 2,
  C: 3,
  X: 0,
  Y: 3,
  Z: 6,
};

function calcShape(opp, result) {
  if (result === 3) {
    return opp;
  }

  let output = result === 6 ? opp + 1 : opp - 1;
  if (output < 1) output = 3;
  if (output > 3) output = 1;
  return output;
}

let totalScore = 0;
inputList.map((value) => {
  const [opp, result] = value.split(' ');
  const resultScore = map[result];
  const oppScore = map[opp];
  const meScore = calcShape(oppScore, resultScore);

  totalScore += meScore + resultScore;
});

// output answer
console.log(totalScore);
