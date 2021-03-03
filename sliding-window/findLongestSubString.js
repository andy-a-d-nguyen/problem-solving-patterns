/*
  Wrote a function findLongestSubstring which accepts a string and returns the length of the longest substring with all distinct characters.
*/

// Input: a string
// Output: a number
// Constraints: O(n)
// Edge cases: empty string => return 0

function findLongestSubstring(str) {
  // if str is empty return 0
  if (!str.length) return 0;
  // store longest length
  let longestLength = 0;
  // store characters that has been seen through iterating
  let seenChars = {};
  // create a pointer for the beginning
  let start = 0;
  // iterate through str
    // if char has been seen
      // move start to where it is
    // determine longest between current assumption and length from start to i + 1 (+ 1 because current char has been seen)
  // store index of next char (current char has been seen, do not include its index in start position determination)
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seenChars[char]) {
      start = Math.max(start, seenChars[char]);
    }
    longestLength = Math.max(longestLength, i - start + 1);
    seenChars[char] = i + 1;
  }

  return longestLength;
}