// Input: an unsorted array of integers
// Output: a sorted array of integers
// Constraints: none
// Edge cases: none

function bubbleSort(arr) {
  // iterate from end to beginning or array
    // iterate from beginning until i - 1 (iterate from 0 to i - 1)
      // if current el is greater than next el, swap
  // NOTE: starts from arr.length - 1
  // The main purpose of this loop is to allow the inner loop to be run continuously until the array is sorted
  for (let i = arr.length - 1; i >= 0; i--) {
    // NOTE: inner loop causes subsequent passes and does not need to consider anything after i because everything after i would have been sorted
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

// swap helper
function swap(arr, i, j) {
  // store arr[i] in a temp var
  // assign arr[j] to arr[i]
  // assign temp to arr[j]
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] =  temp;
}

console.log(bubbleSort([5, 3, 4, 1, 2]));

/*
Alternative solutions:
// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){ // NOTE: starts from arr.length
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

*/