# Radix Sort

Radix sort is a special sorting algorithm that works on lists of numbers
It never makes comparison between elements
It exploits the fact that information about the size of a number is encoded in the the number of digits
More digits means a bigger number

Ex:

```JavaScript
[1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]

Buckets: [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
          0   1   2   3   4   5   6   7   8   9
=> All numbers with same ending digit are grouped together into buckets
Buckets: [ ] [ ] [902] [593] [4] [ ] [86 4386 3556 1556] [9637 8157 7] [408] [29]
          0   1    2     3    4   5           6                7         8    9
=> Rearrange into array again
[902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]
=> All numbers with same second to last digits are grouped together into buckets
Buckets: [408 7 4 902] [ ] [29] [9637] [ ] [8157 3556 1556] [ ] [ ] [86 4386] [593]
               0        1    2     3    4         5          6   7      8       9
            (1 digit numbers are grouped into 0 bucket => 07 === 7, 04 === 4)
=> Rearrange into array again
[902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]
=> All numbers with same third to last digits are grouped together into buckets
Buckets: [86 29 7 4] [8157] [ ] [4386] [408] [593 3556 1556] [9637] [ ] [ ] [902]
              0         1    2     3     4          5          6     7   8    9
=> Rearrange into array again
[4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902]
=> All numbers with same fourth to last digits are grouped together into buckets
Buckets: [902 593 408 86 29 7 4] [1556] [ ] [3556] [4386] [ ] [ ] [ ] [8157] [9637]
                    0              1     2    3      4     5   6   7    8      9
=> Rearrange into array again
[4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
```

Number of times elements are grouped into buckets and rearranged into array is equal to the number with the highest number of digits

Number of buckets equals to base of number (base 10 => 10 buckets, base 7 => 7 buckets)

## Radix Sort Helpers

In order to implement radix sort, it's helpful to build a few helper functions first:

getDigit(num, place) - returns the digit in num at the given place value

Ex:

```JavaScript
getDigit(12345, 0) // 5
getDigit(12345, 1) // 4
getDigit(12345, 2) // 3
...
```

digitCount(num) - returns the number of digits in num

Ex:

```JavaScript
digitCount(1) // 1
digitCount(25) // 2
digitCount(214) // 3
...
```

mostDigits(nums) - Given an array of numbers, return the number of digits in the largest number in the list

Ex:

```JavaScript
mostDigits([1234, 56, 7]) // 4
mostDigits([1, 1, 11111, 1]) // 5
mostDigits([12, 34, 56, 78]) // 2

...
```

## Radix Sort Pseudocode

- Define a function that accepts a list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop:
  - Create buckets for each digits (0 to 9)
  - Place each number in the corresponding bucket based on its kth digit
- Replace existing array with values in buckets, starting with 0 and going up to 9
- Return list at the end

## radix Sort Big O

n = length of array
k = length of a number (number of digits)
Time Complexity (Best): O(nk)
Time Complexity (Average): O(nk)
Time Complexity (Worst): O(nk)
Space Complexity: O(n + k)