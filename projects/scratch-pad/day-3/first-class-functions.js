// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/**
I: Base to test against either a String or Number
O: Retrun a Function that test whether a given value is greater than the Base
C: Must return a function inside a function
E: N/A
*/


function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //

    /*
    // Retrun a function with a value parameter
    return function(value) {
        // Test whether the given value is greater than the base
        return value > base;
    };
    */

    // Return arrow function that test if given value is greater than the base
    return value => value > base;
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */

/**
I: Base to test against either a String or Number
O: Retrun a Function that test whether a given value is less than the Base
C: Must return a function inside a function
E: N/A
*/


function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    /*
    // Retrun a function with a value parameter
    return function(value) {
        // Test whether the given value is less than the base
        return value < base;
    };
    */
    
    // Return arrow function that test if given value is less than the base
    return value => value < base;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */

/**
I: A single startsWith character
O: Retrun a Function that test whether a given String starts with the startsWith character
C: Must return a function inside a function
E: N/A
*/


function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /*
    return function(string) {
        return  string[0].toLowerCase() === startsWith.toLowerCase();
    };
    */
    // Return arrow function that test if the given string lowercased starts with the startsWith character lowercased
    return string => string[0].toLowerCase() === startsWith.toLowerCase();
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */

/**
I: A single endsWith character
O: Retrun a Function that test whether a given String ends with the endsWith character
C: Must return a function inside a function
E: N/A
*/


function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    /*
    return function(string) {
        return  string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    };
    */

    // Retrun arrow function that test if the give string lowercased ends with the endsWith character lowercased
    return string => string[string.length -1].toLowerCase() === endsWith.toLowerCase();
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

/**
I: Two inputs: one parameter is an Array of Strings and the other is a Function to modify a String
O: Retrun the Array of the Strings, modified.
C: Need a collection to collect results
E: N/A
*/


function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    /*
    // Empty Array literal to collect results
    var output = [];
    // For loop to iterate over the indexes of the strings array
	for(var i = 0; i < strings.length; i++) {
        // Push the modified array elements into the empty output array
		output.push(modify(strings[i]));
	}
    // Return the Array of the Strings, modified
	return output;
*/
    // Empty Array literal to collect results
    var output = [];
    // For of loop to iterate over Array of strings
    for (var element of strings) {
        // Push the modified array elements into the empty output array
        output.push(modify(element));
    }
    // Return the Array of the Strings, modified
    return output;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

/**
I: Two inputs: one parameter is an Array of Strings and the other is a Function to test the String
O: Retrun Boolean
C: Return true only if ALL Strings pass the test
E: N/A
*/


function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // Empty array to test strings
    var tested = [];
    // For loop to access strings from array
    for (var i = 0; i < strings.length; i++) {
        // Push tested strings into empty array
        tested.push(test(strings[i]));
        console.log(tested);
      // If tested array equals false
    } if (tested === false) {
        return false;
    } else return true;
        // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
