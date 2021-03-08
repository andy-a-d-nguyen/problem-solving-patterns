/*
  Write a function recursiveRange which accepts a number and adds up all the numbers from 0 ti the number passed to the function
*/

// Input: a number
// Output: sum from 0 to input number
// Constraints: none
// Edge cases: none

function recursiveRange(n) {
  // create a sum
  let sum = 0;

  // create a helper function
  function add(num) {
    // Base case:
    // num is 0, return 0
    if (num === 0) return 0;

    // Recursive case:
    // add num to sum
    sum += num;

    // Recursive call with num - 1
    add(num - 1);
  }

  // Call helper with n
  add(n);

  return sum;
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
