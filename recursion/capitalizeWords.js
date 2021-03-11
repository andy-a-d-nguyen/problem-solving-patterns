/*
  Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

// Input: an array of words
// Output: an array of words, every word upper case
// Constraints: none
// Edge cases: none

function capitalizeWords(arr) {
  // create a result array
  let capitalized = [];

  // helper
  function capitalize(array) {
    // base case:
    // if array is empty, return
    if (array.length === 0) return;

    // recursive case:
    // access first string, capitalize it and push result to capitalized
    capitalized.push(array[0].toUpperCase());

    // call helper on remaining array
    capitalize(array.slice(1));
  }

  // call helper on input array
  capitalize(arr);

  return capitalized;
}

let words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizeWords(words));

/*
  Alternative solution:
  function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;

  }
*/