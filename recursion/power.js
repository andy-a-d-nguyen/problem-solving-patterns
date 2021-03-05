/*
  Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents
*/

// Input: 2 nums (base, exponent)
// Output: result of exponential calculation
// Constraints: none
// Edge cases: none (no negative bases or exponents)

function power(base, exp) {
  // Base case:
  // exp is 0 => return 1
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(2, 2));
console.log(power(2, 4));
