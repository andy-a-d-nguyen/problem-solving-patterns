/*
  Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

// Input: a string
// Output: string reversed
// Constraints: none
// Edge cases: none

function reverse(str) {
  // store result in a string
  let reversed = '';

  // helper function
  function helper(string) {
    // base case:
    // if string length is 0 return string (if condition was string.length === 1, recursive case will not concat remaining character)
    if (string.length === 0) return string;

    // recursive case:
    // concat reversed with first character in string
    reversed = reversed.concat(string[string.length - 1]);

    // recursive call on string sliced from 1st index
    helper(string.slice(0, string.length - 1));
  }

  // call helper
  helper(str);

  return reversed;
}

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
