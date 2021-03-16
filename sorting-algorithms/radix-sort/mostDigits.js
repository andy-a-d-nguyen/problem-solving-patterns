// Input: an array of numbers
// Output: a number
// Constraints: none
// Edge cases: none

function mostDigits(arr) {
  // create max length assumption
  let maxLength = 0;

  // iterate over array
    // convert element to string
    // if string length is longer than assumption
      // assign length as assumption
  for (let i = 0; i < arr.length; i++) {
    let length = arr[i].toString().length;
    if (length > maxLength) {
      maxLength = length;
    }
  }

  return maxLength;
}

console.log(mostDigits([1, 1, 11111, 1]));

/*
Alternative solution:
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
*/