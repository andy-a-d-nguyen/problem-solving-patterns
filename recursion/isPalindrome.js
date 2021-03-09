/*
  Write a function isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward or backward). Otherwise return false.
*/

// Input: string
// Output: Boolean
// Constraints: none
// Edge cases: none (all letters are lowercase)

function isPalindrome(str) {
  // base case:
  // if string length is 0 or 1 return true (string has been recursively sliced until length is 0 or 1 because first and last chars are the same)
  if (str.length === 0 || str.length === 1) return true;

  // recursive case:
  // if first and last chars are the same
    // remove first and last chars and call function recursively on remaining string
  // must return the result of recursive call to return the result of base case to the first function call
  if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, str.length - 1));

  // first and last chars are not the same, return false
  return false;
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('tacocat'));
