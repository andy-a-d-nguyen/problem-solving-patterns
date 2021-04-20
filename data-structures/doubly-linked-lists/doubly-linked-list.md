# Doubly Linked List

- [Doubly Linked List](#doubly-linked-list)
  - [Comparisons with Singly Linked List](#comparisons-with-singly-linked-list)
  - [Pushing](#pushing)
    - [Pushing Pseudocode](#pushing-pseudocode)
  - [Popping](#popping)
    - [Popping Pseudocode](#popping-pseudocode)
  - [Shifting](#shifting)

## Comparisons with Singly Linked List

- More memory
- More flexibility

## Pushing

Adding a node to the end of a Doubly Linked List

### Pushing Pseudocode

- Create a new node with the value passed to the function
- If the head property is null, set the head and the tail to be the newly created node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length
- Return the Doubly Linked List

## Popping

- Removing a node from the end of a Doubly Linked List

### Popping Pseudocode

- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous node
- Set the new tail's next to null
- Decrement the length
- Return the value removed

## Shifting

Removing a node from the beginning of a Doubly Linked List