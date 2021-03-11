/*
  Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
*/

// Input: an array
//        a value
// Output: a number (index in array where value is found)
// Constraints: none
// Edge cases: none

function linearSearch(arr, val) {
  // iterate through array
    // if el equals val
      // return index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  // iteration did not find index of val, return -1
  return -1;
}