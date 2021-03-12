# Bubble Sort

A sorting algorithm where the largest values bubble up to the top

Ex:

```JavaScript
1st iteration:
    [5, 3, 4, 1, 2]
     \  /
       swap
    =>
    [3, 5, 4, 1, 2]
        \  /
          swap
    =>
    [3, 4, 5, 1, 2]
           \  /
             swap
    =>
    [3, 4, 1, 5, 2]
              \  /
                swap
    =>
    [3, 4, 1, 2, 5]

```

## Before sorting, we must swap

Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

Ex:

```JavaScript
    // ES5
    function swap(arr, idx1, idx2) {
        var temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    // ES2015
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
```

## Bubble Sort Pseudocode

- Start looping with a variable called i from the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j + 1], swap the two values
- Return the sorted array

## Time Complexity

- Worst Case: O(n^2)
- Best Case: O(n) (Array is almost or already sorted)