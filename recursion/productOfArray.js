/*
  Write a function called productOfArray which takes in an array of numbers and return the product of them all
*/

// Input: an array of numbers
// Output: product of array of numbers
// Constraints: none
// Edge cases: none

function productOfArray(arr) {
  // store product
  let product = 1;

  // helper function
  function helper(array) {
    // base case:
    // if array length is 1
      // return array[0]
    if (array.length === 0) {
      return array[0];
    }
    // recursive case (where recursion works with closure)
    // multiply product by array[0]
    product *= array[0];
    // call helper on array.slice(1)
    helper(array.slice(1));
  }

  // call helper on input
  helper(arr);

  return product;
}

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3, 10]));
