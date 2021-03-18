# Linked List

A data structure that contains a head, tail and length property

Linked Lists consist of nodes and each node has a value and a pointer to another node or null

- [Linked List](#linked-list)
  - [Comparison With Arrays](#comparison-with-arrays)
  - [Pushing a New Node Pseudocode](#pushing-a-new-node-pseudocode)
  - [Popping a Node](#popping-a-node)
    - [Popping Pseudocode](#popping-pseudocode)
  - [Shifting](#shifting)
    - [Shifting Pseudocode](#shifting-pseudocode)
  - [Unshifting](#unshifting)
    - [Unshifting Pseudocode](#unshifting-pseudocode)
  - [Get](#get)
    - [Get Pseudocode](#get-pseudocode)

## Comparison With Arrays

Lists:

- Do not have indexes
- Connected via nodes with a next pointer
- Random access is not allowed

Arrays

- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

## Pushing a New Node Pseudocode

- The function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment length by one
- Return the linked list

## Popping a Node

Removing a node from the end of a linked list

### Popping Pseudocode

- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed

## Shifting

Removing a node from the beginning of a linked list

### Shifting Pseudocode

- If there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed

## Unshifting

Add a new node to the beginning of a linked list

### Unshifting Pseudocode

- The function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise, set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment length by 1
- Return the list

## Get

Retrieving a node by its position in a linked list

### Get Pseudocode

- The function should accept an index
- If the index is less than zero or greater than or equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index