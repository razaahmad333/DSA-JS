/// JUST INTRO TO DEPTH FIRST SEARCH ALGORITHM  ( its actually a traversal algorithm )

let nodeDetails = [
  {
    name: "India",
    capital: "New Delhi",
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
  },
  {
    name: "China",
    capital: "Beijing",
  },
  {
    name: "Japan",
    capital: "Tokyo",
  },
  {
    name: "France ",
    capital: "Paris",
  },
];

let adjacencyMatrix = [
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
];
let visited = Array(adjacencyMatrix.length).fill(false);
function dfs(node) {
  console.log(nodeDetails[node - 1].name);
  if (visited[node - 1]) return;
  visited[node - 1] = true;

  for (let i = 0; i < adjacencyMatrix[node - 1].length; i++) {
    let nodevalue = adjacencyMatrix[node - 1][i];
    if (nodevalue !== 0) {
      dfs(i + 1);
    }
  }
}

console.log(visited);

dfs(1);
console.log(visited);
