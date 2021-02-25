/*
  Write a function called sameFrequency. Given 2 positive integers, find out if the two numbers have the same frequency of digits.

  Your solution must have the following complexities:

  Time: O(N)
*/

// Input: 2 integers
// Output: boolean
// Constraints: Time - O(N)
// Edge cases: none
//             input must be 2 positive integers => never be 0 or less than 0

// function sameFrequency(num1, num2) {
//   const num1Str = num1.toString();
//   const num2Str = num2.toString();

//   if (num1Str.length !== num2Str.length) {
//     return false;
//   }

//   let num1Count = {};
//   let num2Count = {};

//   for (let i = 0; i < num1Str.length; i++) {
//     const num = num1Str[i];
//     num1Count[num] = num1Count[num] ? ++num1Count[num] : 1;
//   }

//   for (let i = 0; i < num2Str.length; i++) {
//     const num = num2Str[i];
//     num2Count[num] = num2Count[num] ? ++num2Count[num] : 1;
//   }

//   for (let key in num1Count) {
//     if (num1Count[key] !== num2Count[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));

function sameFrequency(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  let num1Count = {};

  for (let i = 0; i < num1Str.length; i++) {
    const num = num1Str[i];
    num1Count[num] = num1Count[num] ? ++num1Count[num] : 1;
  }

  for (let i = 0; i < num2Str.length; i++) {
    const num = num2Str[i];
    if (num1Count[num]) {
      num1Count[num]--;
      if (num1Count[num] === 0) {
        delete num1Count[num];
      }
    } else {
      return false;
    }
  }
  if (Object.keys(num1Count).length > 0) {
    return false;
  }

  return true;
}