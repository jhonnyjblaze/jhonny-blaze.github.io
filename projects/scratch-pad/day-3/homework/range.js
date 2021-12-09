// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */


/**
I: Two integer inputs start and end
O: Retrun an Array with all integers between the two inputs
C: Must include the two inputs in the array
E: If start > end return the range in reverse order
*/

function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // Array to collect ouput
    var output = [];
    // for loop to iterate over the range
    for (var i = start; i <= end; i++) {
        // push the results into output array
        output.push(i);
    }
    // check if start > end
    if (start <= end) {
        return output;
    }
    
    // Array to collect output
    var revOutput = [];
    // for loop to reverse iterate over the range
    for (var j = start; j >= end; j--) {
      // push the results into revOutput array
      revOutput.push(j);
    } return revOutput;
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
