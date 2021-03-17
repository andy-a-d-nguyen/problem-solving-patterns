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

  push(val) {
    let newNode = new Node(val);
    // if no head exists, point head and tail to newly created node
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode; // this.tail = this.head
    // otherwise
      // NOTE: if list exists, head and tail are assumed to be pointing to correct nodes
      // point the last node's (the tail's) ref to the next node (previously null, indicating end of list) to the newly created node
      // point the tail to the new node
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment length of list
    this.length++;
    // return list
    return this;
  }
  // a hypothetical method for when we want to loop through the list
  traverse() {
    // store the current node
    let current = this.head;
    // as long as current node is valid (not null)
    while(current) {
      console.log(current.val)
      // assign next node to current node (move to the next node)
      current = current.next;
    }
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
// console.log(list);
console.log(list.traverse());