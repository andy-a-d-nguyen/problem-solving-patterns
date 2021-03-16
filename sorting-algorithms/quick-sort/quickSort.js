// Input: an unsorted array
// Output: a sorted array
// Constraints: none
// Edge case: none

function quickSort(arr, left = 0, right = arr.length - 1) {
  // base case:
  // when left and right reaches the same number or left is bigger than right (subarray from left to right has length of 1 or less), return arr
  if (left >= right) return arr;

  // recursive case:
  // call pivot helper to determine pivot index
  // recursively call function on arr left of pivot index and arr right of pivot index
  // NOTE: call to pivot helper will move pivot to its correct spot and hence are not part of subsequent recursive calls (and does not need to be)
  // NOTE: quickSort swaps in place (the same array is passed to recursive calls)
  // NOTE: quickSort works by recursively moving pivots of subarrays to correct position until array is sorted
  let pivotIdx = pivot(arr, left, right);
  quickSort(arr, left, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, right);
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));


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

/*
Alternative solution:
function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
*/