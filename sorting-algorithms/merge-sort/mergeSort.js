// Input: an unsorted array of integers
// Output: a sorted array if integers
// Constraints: none
// Edge cases: none

function mergeSort(arr) {
  // base case:
  // if arr length is 1 or 0 return arr
  if (arr.length <= 1) return arr;

  // recursive case:
  // find midpoint
  // split arr into 2 halves
  // recursively call mergeSort on each half to continue splitting each half
  // call mergeArrays on the halves passed to recursive call to mergeSort
  // NOTE: when the base case is reached, mergeArrays returns a merged and sorted array and passes this array to the mergeArrays call before it, which itself is inside a mergeSort call
  // NOTE: mergeArrays is called on every recursive mergeSort call
  let midpoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));``
  return mergeArrays(left, right);
}

console.log(mergeSort([1, 87, 43, 5, 6, 76, 45]));


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