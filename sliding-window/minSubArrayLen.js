/*
  Write a function minSubArrayLen which accepts two params, an array of positive integers and a positive integer.

  The function should return the minimal length of a contiguous subarray in which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0.
*/

// Input: array of positive integers
//        positive integer
// Output: number
// Constraints: Time O(n)
//              Space O(1)
// Edge cases: none

function minSubArrayLen(arr, num) {
  // return 0 if arr is empty
  if (!arr.length) return 0;
  // create a total
  let total = 0;
  // create assumption for min length (set to highest possible value)
  let minLength = Infinity;
  // create a pointer to fist index
  let start = 0;
  // create a pointer to second index
  let end = 0;
  // while start < arr.length
    // if total is less than sum and end has not reached end of array
      // add arr[end] to total
      // move end right (expand window)
    // else if total is bigger than or equal to sum
      // find new minLength between current minLength and length from start to end
      // subtract arr[start] from total
      // move start right (shrink window)
    // else (total is less than sum but end is reached) => condition where case start does not move to end of array but total is not bigger than or equal to sum
      // get out of loop
  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
      console.log(`If      --- Total: ${total} --- Start: ${start} --- End: ${end}`)
    } else if (total >= num) {
      minLength = Math.min(minLength, end - start); // every time condition total >= num is met, record minLength
      total -= arr[start]; // subtract arr[start] => result: total < num => find a different total with potentially shorter minLength
      start++;
      console.log(`Else If --- Total: ${total} --- Start: ${start} --- End: ${end}`)
    } else {
      console.log(`Else    --- Total: ${total} --- Start: ${start} --- End: ${end}`)
      break;
    }
  }
  // if minLength's assumption didn't change
    // return 0 (cannot find smallest subarray whose sum is bigger than or equal to num)
  // else (assumption did change)
    // return minLength
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));