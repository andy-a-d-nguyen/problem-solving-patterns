/*
  Write a function called areThereDuplicates which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern or the multiple pointers pattern.
*/
// Input: any number of input
// Output: boolean
// Constraints: Time O(n log n;)
//              Space O(1)
// Edge cases: none

function areThereDuplicates(...args) {
  // sort args (by sorting, duplicates will be next to one another => pointers easily works)
  args.sort((a, b) => a - b);
  // create a pointer to first index in args
  let firstPointer = 0;
  // create a pointer to second index in args
  let secondPointer = 1;
  // iterate over args
    // if firstPointer's element equals secondPointer's elem
      // return true
    // increment firstPointer and secondPointer
  while (secondPointer < args.length) {
    if (args[firstPointer] === args[secondPointer]) {
      return true;
    }
    firstPointer++;
    secondPointer++;
  }

  return false;
}