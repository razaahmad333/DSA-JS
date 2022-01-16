function Node(value) {
  this.value = value;
  this.next = undefined;
  this.prev = undefined;
}

class Stack {
  constructor() {
    this.top = undefined;
    this.length = 0;
    this.min = undefined;
    this.max = undefined;
  }

  push(value) {
    if (!this.top) {
      this.top = new Node(value);
      this.length++;
    } else {
      this.length++;

      let tempNode = new Node(value);
      tempNode.prev = Object.assign({}, this.top);
      this.top = tempNode;
    }
  }

  pop() {
    if (this.top) {
      //   let tempTop = Object.assign({}, this.top);
      let tempTop = this.top;
      let tempPrev = tempTop.prev;
      this.top = tempPrev;
      this.length--;
      return tempTop.value;
    } else {
      return "kuch nhi bhai ander";
    }
  }
}

let s = new Stack();
let infinix = "a+b*(c^d-e)^(f+g*h)-i";
let checkValidation = "{({})}";
function convertToPostfinix(infinix) {}

s.push(1);
s.push(22);
s.push(31);
s.push(14);

console.log(s.length);
console.log(s.pop());
console.log(s.pop());
s.push(24);
s.push(64);
console.log(s.pop());
console.log(s.pop());
s.push(94);
console.log(s.pop());
console.log(s.length);
