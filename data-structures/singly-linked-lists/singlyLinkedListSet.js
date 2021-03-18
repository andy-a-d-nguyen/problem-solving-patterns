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

  pop() {
    // if head is null, return undefined (no list)
    if (this.head === null) {
      return undefined;
    }
    // store the current node
    let current = this.head;
    // store a variable for the new tail, set to current node initially
    let newTail = current;
    // while there is a next node
    while (current.next) {
      // move placeholder for new tail to current node as we traverse the list
      newTail = current;
      // move from current node to the next node
      current = current.next;
    }
    // reached the new end of the list (node before last node (tail)), set newTail to be the new tail
    this.tail = newTail;
    // set the tail's ref to next node to null (indicating end of list)
    this.tail.next = null;
    // decrement length of list by 1
    this.length--;
    // if length of list is 0, point head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the current node that's been severed from the list
    return current;
  }

  shift() {
    // if there are no nodes, return undefined
    if (!this.head) return undefined;
    // store node at head in a variable
    let currentHead = this.head;
    // set head to next node
    this.head = currentHead.next; // this.head = this.head.next;
    // decrement length
    this.length--;
    // if list is empty, set tail to null
    if (this.length === 0) {
      this.tail = null;
    }
    // return node removed
    return currentHead; // current head still points to the next node even though it is no longer part of the list
  }

  unshift(val) {
    // create a new node
    let newNode = new Node(val);
    // if list is empty, set head and tail to new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; // this.tail = this.head
    // otherwise
    } else {
      // have new node's ref to next node point to the current head
      newNode.next = this.head;
      // set the new node as the head
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(i) {
    // if index is out of bounds, return null
    if (i < 0 || i >= this.length) {
      return null;
    }
    // create a pointer at head
    let current = this.head;
    // create an index counter
    let count = 0;
    // while node is in the list (valid)
    while (current) {
      // if counter is equal to input index
        // return node
      if (count === i) {
        return current;
      }
      // move to next node
      current = current.next;
      // increment count
      count++;
    }
  }

  set(val, index) {
    // use the get function to find node at input index
    let node = this.get(index);
    // if node is not found, return false
    if (!node) return false;
    // otherwise, set node's val to input val
    else node.val = val;
    return true;
  }
  /*
  Alternative set implementation:
    set(index, val){
      var foundNode = this.get(index);
      if(foundNode){
          foundNode.val = val;
          return true;
      }
      return false;
    }
  */
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")

console.log(list.set('YES', 1));