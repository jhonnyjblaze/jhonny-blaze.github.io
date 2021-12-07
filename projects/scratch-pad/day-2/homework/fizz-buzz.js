// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
 I: No parameters
 O: Print the numbers from 1 to 100 but for multiples of 3 print "Fizz" instead of the number and for multiples of 5 print "Buzz"
    and for numbers which are multiples of both 3 and 5 print "FizzBuzz"
 C: Output to the console with console.log()
 E: N/A
 */

function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // for loop to iterate over the numbers from 1 to 100
    for (var i = 1; i <= 100; i++) {
        // Checks if the number is a multiple of both 3 and 5
        if (i % 3 == 0 && i % 5 == 0) {
            // If true prints "FizzBuzz" to the console
            console.log("FizzBuzz");
        // Checks if the number is a multiple of 3
        } else if (i % 3 == 0) {
            // If true prints "Fizz" to the console
            console.log("Fizz");
        // Checks if the number is a multiple of 5
        } else if (i % 5 == 0) {
            // If true prints "Buzz" to the console
            console.log("Buzz");
        // Prints the current number being looped over to the console
        } else console.log(i);
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}