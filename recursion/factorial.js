/*
  Write a function factorial which accepts a number and return the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24 because 4 * 3 * 2 * 1 equals 24. Factorial zero (0!) is always 1.
*/

// Input: a number
// Output: factorial (a number)
// Constraints: none
// Edge cases: none

function factorial(n) {
  // Base case:
  // if n is 0 return 1
  if (n === 0) return 1;
  // Recursive case:
  return n * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));


