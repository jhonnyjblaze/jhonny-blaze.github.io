// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // For loop to forward iterate over the array parameter 
  for (var i = 0; i < array.length; i++) {
    // Print each array element to the console as they are looped over
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

/*
Inputs: An array parameter
Outputs: Prints array values to the console in reverse
Constraints: Loop backwards
Edge Cases: N/A
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // For loop to reverse iterate over the array parameter
  for (var i = array.length - 1; i > -1; i--) {
    // Output each array element to the console as they are looped over
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

/*
Inputs: An object parameter
Outputs: Return an array containing object parameter keys
Constraints: Return keys only
Edge Cases: N/A
*/

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  // Return an array containing the object keys
  return Object.keys(object);
    
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

/*
Inputs: An object parameter
Outputs: Print object parameter keys
Constraints: Must loop and must output to the console
Edge Cases: N/A
*/

function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // For in loop to iterate over the keys in the object
  for (var keys in object) {
    // Outputs keys to the console 
    console.log(keys);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

/*
I: An object parameter
O: Returns an array with the object parameter's values
C: Return object values only inside an array.
E: N/A
*/

function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
    // Return an array with the object parameter's values
    return Object.values(object);
  }
  
  
  // YOUR CODE ABOVE HERE //

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

/*
 I: An object parameter
 O: Prints the object parameter's values to the console
 C: Loop over the object parameter.
 E: N/A
 */

function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // For in loop to iterate over the object parameter's values
  for (var values in object) {
    // Output the object parameter's values to the console
    console.log(object[values]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/*
 I: An object parameter
 O: Return the number of key/value pairs stored within that object
 C: Must return a number
 E: N/A
 */

function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // Return the length of the array containing the number of key/value pairs stored within object parameter 
  return Object.entries(object).length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

/*
 I: An object parameter
 O: Print the object parameter's values to the console in reverse
 C: Output to the console with console.log()
 E: N/A
 */

 // Note to self. It feels like something about IOCE clicked in on the prior code challenge.
 // Note to self. I have no clue why this code doesn't work as it works perfectly in replit.

 function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // Assign object values to a variable named array
  var arr = Object.values(object);
  //console.log(array);
  // Create empty array literal named arr to collect reversed object values
  var outputArr = [];
  // For loop to loop backwards over object values
  for (var i = arr.length - 1; i > -1; i--) {
    // Push values into arr in reveresed order
    outputArr.push(arr[i]);
  }
    // Output arr to the console
  console.log(outputArr);
    
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
