// Linked List: a collection of nodes
// Node: stores val
//              reference to next node (next)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null; // At initialization, the node has no ref to next node
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}