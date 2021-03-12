# Binary Search

- [Binary Search](#binary-search)
  - [Binary Search uses Divide and Conquer](#binary-search-uses-divide-and-conquer)
  - [Binary Search Pseudocode](#binary-search-pseudocode)
  - [Time Complexity](#time-complexity)

## Binary Search uses Divide and Conquer

Ex:

Search for 15:

 ```diff
- [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]
   |                  |                       |
   |                  |                       |
   Left               Too small               Right

+ [12, 15, 16, 17, 18, 19]
    |            |       |
    |            |       |
    Left       Too big   Right

- [12, 15, 16, 17, 18, 19]
   |            |       |
   |            |       |
   Left       Too big   Right

+ [12, 15, 16]
   |    |   |
   |    |   |
   Left 15! Right

 ```

## Binary Search Pseudocode

- A function that accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
  - If you never find the value, return -1


## Time Complexity

- Worst and Average Case: O(log n)
- Best Case: O(1)

Ex:

```diff

Suppose we're searching for 13:
[2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60, 63]
                          |
                          Middle

=>

[2, 4, 5, 9, 11, 14, 15]
          |
          Middle

=>

[11, 14, 15]
      |
      Middle

=>

[11]
  |
  Middle

13 is not here

16 elements => 4 steps

log base 2 of 16 = 4
2^4 = 16

If array size was doubled to 32, the number of steps would be 5
log base 2 of 32 = 5
2^5 = 32
```
