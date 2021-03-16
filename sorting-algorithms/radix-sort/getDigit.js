// Input: 2 numbers
// Output: a number
// Constraints: none
// Edge cases: none

function getDigits(num, place) {
  // convert num into string, then an array, and then reverse array
  let numStrArr = num.toString().split('').reverse();

  // iterate over array
    // if index is equal to place
      // return element
  for (let i = 0; i < numStrArr.length; i++) {
    if (i === place) {
      return numStrArr[i];
    }
  }

  // if place is bigger than number of digits (highest index), return 0
  if (place > numStrArr.length - 1) return 0;

  // in all other cases, return null
  return null;
}

/*
Alternative solution:
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
*/