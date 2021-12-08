// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */


function isArray(value) {
    // YOUR CODE BELOW HERE //
    // Check if it is true that value is an array
    if (Array.isArray(value)) {
        // If true return true
        return true;
      // If not true return false
    } else return false;
    
        
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */


/**
I: Input is some value of some unknown datatype
O: Return true if value is an Object intended as a collection, otherwise return false
C: Must be an object intended as a collection
E: typeof produces false positives i.e. typeof Array -> 'object'
*/


function isObject(value) {
    // YOUR CODE BELOW HERE //
    // Return false if value is (falsy) and return true if value is both true and has a constructor equal to Object
    return (!!value) && (value.constructor === Object);
    

    // YOUR CODE ABOVE HERE //

/**
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // Arrays will test positive for Object if used with typeof, so use Array.isArray()
	if(Array.isArray(value)) return false;
	// null will test positive for Object if used with typeof, so test using strict comparison
	if(value === null) return false;
	// Date will test positive for Object if used with typeof, so test using instanceof
	if(value instanceof Date) return false;
	// Finally, we're clear to use typeof on any other value
	if(typeof value === 'object') return true;
    

    // YOUR CODE ABOVE HERE //
}
*/


}


/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value) || (!!value) && (value.constructor === Object)) {
        return true;
    } else return false;
    

/**
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // Arrays will test positive for Object if used with typeof, so use Array.isArray()
	if(Array.isArray(value)) return true;
	// null will test positive for Object if used with typeof, so test using strict comparison
	if(value === null) return false;
	// Date will test positive for Object if used with typeof, so test using instanceof
	if(value instanceof Date) return false;
	// Finally, we're clear to use typeof on any other value
	if(typeof value === 'object') return true;
    // If it is anything else return false
    else return false;
    
   
    // YOUR CODE ABOVE HERE //
}
*/



    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 


/**
I: Input is a value of unknown datatype
O: Output is the datatype of the value as a String
C: stringify
E: typeof produces false positives i.e. typeof Array -> 'object'
*/


function typeOf(value) {
    // YOUR CODE BELOW HERE //
    /* 
    Return value type as a string using toString() to both stringify and 
    to detect the object's class (everything is technically an object) 
    then slice the results to remove the extra charcters [object ...] 
    finally make the sliced result lowercased before returning.
    */

    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
