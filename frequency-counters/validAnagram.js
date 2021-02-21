/*
  Given 2 strings, write a function to determine if the second string is an anagram of the first.
  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
*/

// Input: 2 strings
// Output: boolean
// Constraints: None
// Edge cases: both strings are empty => true
//             string lengths are not the same => false
//             no spaces or special characters or upper case letters
function validAnagram(str1, str2) {
  // if both strings are empty
    // return true
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  // if both strings have different lengths
    // return false
  if (str1.length !== str2.length) {
    return false;
  }
  // create count stores for str1 and str2
  let str1Count = {};
  let str2Count = {};
  // iterate over str1
    // store each letter's count in both str1 and str2
  for (let i = 0; i < str1.length; i++) {
    str1Count[str1[i]] = (str1Count[str1[i]] || 0) + 1;
    str2Count[str2[i]] = (str2Count[str2[i]] || 0) + 1;
  }
  // iterate over str1's letter count
    // if letter has different count for str1 and str2
      // return false
  for (let letter in str1Count) {
    if (str1Count[letter] !== str2Count[letter]) {
      return false;
    }
  }
  // return true
  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));

/*
  Alternative Solution:
  function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // if letter does not exist or letter count is 0 (code will not decrement past 0), second is not an anagram of first => return false
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }

    return true;
  }
*/