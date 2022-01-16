let visited = new Array(18).fill(false);
let label = new Array(18).fill(undefined);

let adjacencyMatrix = Array(18);
for (let i = 0; i < 18; i++) {
  adjacencyMatrix[i] = Array(18).fill(0);
}
function connectTheNode(node1, node2) {
  adjacencyMatrix[node1][node2] = 1;
  adjacencyMatrix[node2][node1] = 1;
}
connectTheNode(0, 8);
connectTheNode(0, 4);
connectTheNode(0, 14);
connectTheNode(0, 13);

connectTheNode(4, 8);
connectTheNode(13, 14);
connectTheNode(8, 14);

connectTheNode(1, 5);
connectTheNode(16, 5);
connectTheNode(17, 5);

connectTheNode(6, 7);
connectTheNode(11, 7);
connectTheNode(11, 6);

connectTheNode(3, 9);
connectTheNode(2, 9);
connectTheNode(15, 9);
connectTheNode(15, 2);
connectTheNode(15, 10);

console.log(visited);

function dfsAndLabelWith(node, labelWith) {
  if (visited[node]) return;
  visited[node] = true;
  label[node] = labelWith;

  for (let i = 0; i < adjacencyMatrix[node].length; i++) {
    let nodevalue = adjacencyMatrix[node][i];
    if (nodevalue !== 0) {
      dfsAndLabelWith(i, labelWith);
      label[i] = labelWith;
    }
  }
}

let cnt = 0;
let labelss = [" anji", "panji", "dhol", "kaabootar", "taawa", "booom"];

for (let j = 0; j < visited.length; j++) {
  if (!visited[j]) {
    dfsAndLabelWith(j, labelss[cnt]);
    cnt++;
  }
}

console.log(visited);
console.log(label);
