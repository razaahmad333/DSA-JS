let adjacencyMatrix = Array(13);
for (let i = 0; i < 13; i++) {
  adjacencyMatrix[i] = Array(13).fill(0);
}
function connectTheNode(node1, node2) {
  adjacencyMatrix[node1][node2] = 1;
}

connectTheNode(0, 7);
connectTheNode(0, 11);
connectTheNode(0, 9);
connectTheNode(9, 10);
connectTheNode(9, 8);
connectTheNode(10, 1);
connectTheNode(8, 1);
connectTheNode(8, 12);
connectTheNode(12, 2);

connectTheNode(7, 6);
connectTheNode(7, 11);
connectTheNode(7, 3);
connectTheNode(6, 5);

connectTheNode(3, 4);
connectTheNode(3, 2);

let visited = new Array(13).fill(false);
let prev = new Array(13).fill(undefined);
function bfs(node) {
  let toVisit = [];
  let start = node;
  let currentNode = start;
  visited[currentNode] = true;
  toVisit.push(node);
  let cnt = 0;
  while (toVisit.length !== 0 && cnt < 200) {
    for (let i = 0; i < adjacencyMatrix[currentNode].length; i++) {
      if (adjacencyMatrix[currentNode][i] !== 0 && !visited[i]) {
        toVisit.push(i);
        prev[i] = currentNode;
        visited[i] = true;
      }
    }
    cnt++;
    currentNode = toVisit.shift(currentNode);
  }
}

function calcPath(prev) {
  let start = 0;
  let end = 2;
  let currentNode = end;
  let cnt = 0;
  while (cnt < 20) {
    console.log(currentNode);
    if (currentNode === start) {
      break;
    }
    currentNode = prev[currentNode];

    cnt++;
  }
}

bfs(0);
calcPath(prev);
// console.log(visited);
console.log(prev);
