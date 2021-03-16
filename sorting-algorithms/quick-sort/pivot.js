// Input: an array
// Output: a pivot index
// Constraints: none
// Edge cases: none

function pivot(arr) {
  // create a pivot
  let pivot = arr[0];

  // store pivot index
  let pivotIdx = 0;

  // iterate through array
    // if pivot is greater than current element
      // increment pivot index
      // swap current element with element at pivot index
      // NOTE: pivot index tracks number of elements smaller than pivot
      // NOTE: the swap moves all elements smaller than pivot to the right of pivot
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      let temp = arr[i];
      arr[i] = arr[pivotIdx];
      arr[pivotIdx] = temp;
    }
  }
  // swap starting element (pivot) with element at pivot index (last location of pivot index)
  // NOTE: this swap moves pivot to the right of all elements which are smaller than pivot
  arr[0] = arr[pivotIdx];
  arr[pivotIdx] = pivot;

  return pivotIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]));


/*
1st loop:
  [4, 8, 2, 1, 5, 7, 6, 3]
   |  |
   |  i
   pivot
   pivotIdx: 0
2nd loop:
  [4, 8, 2, 1, 5, 7, 6, 3]
   |  |  |
   |  |  i
   |  pivotIdx: 1
   pivot
  => (swap)
  [4, 2, 8, 1, 5, 7, 6, 3]
   |  |  |
   |  |  i
   |  pivotIdx: 1
   pivot
and so on...

Last swap after looping is done:
  [4, 2, 1, 3, 5, 7, 6, 8]
   |        |
   pivot    pivotIdx: 3
  => (swap)
  [3, 2, 1, 4, 5, 7, 6, 8]
   |        |
   pivot    pivotIdx: 3
*/

/*
Alternative solution:
// First Version
function pivot(arr, start=0, end=arr.length-1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}
*/