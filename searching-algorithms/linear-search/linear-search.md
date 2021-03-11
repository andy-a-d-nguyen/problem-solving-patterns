

# Linear Search

- [Linear Search](#linear-search)
  - [Linear Search Pseudocode](#linear-search-pseudocode)
  - [Linear Search Big O](#linear-search-big-o)

Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

Different search methods on arrays in JavaScript:

- indexOf
- includes
- find
- findIndex

## Linear Search Pseudocode

- A function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

## Linear Search Big O

Time Complexity:

- Best Case: O(1)
- Average: O(n)
- Worst case: O(n)