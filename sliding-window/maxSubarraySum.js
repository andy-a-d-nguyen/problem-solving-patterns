/*
  Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
*/

// Input: an array of integers
//        a number n
// Output: a number (sum of n consecutive numbers)
// Constraints: none
// Edge cases: empty array => return null

function maxSubArraySum(arr, n) {
  // if array is empty, return null
  if (arr.length === 0) {
    return null;
  }
  // create an assumption of  biggest possible sum of n consecutive integers, set to 0
  let maxSum = 0;
  // iterate over input array
    // if sum of current element and next n integers  is bigger than assumption
      // set this sum as new assumption
  for (let i = 0; i < arr.length; i++) {
    let start = i;
    // if end index is bigger than last index,
      // set to length of array
    // otherwise
      // set to index n spaces away from i
    let end = (i + n) > arr.length - 1 ? arr.length : (i + n)
    let subArr = arr.slice(start, end); // sub array from i to n numbers after i (exclusive)
    let sum = subArr.reduce((acc, cur) => acc + cur);
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  // assumption now has the biggest possible sum, return it
  return maxSum;
}

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2));
console.log(maxSubArraySum([1,2,5,2,8,1,4], 4));
console.log(maxSubArraySum([], 4));

/*
  Alternate solution:
  function maxSubarraySum(arr, num) {
    if (num > arr.length) {
      return null;
    }
    var max = -Infinity; // the smallest possible value
    for (let i = 0; i < arr.length - num + 1; i++) { // iterate until i where n is still within bounds of the array (i + num is not greater than arr.length)
      temp = 0;
      for (let j = 0; j < num; j++) { // iterate until j === num
        temp += arr[i + j];
        // i = 0; j = 0 => arr[0]
        // i = 1; j = 0 => arr[1]
        // i = 1; j = 1 => arr[2]
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }

  Optimal Solution:
  Time Complexity - O(N)
  function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) { // sum together first n integers
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      // ([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
      //   |-sum-| (First Step => 2 + 6 + 9 = 17 (tempSum))
      // ([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
      //      |-sum-| (Next Step => 17 - 2 + 2 (tempSum - arr[i - num] + arr[i]))
      // Calculating new tempSum by subtracting oldest elem and adding the next elem to tempSum
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
*/