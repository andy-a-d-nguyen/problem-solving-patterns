// Input: a number
// Output: a number
// Constraints: none
// Edge cases: none

function digitCount(num) {
  // convert num to string and return string length
  return num.toString().length;
}

console.log(digitCount(314));

/*
Alternative solution:
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
*/