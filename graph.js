function Node(val) {
  this.val = val;
  this.next = undefined;
  this.down = new LinkedList();
}

class LinkedList {
  constructor() {
    this.head = undefined;
  }

  insertNewItem(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    let cnt = 0;
    while (temp.next && cnt < 210) {
      cnt++;
      temp = temp.next;
    }
    temp.next = newNode;
  }

  //   addTheItemDownAtPosition(idx, val) {
  //     let temp = this.head;
  //     let cnt = 0;
  //     while (temp && cnt < 10) {
  //       if (cnt === idx) {
  //         if (!temp.down) {
  //           temp.down = new Node(val);
  //         } else {
  //           temp = temp.down;
  //           let cnt2 = 0;
  //           while (temp.next && cnt2 < 10) {
  //             temp = temp.next;
  //             cnt2++;
  //           }

  //           temp.next = new Node(val);
  //         }
  //         break;
  //       }
  //       cnt++;
  //     }
  //   }

  addTheItemDownAtPosition(idx, val) {
    let temp = this.head;
    let cnt = 0;
    while (temp && cnt < 100) {
      if (cnt === idx) {
        console.log(cnt, idx);
        temp.down.insertNewItem(val);
        break;
      }
      temp = temp.next;
      cnt++;
    }
  }

  traverseTheList() {
    let temp = this.head;
    let stro = `${temp.val}`;
    temp = temp.next;

    let cnt = 0;
    while (cnt < 210 && temp) {
      stro += ` -> ${temp.val}`;
      temp = temp.next;
      cnt++;
    }

    console.log(stro);
  }

  traverseTheList2() {
    let pnext = this.head;
    let pdown = this.head;
    let stro = "";
    let cnt = 0;
    while (pnext && cnt < 220) {
      cnt++;

      pdown = pdown.next;
    }
  }
}

function flatten(list) {
  let temp = list.head;
  let cnt = 0;
  let newList = mergedTwoList(
    Object.assign({}, list),
    Object.assign({}, temp.down)
  );

  while (temp.next && cnt < 200) {
    cnt++;
    temp = temp.next;
    newList = mergedTwoList(
      Object.assign({}, temp.down),
      Object.assign({}, newList)
    );
  }

  return newList;
}

function mergedTwoList(l1, l2) {
  let pointer1 = l1.head;
  let pointer2 = l2.head;

  let newList = new LinkedList();
  let cnt1 = 0;
  while (pointer1 || pointer2) {
    if (pointer1 && pointer2) {
      if (pointer1.val > pointer2.val) {
        newList.insertNewItem(pointer2.val);
        pointer2 = pointer2.next;
      } else {
        newList.insertNewItem(pointer1.val);
        pointer1 = pointer1.next;
      }
    } else if (pointer2) {
      newList.insertNewItem(pointer2.val);
      pointer2 = pointer2.next;
    } else if (pointer1) {
      newList.insertNewItem(pointer1.val);
      pointer1 = pointer1.next;
    }

    cnt1++;
    if (cnt1 > 210) break;
  }

  return newList;
}

let list1 = new LinkedList();
let list2 = new LinkedList();

list1.insertNewItem(5);
list1.insertNewItem(10);
list1.insertNewItem(19);
list1.insertNewItem(28);

// list2.insertNewItem(7);
// list2.insertNewItem(20);
// list2.insertNewItem(22);
// list2.insertNewItem(30);

// let mergedList = mergedTwoList(list1, list2);
// // console.log(mergedList);
// mergedList.traverseTheList();

list1.addTheItemDownAtPosition(0, 7);
list1.addTheItemDownAtPosition(0, 8);
list1.addTheItemDownAtPosition(0, 30);

list1.addTheItemDownAtPosition(1, 20);

list1.addTheItemDownAtPosition(2, 22);
list1.addTheItemDownAtPosition(2, 50);
list1.addTheItemDownAtPosition(2, 53);

list1.addTheItemDownAtPosition(3, 35);
list1.addTheItemDownAtPosition(3, 40);
list1.addTheItemDownAtPosition(3, 45);
list1.addTheItemDownAtPosition(3, 60);

// console.log(ll);

newList1 = flatten(list1);
console.log(newList1);
newList1.traverseTheList();
// list1.head.down.traverseTheList();
