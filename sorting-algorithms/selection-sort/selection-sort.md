# Selection Sort

- [Selection Sort](#selection-sort)
  - [Selection Sort Pseudocode](#selection-sort-pseudocode)
  - [Time Complexity](#time-complexity)

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

Ex:

```JavaScript
=> 1st loop:
    [5, 3, 4, 1, 2]
     |  |
        current min
=> 2nd loop:
    [5, 3, 4, 1, 2]
     |     |
        current min is still 3
=> 3rd loop:
    [5, 3, 4, 1, 2]
     |        |
              current min is now 1
=> 4th loop:
    [5, 3, 4, 1, 2]
     |           |
              current min is still 1
    =>
    [1, 3, 4, 5, 2]
     |
     min is now swapped with the 5, the value used to compare with other values
```

## Selection Sort Pseudocode

- Store the first element as the smallest value you have seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.

## Time Complexity

O(n^2)