/*
  Write a function called fib which accepts a number and return the nth number in the Fibonacci sequence. The Fibonacci sequence is a sequence of whole numbers 1, 1, 2, 3, 5, 8,... which starts with 1 and 1 and where every number thereafter is equal to the sum of the previous two numbers.
*/

// Input: a number
// Output: position of number in the Fibonacci sequence
// Constraints: none
// Edge cases: none

function fib(n) {
  // base case:
  // if n is less than or equal to 2
    // return 1
  if (n <= 2) return 1;

  // recursive case:
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));