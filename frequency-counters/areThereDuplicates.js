/*
  Write a function called areThereDuplicates which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern or the multiple pointers pattern.
*/
// Input: any number of input
// Output: boolean
// Constraints: Time O(n)
//              Space O(n)
// Edge cases: none

function areThereDuplicates(...args) {
  // create a store for arg count
  let count = {};
  // iterate over args array
    // store count
  args.forEach(val => count[val] = (count[val] || 0) + 1);
  // iterate over count
    // if count > 1
      // return true
  for (let arg in count) {
    if (count[arg] > 1) {
      return true;
    }
  }
  // return false
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));

/*
  One line solution:
  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
*/