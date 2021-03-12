function stringSearch(string, targetString) {
  // create a count
  let count = 0;

  // iterate over string
    // if elem matches first character in string
      // create substring with length equals to targetString
      // create substring assumption, set to true
      // loop over substring
        // if elem doesn't match string
          // set assumption to false
          // break out of loop
      // if assumption is true
        // increment count
        // increment index (substring matches targetString, go to character after end of substring)
  for (let i = 0; i < string.length; i++) {
    if (string[i] === targetString[0]) {
      let substring = string.slice(i, i + targetString.length);
      let isValidSubstring = true;
      for (let j = 0; j < targetString.length; j++) {
        if (substring[j] !== targetString[j]) {
          isValidSubstring = false;
          break;
        }
      }
      if (isValidSubstring) {
        count++;
        i += substring.length;
      }
    }
  }

  return count;
}

console.log(stringSearch('abcdefghijklmnopmno', 'mno'));
console.log(stringSearch("lorie loled", "lol"));

/*
  Alternative solution:
  function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
  }
*/
