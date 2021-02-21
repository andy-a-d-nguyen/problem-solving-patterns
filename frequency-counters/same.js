// Example:
// Write a function called same, which accepts 2 arrays.
// The function should return true if every value in the array has its corresponding value squared in the second array.
// The frequency of values must be the same.

// Notes:
// order of values does not matter
// frequency of values must be the same
// Second array will always be the one that contains values of first array squared
// Arrays will only contain integers

// Input: two arrays
// Output: boolean
// Constraints: none
// Edge cases: none

function same(arr1, arr2) {
  // if array lengths are not the same
    // return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // create an obj to store count
  let numCount = {};
  // iterate over first arr
    // store count in obj
  for (let num of arr1) {
    numCount[num] = ++numCount[num] || 1; // postincrement will cause the value to be stored first before incrementing
  }
  // iterate over second arr
    // if square root of integer is a key in obj
      // decrement count
      // if count is 0
        // delete
  for (let num of arr2) {
    let key = Math.sqrt(num);
    if (numCount[key]) {
      numCount[key]--;
      if (numCount[key] === 0) {
        delete numCount[key];
      }
    }
  }

  // if obj has any key
    // return false
  if (Object.keys(numCount).length > 0) {
    return false;
  }
  // return true
  return true;
}

// Time complexity: O(n)
// Space complexity: Best case: O(1)
//                   Worst case: O(n)

// console.log(same([1, 2, 3], [4, 1, 9])) // true
// console.log(same([1, 2, 3], [1, 9])) // false
console.log(same([1, 2, 1], [4, 4, 1])) // false (must be same frequency)

/*
  Alternate solution:
  Time complexity: O(n^2) => indexOf iterates over arr2 within arr1's loop
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2);
      if (correctIndex === - 1) { // if arr1[i] squared is not an element in arr2, stop running and return false
        return false;
      }
      arr2.splice(correctIndex, 1); // since current element squared is in arr2, remove squared element from arr2 so it won't be used again in case another same number occurs in arr1
      // without this, [1, 1, 2] and [1, 1, 1] would return true
    }
    return true;
  }

  Optimal solution:
  Time complexity: O(n)
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1 || 0) + 1;
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2 || 0) + 1;
    }
    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) { // if current num squared is not a key in frequencyCounter2, return false
        return false;
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) { // if current num squared does not have same count as current num, return false
        return false;
      }
    }
    return true;
  }
*/