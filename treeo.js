let ahmad = "coding kr rha hai";
console.log(`ahmad ${ahmad}`);

function Node(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
}

class BinaryTree {
  constructor() {
    this.root = undefined;
  }

  insertANode(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    }
  }

  inorderTraversal(tempNode) {
    if (!tempNode) return;

    this.inorderTraversal(tempNode.left);
    console.log(tempNode.value);
    this.inorderTraversal(tempNode.right);
  }

  preorderTraversal(tempNode) {
    if (!tempNode) return;

    console.log(tempNode.value);

    this.preorderTraversal(tempNode.left);
    this.preorderTraversal(tempNode.right);
  }

  postOrderTraversal(tempNode) {
    if (!tempNode) return;

    this.postOrderTraversal(tempNode.left);
    this.postOrderTraversal(tempNode.right);

    console.log(tempNode.value);
  }
  breadthFirstTraversal(tempNode) {
    let heightOfTree = this.calcHeight(this.root);

    for (let h = 1; h <= heightOfTree; h++) {
      this.printValueAtLevel(h, this.root);
    }
  }

  calcHeight(tempNode, h = 0) {
    if (!tempNode) {
      return h;
    } else {
      let llength = this.calcHeight(tempNode.left, h + 1);
      let rlength = this.calcHeight(tempNode.right, h + 1);

      return llength > rlength ? llength : rlength;
    }
  }

  printValueAtLevel(level, tempNode) {
    if (level === 1) {
      if (tempNode) console.log(tempNode.value);
      return;
    } else {
      this.printValueAtLevel(level - 1, tempNode.left);
      this.printValueAtLevel(level - 1, tempNode.right);
    }
  }
}

let bt = new BinaryTree();

bt.root = new Node(1);
bt.root.left = new Node(2);
bt.root.right = new Node(3);

bt.root.right.left = new Node(6);
bt.root.right.right = new Node(7);

bt.root.right.right.left = new Node(8);
bt.root.right.right.right = new Node(9);

bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);

// bt.printValueAtLevel(4, bt.root);
// let heightOfBt =;
// console.log(bt.calcHeight(bt.root));
// console.log(bt.root.value);
bt.breadthFirstTraversal(bt.root);

// bt.inorderTraversal(bt.root);
// bt.preorderTraversal(bt.root);
// bt.postOrderTraversal(bt.root);
// console.log(bt);
