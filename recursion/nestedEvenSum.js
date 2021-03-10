/*
  Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
*/

// Input: a nested object
// Output: a num (sum of all even nums in object)
// Constraints: none
// Edge cases: none

function nestedEvenSum(obj) {
  // create a result sum
  let sum = 0;

  // helper
  function addEvenNums(object) {
    // base case:
    // if object is empty, return
    if (Object.keys(object).length === 0) return;

    // recursive case:
    // iterate over object
      // if prop at key is even
        // add prop to sum
      // if prop at key is obj
        // call helper on prop
    for (let key in object) {
      if (object[key] % 2 === 0) sum += object[key];
      if (typeof object[key] === 'object' && !Array.isArray(object[key])) addEvenNums(object[key]);
    }

    // for...in loop starts the call stack instead of recursive call on subset of input
  }

  addEvenNums(obj);

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
