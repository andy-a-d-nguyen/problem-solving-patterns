# Doubly Linked List

- [Doubly Linked List](#doubly-linked-list)
  - [Comparisons with Singly Linked List](#comparisons-with-singly-linked-list)
  - [Pushing](#pushing)
    - [Pushing Pseudocode](#pushing-pseudocode)

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