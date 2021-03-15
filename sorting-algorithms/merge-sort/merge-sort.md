# Merge Sort

- [Merge Sort](#merge-sort)
  - [Merging Arrays](#merging-arrays)
  - [Merging Arrays Pseudocode](#merging-arrays-pseudocode)
  - [Merge Sort Pseudocode](#merge-sort-pseudocode)
  - [Time Complexity](#time-complexity)
  - [Space Complexity](#space-complexity)
  - [O(n log n) Explanation](#on-log-n-explanation)
    - [O(log n) decomposition](#olog-n-decomposition)
    - [O(n) comparisons per decomposition](#on-comparisons-per-decomposition)

Ex:

```JavaScript
                [8, 3, 5, 4, 7, 6, 1, 2]
                            /\
                           /  \
                [8, 3, 5, 4]   [7, 6, 1, 2]
                    /\              /\
                   /  \            /  \
            [8, 3]     [5, 4] [7, 6]   [1, 2]

          [8]    [3]  [5] [4]  [7]  [6] [1]  [2]
           \      /     \  /    \    /    \   /
             [3, 8]    [4, 5]    [6, 7]   [1, 2]
               \         /          \       /
               [3, 4, 5, 8]         [1, 2, 6, 7]
                    \                   /
                  [1, 2, 3, 4, 5, 6, 7, 8]
```

## Merging Arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
- This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

## Merging Arrays Pseudocode

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once we exhaust one array, push in all remaining values from the other array

## Merge Sort Pseudocode

- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at full length of the array
- Once the array has been marged back together, return the merged and sorted array

## Time Complexity

Best: O(n logn)
Average: O(n logn)
Worst: O(n logn)

## Space Complexity
O(n)

## O(n log n) Explanation

### O(log n) decomposition

Ex:

8 elements in array => 3 splits (2^3 = 8)
32 elements in array => 5 splits (2^5 = 32)

### O(n) comparisons per decomposition

As n grows, the merge algorithm (not mergeSort) grows by n

Ex: 8 elements => 8 comparisons