/*
  Write a function capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

// Input: array of strings
// Output: array of strings with first letter capitalized
// Constraints: none
// Edge cases: none

function capitalizeFirst(arr) {
  // create result array
  let capitalized = [];

  // helper
  function helper(array) {
    // base case:
    // array is empty, return
    if (array.length === 0) return;

    // recursive case:
    // split first string into array of characters
    // capitalize first character
    // join array of characters into string
    // push array to capitalized
    let characters = array[0].split('');
    characters[0] = characters[0].toUpperCase();
    let string = characters.join('');
    capitalized.push(string);

    // call helper on array sliced from first index
    helper(array.slice(1));
  }

  // call helper on input array
  helper(arr);

  return capitalized;
}

console.log(capitalizeFirst(['car','taco','banana']));