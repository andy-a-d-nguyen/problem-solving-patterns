/*
  Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.
*/

// Input: an object
// Output: an array
// Constraints: none
// Edge cases: none

function collectStrings(obj) {
  // create a result array
  let strings = [];

  // helper
  function helper(object) {
    // base case:
    // if object is empty, return
    if (Object.keys(object).length === 0) return;

    // recursive case:
    // iterate over object
      // if val is string
        // push val to strings
      // if val is object
        // recursively call helper on val
    for (let key in object) {
      if (typeof object[key] === 'string') strings.push(object[key]);
      if (typeof object[key] === 'object' && !Array.isArray(object[key])) helper(object[key]);
    }
  }

  // call helper on input obj
  helper(obj);

  return strings;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj));

/*
  Alternative solutions:
  Helper Method Recursion Version:
  function collectStrings(obj) {
    var stringsArr = [];

    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }

    gatherStrings(obj);

    return stringsArr;
  }
  Pure Recursion Version:
  function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }

    return stringsArr;
  }
*/

