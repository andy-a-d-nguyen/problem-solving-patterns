// Input: an unsorted array of numbers
// Output: a sorted array of numbers
// Constraints: none
// Edge cases: none

function radixSort(arr) {
  // determine largest number of digits in a number in input array
  let maxDigitCount = mostDigits(arr);

  // iterate from 0 to maxDigitCount (iterating through digit positions up to the highest possible position)
  for (i = 0 ; i < maxDigitCount; i++) {
    // create an array of 10 empty arrays
    let buckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++) {
      // get digit of current num at position i
      let digit = getDigit(arr[j], i);
      // push number to appropriate bucket for computed digit
      // NOTE: digit === specific bucket where number belongs
      buckets[digit].push(arr[j]);
    }
    // concat the buckets into an array
    arr = [].concat(...buckets);
  }
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}