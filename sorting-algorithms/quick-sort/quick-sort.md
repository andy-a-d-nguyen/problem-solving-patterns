# Quick Sort

- [Quick Sort](#quick-sort)
  - [Pivot Helper](#pivot-helper)
  - [Picking a pivot](#picking-a-pivot)
  - [Pivot Helper Example](#pivot-helper-example)
  - [Pivot Pseudocode](#pivot-pseudocode)
  - [Quick Sort Pseudocode](#quick-sort-pseudocode)
  - [Big O of Quick Sort](#big-o-of-quick-sort)

Ex:

```JavaScript
[5, 2, 1, 8, 4, 7, 6, 3]
 |
 pivot
=>
            5
3, 2, 1, 4      7, 6, 8
|
pivot
=>
            5
      3        7, 6, 8
1, 2     4
|
pivot
            5
      3        7, 6, 8
1        4     |
   2           pivot
=>
            5
      3           7
1        4     6     8
   2

```

## Pivot Helper

- In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot does not matter
- The helper should do this in place and should not create a new array
- When complete, the helper should return the index of the pivot

## Picking a pivot

- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you are sorting
- For simplicity, we'll always choose the pivot to be the first element

## Pivot Helper Example

```JavaScript
let arr = [5, 2, 1, 8, 4, 7, 6, 3]

pivot(arr); // 4;

arr;

/*
5 is the pivot element, with 4 as the pivot index
Any one of these is an acceptable mutation:
[2, 1, 4, 3, 5, 8, 7, 6]
[1, 4, 3, 2, 5, 7, 6, 8]
[3, 2, 1, 4, 5, 7, 6, 8]
[4, 1, 2, 3, 5, 6, 8, 7]
...
*/

```

## Pivot Pseudocode

- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length - 1, respectively)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array from the start until the end
  - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index

## Quick Sort Pseudocode

- Call the pivot helper on the array
- When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index and the subarray to the right of that index
- Base case occurs when you consider a subarray with less than 2 elements

## Big O of Quick Sort

Time Complexity (Best): O(n logn)

- O(log n) decomposition
- O(n) comparison per decomposition

Time Complexity (Average): O(n logn)
Time Complexity (Worst): O(n^2)

- Array is already sorted (every subsequent pivot is to the right or left of the pivot before e.g. pivot is always either the min or max element in every recursive call)
  - O(n) decompositions
  - O(n) comparisons per decomposition
  - Solution: pick a random or the median element as the pivot every time

Space Complexity: O(logn)
