class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {

    if (!this.head) return undefined;

    let poppedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedTail.prev;
      this.tail.next = null;
      poppedTail.prev = null; // remove prev ref from popped node. Otherwise, popped node can be used to access the list
    }

    this.length--;

    return poppedTail;
  }
}

let list = new DoublyLinkedList();

list.push(99);

list.push(100);

console.log(list.pop());

console.log(list);