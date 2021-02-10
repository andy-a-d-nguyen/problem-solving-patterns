# Frequency Counters

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

```JavaScript
// Example:
// Write a function called same, which accepts 2 arrays.
// The function should return true if every value in the array has its corresponding value squared in the second array.
// The frequency of values must be the same.

// Notes:
// order of values does not matter
// frequency of values must be the same
// Second array will always be the one that contains values of first array squared
// Arrays will only contain integers

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

```