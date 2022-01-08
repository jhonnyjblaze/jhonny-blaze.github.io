////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// // if step is not defined then it equals 1
// function range(start, stop, step = 1) {
//   // assign variable named range to empty array literal
//   let range = [];
//   // check if start strictly equals stop if so return range
//   if (start === stop) { return range; }
//   // check if start is less than stop
//   if (start < stop) {
//     // if true assign range to Array.from sequence generator (range)
//     range = Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
//   }
//   // return range
//   return range;
// }

range = (start, end, step) => {
  let range = [];
  if (start === end) {
    return range;
  }
  // if step is not passed as an arguement
  if (step === undefined) {
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  } else { // step has been definied
    if (step < 0) {
      return range;
    } else {
      for (let i = start; i <= end; i += step) {
        range.push(i);
      }
    }
  }
  return range;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// input Array param into sum function 
function sum(arr) {
  // assign 0 to variable named sum
  let sum = 0;
  // iterare the input Array
  for(let i in arr) { 
    // sum plus equals each value for each Array element
    sum += arr[i];
  }
  // return sum
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// No clue why these solution do not pass

function reverseArray(arr) {
  // assign variable named output to in place reverse of input Array
  let output = [];
  // iterate the array
  for (let i = arr.length - 1; i >= 0; i--) {
    // adds current index to the end of the array
    output.push(arr[i]);
  }
  // returns output
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // // assign variable named output to in place reverse of input Array
  // let output = arr.reverse();
  // // return output
  // return output;
  if (array.length % 2 === 0) {
    for (let i = 0; i < array.length/2; i++) {
      // store initial value of array[i] to temp
      let temp = array[i];
      // assign array 0 to the value at the last index on first iteration
      array[i] = array[array.length - 1 - i];
      // assign the the value at array[0] to temp on the first iteration
      array[array.length - 1 - i] = temp;
    } 
  } else {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let temp = array[i];
      // assign array 0 to last index on first iteration
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // assign rest to null
  let rest = null;
  // iterate through input array
  for (let i = array.length - 1; i >= 0; i--) {
    // assign rest to object with the keys value and rest 
    //and the value for the key value array[i]
    rest = { value: array[i], rest }
  }
  // return rest
  return rest;
}

/*
arrayToList([10, 20])
// iterate backwards through [10, 20]
  // 20
    // rest = { value: 20, rest: null }
  // 10
    // rest = { value: 10, rest: { value: 20, rest: null } }
*/


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let array = [];
  for (list; list; list = list.rest) {
    array.push(list.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return { value, rest: list };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  // base case
  if (n === 0) {
    return list.value;
  }
  if (n < 0 || !list) {
    return undefined;
  }

  // recursion
  return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (obj1 === null || typeof obj1 !== "object" ||
  obj2 === null || typeof obj2 !== "object") return false;

  let keysObj1 = Object.keys(obj1), keysObj2 = Object.keys(obj2);

  if (keysObj1.length !== keysObj2.length) return false;

  for (let key of keysObj1) {
    if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
