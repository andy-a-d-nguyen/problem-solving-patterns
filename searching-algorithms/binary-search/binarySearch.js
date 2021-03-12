/*
  Write a function binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
*/

// Input: a sorted array
//        a value
// Output: a number (index of val in sorted array)
// Constraints: none
// Edge cases: none

function binarySearch(arr, val) {
  // create starting and ending pointers
  let start = 0;
  let end = arr.length - 1;

  // while start is less then end
    // if el at middle is equal to val
      // return middle
    // else if el at middle is bigger than val
      // move start to right of middle
    // else (el at middle is smaller than val)
      // move end to left of middle
  while (start <= end) {
    let middle = Math.floor((start + end) / 2); // middle is recomputed in the next loop as start or end changes
    if (val === arr[middle]) {
      return middle;
    } else if (val > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  // loop finished and val is not found in arr, return -1
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));

/*
  Alternative solution:
  // Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
*/