/*
  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

// Input: a sorted array of integers
//        a number
// Output: boolean
// Constraints: Time O(n)
//              Space O(1)
// Edge cases: Empty array => return false

function averagePair(arr, target) {
  // if empty array, return false
  if (!arr.length) {
    return false;
  }
  // create a pointer to first index
  let start = 0;
  // create a pointer to last index
  let end = arr.length - 1;
  // while first pointer < last pointer
    // if pointer average === target
      // return true
    // otherwise if pointer average is smaller than target
      // increment first pointer (resulting in pointer average becoming larger)
    // otherwise (pointer average is bigger than target)
      // decrement second pointer (resulting in pointer average becoming smaller)
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      start++;
    } else {
      end--;
    }
  }
  // no matching pair found
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3], 2.5));
