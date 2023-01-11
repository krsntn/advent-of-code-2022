const fs = require('fs');
const filename = 'day-04/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

let total = 0;

inputList.map((x) => {
  const [a, b] = x.split(',');
  const [a1, a2] = a.split('-');
  const [b1, b2] = b.split('-');

  if (
    (Number(a1) >= Number(b1) && Number(a2) <= Number(b2)) ||
    (Number(b1) >= Number(a1) && Number(b2) <= Number(a2))
  ) {
    total++;
  }
});

// output answer
console.log(total);
