// Input: 2 sorted arrays,
// Output: 1 sorted array
// Constraints: none
// Edge cases: none

function mergeArrays(arr1, arr2) {
  // create a result array
  let merged = [];

  // create indexes for input arrays
  let i = 0;
  let j = 0;

  // while i and j has not reached their ends (when either i or j reaches the end, stop looping)
    // if arr1[i] is smaller than arr2[j]
      // push arr1[i] to result
      // increment i
    // if arr1[i] is bigger than or equal to arr2[j]
      // push arr2[j] to result
      // increment j
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  // while i has not reached the end
    // push remaining elems in arr1 to result
  // while j has not reached the end
    // push remaining elems in arr2 to result
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  
  return merged;
}

console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]));