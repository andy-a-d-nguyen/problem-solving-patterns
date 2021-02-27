/*
  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string from a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

// Input: 2 strings
// Output: boolean
// Constraints: Time O(n + m)
// Edge cases: if str1 is empty return true
//             if str2 is empty return false

function isSubsequence(str1, str2) {
  // if str1 is empty return true
  if (!str1.length) return true;
  // if str2 is empty return false
  if (!str2.length) return false;
  // create pointers to first index in str1 and str2
  let str1Pointer = 0;
  let str2Pointer = 0;
  // while str2 pointer is less than str2 length
    // if elem at str1 pointer === elem at str2 pointer
      // increment str1 pointer
    // if str1 pointer === str1 length (incremented until end of str1 => subsequence exists)
      // return true
    // increment str2 pointer
  while (str2Pointer < str2.length) {
    if (str1[str1Pointer] === str2[str2Pointer]) str1Pointer++;
    if (str1Pointer === str1.length) return true;
    str2Pointer++;
  }
  // subsequence does not exist
  return false;
}

console.log(isSubsequence('abc', 'abracaadabra'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'acb'));

/*
  Alternative solution:
  function isSubsequence(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
    return isSubsequence(str1, str2.slice(1));
  }
*/