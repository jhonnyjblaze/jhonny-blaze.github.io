// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  // return the input arr reduced with params flatArr, currArr
  return arr.reduce((flatArr, currArr) => {
    // return flatArr concatenated with currArr
    return flatArr.concat(currArr);
     // seed Array literal
  }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  //base case
  // check if the test function called on the current value returns false
  if(!test(value)) {
    // return value
    return value;
  }
  
  // recursion
  // call the body function on the current value
  body(value);
  // return loop function called on the update function with input of value 
  // to create a new value then start from the beginning
  return loop(update(value), test, update, body);
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, pred) {
  // iterate array
  for (let el of arr) {
    // if pred called on el is a falsy value return false
    if (!pred(el)) return false;
  }
  // otherwise return true
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
  const arr = countBy(str, char => {
    // get the unicode value for the current charater
    const unicode = char.charCodeAt();
    // find the script from the unicode character
    const script = characterScript(unicode);
    // check if script is not equal to null
    if(script !== null) {
      // return script direction
      return script.direction;
      // otherwise
    } else {
      // return script
      return script;
    }
  });

  // find the highest count by sorting
  arr.sort((a, b) => {
    // return count in descending order
    return b.count - a.count
  })
  // return value of name property at zero index of arr
  return arr[0].name;
  };


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
