/*
  Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

// Input: a sorted array
// Output: count of unique values
// Constraints: none
// Edge case: none

function countUniqueValues(arr) {
  // if array is empty
    // return 0
  if (arr.length === 0) {
    return 0;
  }
  // create a pointer
  let i = 0;
  // iterate over arr with second pointer
    // if second pointer's value is different from first pointer
      // increment first pointer by one
      // assign second pointer's value to first pointer's place
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // return index of first pointer + 1
  return ++i;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]))

/*
  Because input array is sorted, when a unique value is found at second pointer and send to first pointer, all values up to first pointer will be unique

  Time Complexity: O(n)
  Space Complexity: O(1)
*/