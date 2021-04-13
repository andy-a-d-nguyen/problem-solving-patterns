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

  set(index, val) {
    // use the get function to find node at input index
    let node = this.get(index);
    // if node is not found, return false
    if (!node) return false;
    // otherwise, set node's val to input val
    else node.val = val;
    return true;
  }

  insert(index, val) {
    // if index is out of bounds, return false
    if (index < 0 || index > this.length) {
      return false;
    }
    // if index is equals to list length, use push to add node to end of list
    if (index === this.length) {
      return !!this.push(val); // since method returns the list, !! operator coerces return value to true
    }
    // if index is 0, use unshift to add node to beginning of list
    if (index === 0) {
      return !!this.unshift(val);
    }

    let newNode = new Node(val);
    // find the node before location you want to insert
    let prev = this.get( index - 1 );
    // store previous node's ref to the next node (otherwise, ref to next node will be lost if you directly assign ref to the next node to the new node)
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    // // get previous node
    // let prev = this.get(index - 1);
    // // get current node
    // let current = this.get(index);
    // // get next node
    // let next = this.get(index + 1);
    // // point previous node to next node
    // prev.next = next;
    // // point current node's next to null
    // current.next = null;
    // this.length--;
    // return current.val;

    // Alternative:
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    // NOTE: must be set to null so that last node (tail) points to null
    let prev = null;
    while (node) {
      // store the next node
      next = node.next;
      // point the ref to next node to the previous node
      node.next = prev;
      // set the previous node as the current node
      prev = node;
      // move to the next node
      node = next;
      // NOTE: Look ahead (find the next node), point the next node's ref to next to current node as loop runs
      /*
      First loop:
      1   2   3
      node: 1
      node.next / next: 2
      prev: initial = null
            then    = 1 (prev = node)
      Second loop:
      1   2   3
          node: 2
          node.next / next: 3
          prev: initial = 1
                then    = 2 (prev = node)
      */
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push("3")
list.push("4")

console.log(list);

list.reverse();

list.print();