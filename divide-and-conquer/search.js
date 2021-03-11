/*
  Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
*/

// Input: A sorted array of integers
//        An integer
// Output: Index where integer is found in array
// Constraints: none
// Edge cases: empty array => return -1

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

console.log(search([1,2,3,4,5,6], 4));
console.log(search([1,2,3,4,5,6], 6));
console.log(search([1,2,3,4,5,6], 11));

/*
  Time complexity : O(log(N))
*/