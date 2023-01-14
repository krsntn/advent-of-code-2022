const fs = require('fs');
const filename = 'day-07/input.txt';
const inputList = fs.readFileSync(filename, 'utf8').split('\n');

let curPath = '';
const tree = {
  isDirectory: true,
  name: '/',
  children: [],
};

inputList.map((line) => {
  if (line.startsWith('$ cd ')) {
    navigation(line);
  } else if (!line.startsWith('$')) {
    const depth = curPath.split('/').slice(1);
    const file = createStructure(line);
    if (depth[0] === '') {
      tree.children.push(file);
    } else {
      let curtree = tree;
      depth.map((dir) => {
        curtree = curtree.children.find((x) => x.name === dir);
      });
      curtree.children.push(file);
    }
  }
});

let sum = 0;
calcSize(tree);

// output answer
console.log(sum);

function navigation(command) {
  const path = command.slice(5);
  switch (path) {
    case '/':
      curPath = path;
      break;
    case '..':
      curPath = curPath.substring(
        0,
        curPath.lastIndexOf('/') === 0 ? 1 : curPath.lastIndexOf('/')
      );
      break;
    default:
      curPath += `${curPath.length === 1 ? '' : '/'}${path}`;
      break;
  }
}

function createStructure(command) {
  const cmd = command.split(' ');
  if (cmd[0] === 'dir') {
    return {
      isDirectory: true,
      name: cmd[1],
      children: [],
    };
  } else {
    return {
      isDirectory: false,
      name: cmd[1],
      size: Number(cmd[0]),
    };
  }
}

function calcSize(node) {
  if (!node.isDirectory) {
    return node.size;
  }

  // dir
  const sizeArr = node.children.map((x) => calcSize(x));
  const directorySize = sizeArr.reduce((acc, cur) => acc + cur, 0);
  check(directorySize);

  return directorySize;
}

function check(size) {
  if (size < 100000) {
    sum += size;
  }
}
