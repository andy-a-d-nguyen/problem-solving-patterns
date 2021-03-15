// Input: an array of integers
// Output: a sorted array of integers
// Constraints: none
// Edge case: none

function insertionSort(arr) {
  // iterate from second element
    // if i is smaller than previous element
    // create a temp variable and assign to arr[i]
      // iterate from beginning to arr[i] (exclusive)
        // if temp is smaller than arr[j]
          // swap temp with arr[j]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i];
      // as this loop gets larger, the assumption that all elements in it is smaller than arr[i] remains true
      for (let j = 0; j < i; j++) {
        if (temp < arr[j]) {
          // swapping arr[i] with arr[j]
          let secondTemp = arr[j];
          arr[j] = temp;
          arr[i] = secondTemp;
          // temp is now arr[j] and carried on to the next loops until we find where to put arr[j]
          temp = secondTemp;
        }
      }
    }
  }
/*
1st Outer loop:
  1st loop:
    [1, 7, 4] temp: 7
     j
  =>
  2nd loop:
    [1, 7, 4] temp: 7
        j
  =>
  3nd loop:
    [1, 7, 4] temp: 7
           j
2nd Outer loop:
  1st loop:
    [1, 7, 4] temp: 4 arr[i]: 4
     j
  =>
  2nd loop:
    [1, 7, 4] temp: 4 arr[i]: 4
        j
    =>
    [1, 7, 4] temp: 4 arr[i]: 4 secondTemp: 7
        j
    =>
    [1, 4, 7] temp: 7 arr[i]: 7
*/

  return arr;
}

console.log(insertionSort([2, 6, 3, 1, 7, 5]));
console.log(insertionSort([2, 1, 9, 76, 7, 5]));
console.log(insertionSort([10, 9, 8, 7, 6, 7, 5, 7]));

/*
Alternative solution:
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        // loop runs as long as arr[j] > arr[i] (arr[i] < arr[j])
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // if arr[j] > arr[i] (arr[i] < arr[j]), move arr[j] forward
            arr[j+1] = arr[j]
        }
        // arr[i] is now smaller than all elements from j + 1 (and bigger than arr[j]) up to arr [i - 1]
        // assign arr[i] to where the last increment move occurred
        arr[j+1] = currentVal;
    }
    return arr;

  [1, 2, 9, 76, 20] currentVal: 20
  =>
  [1, 2, 9, 76, 76] currentVal: 20
             |   |
             j   (j + 1)
  =>
  [1, 2, 9, 9, 76] currentVal: 20
         |  |
         j  (j + 1)
  => assign currentVal to arr[j + 1]
}

insertionSort([2,1,9,76,4])
*/