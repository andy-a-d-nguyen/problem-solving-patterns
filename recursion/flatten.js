/*
  Write a function flatten which accepts an array of arrays and returns a new array with all values flattened.
*/

// Input: an array of arrays
// Output: a flattened array
// Constraints: none
// Edge cases: none

function flatten(arr) {
  // create a result array
  let flattened = [];

  // helper function
  function helper(array) {
    // base case
    // if array is empty return
    if (array.length === 0) return;

    // recursive case:
    // if array[0] is an array
      // call helper on array[0]
    // otherwise
      // push array[0] to result
    if (Array.isArray(array[0])) helper(array[0]);
    else flattened.push(array[0]);

    // call helper on array slice from 1st index
    helper(array.slice(1));
  }

  // call helper to start the recursion
  helper(arr);

  return flattened;
}

console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

/*
  Alternative solution:
  function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
    }
    return newArr;
  }
*/