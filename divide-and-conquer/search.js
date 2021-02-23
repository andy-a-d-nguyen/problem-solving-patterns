/*
  Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
*/

// Input: A sorted array of integers
//        An integer
// Output: Index where integer is found in array
// Constraints: none
// Edge cases: empty array => return -1

function search(arr, num) {
  // if arr is empty
    // return -1
  if (arr.length === 0) {
    return -1;
  }
  // BASE CASE:
  // if arr length is 1
    // return firs elem of arr
  if (arr.length === 1 && arr[0] !== num) {
    return -1;
  }
  // RECURSION CASE:
  // find the midpoint
  let midpoint = Math.floor(arr.length / 2);
  // create a ref for lower bound of arr
  let minpoint = 0;
  // create a ref for upper bound of arr
  let maxpoint = arr.length - 1;
  // if num === midpoint
    // return elem at midpoint
  // if num < midpoint
    // recurse on arr from minpoint to midpoint
  // else
    // recurse on arr from midpoint to maxpoint
  if (num === arr[midpoint]) {
    return arr[midpoint];
  } else if (num < arr[midpoint]) {
    return search(arr.slice(minpoint, midpoint), num);
  } else {
    return search(arr.slice(midpoint, maxpoint + 1), num);
  }
}

console.log(search([1,2,3,4,5,6], 4));
console.log(search([1,2,3,4,5,6], 6));
console.log(search([1,2,3,4,5,6], 11));

/*
  Alternative solution:
  Time complexity : O(log(N))
  function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      let currentElement = array[middle];
      if (array[middle] < val) { // elem at middle is smaller than val => val is between middle and max => move min to elem after middle
        min = middle + 1;
      } else if (array[middle] > val) { // elem at middle is bigger than val => val is between min and middle => move max to elem before middle
        max = middle - 1;
      } else {  // remaining possibility where elem at middle equals to val
        return middle;
      }
    }
    // val not found in loop
    return -1;
  }
*/