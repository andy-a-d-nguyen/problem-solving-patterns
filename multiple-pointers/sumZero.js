/*
  Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

// Input: sorted array
// Output: array with 2 elements
// Constraints: none
// Edge cases: array of 1 element => return undefined
//             empty array => return undefined

function sumZero(arr) {
  // if arr is empty or arr length is 1
    // return undefined
  if (arr.length === 1 || arr.length === 0) {
    return undefined;
  }
  // create a pointer to first element
  let pointer = arr[0];
  // iterate over array from second element
    // if elem and pointer adds to 0
      // return as array
  for (let i = arr.length; i > 1; i--) {
    if (arr[i] + pointer === 0) {
      return [pointer, arr[i]];
    }
  }
  // slice array from second element and recurse over sliced array
  return sumZero(arr.slice(1));
}

// console.log(sumZero([-3,-2,-1,0,1,2,3]));
// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));
console.log(sumZero([2,5]));

// Time Complexity: Best case: O(n) Worst case: O(n!)
// Space Complexity: Best case: O(1) Worst case: O(n)

/*
  Optimal solution:
  function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum > 0) { // sum > 0 => since array is sorted, go to the next smaller positive number (closer to 0)
        right--;
      } else { // sum < 0 => since array is sorted, go to the next bigger negative number (close to 0)
        left++;
      } // if conditions for incrementing and decrementing is reversed, you would end up moving further away from 0 (sum of left and right would be increasingly bigger or smaller than 0)
    }
  }
  Time Complexity: O(n)
  Space Complexity: O(1)
*/