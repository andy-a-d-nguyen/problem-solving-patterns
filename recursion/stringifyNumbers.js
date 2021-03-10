/*
  Write a recursive function stringifyNumbers which takes in an object and finds all the values which are numbers and converts them to strings.
*/

// Input: an object
// Output: an object
// Constraints: none
// Edge cases: none

function stringifyNumbers(obj) {

  // create a result object
  let result = {};

  // base case:
  // if object is empty, return
  if (Object.keys(obj).length === 0) return obj;

  // recursive case:
  // iterate over object
    // if property val is number
      // convert val to string and store val in result
    // else if property val is an object
      // recursively call function and store result in result
    // else
      // store property in result
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      result[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result[key] = stringifyNumbers(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

console.log(stringifyNumbers(obj));