/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** 
* Implement a function declaration called `search` that Takes a paramater 
* representing an Array of `animals`.  Takes a paramater representing a 
* String, the name of an animal on which to perform a search.
*/

function search(arr, str) {
    // Looks through the `animals` Array
    for (var element of arr) {
        // If an animal with that name exists
        if (element['name'] === str) {
            // returns the animal's Object
            return element;
        }
    }
    // Return `null` if no animal with that name exists 
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Takes 3 parameters, an Array of animals, a String representing  the name 
 * of an animal on which to perform a search, and an Object that represents 
 * the replacement animal.
 * 
 * Write a function declaration called `replace` with a signature of 
 * `replace`(animals, name, replacement)
 */

function replace(arr, str, obj) {
    /* If an animal with that name exists within the `animals` Array, replace 
    it's entire Object with the replacement Object. */
    // variable to hold array location for replacement
    var index;
    
    // Looks through the `animals` Array
    for (var element of arr) {
        // If an animal with that name exists
        if (element['name'] === str) {
            // returns the animal's Object
            index = arr.indexOf(element); 
            arr[index] = obj;
            //return obj;
            return obj;
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
