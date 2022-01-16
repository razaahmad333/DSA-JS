class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }
}

class Queue {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let tempTail = this.tail;
      tempTail.prev = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head) {
      let tempHead = this.head;
      this.head = tempHead.prev;
      return tempHead.value;
    } else {
      return "line khatam";
    }
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
q.enqueue(3);
q.enqueue(13);
console.log(q.dequeue());
