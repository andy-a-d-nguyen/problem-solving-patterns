/*
  Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise return false.
*/

// Input: an array
//        a callback
// Output: boolean
// Constraints: none
// Edge cases: none

function someRecursive(arr, cb) {
  // base case:
  // if arr length is 0 return false
  if (arr.length === 0) return false;

  // recursive case:
  // if callback called on first element returns true
    // return true
  // otherwise
    // return recursive call on arr sliced from 1st index
  if (cb(arr[0]) === true) return true;
  else return someRecursive(arr.slice(1), cb);
}

const isOdd = val => val % 2 !== 0;


console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([4,6,8], isOdd));
