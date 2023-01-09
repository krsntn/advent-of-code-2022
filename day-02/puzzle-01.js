const fs = require('fs');
const filename = 'day-02/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

const map = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

function calcOutcome(opp, me) {
  if (opp === me) {
    // draw
    return 3;
  } else if (me === opp + 1 || me === opp - 2) {
    // win
    return 6;
  }

  return 0;
}

let totalScore = 0;
inputList.map((value) => {
  const [opp, me] = value.split(' ');
  const oppScore = map[opp];
  const meScore = map[me];

  const score = calcOutcome(oppScore, meScore) + meScore;
  totalScore += score;
});

// output answer
console.log(totalScore);
