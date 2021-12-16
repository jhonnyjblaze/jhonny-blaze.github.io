//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// objectValues() : Should take an object and return its values in an array

function objectValues(object) {
    // return object values in an array
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* keysToString() : Should take an object and return all its keys in a string 
each separated with a space
*/

function keysToString(object) {
    // return object keys in a string separated with a space
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* valuesToString() : Should take an object and return all its string values 
in a string each separated with a space 
*/

function valuesToString(object) {
    // empty array for loop output
    var arr = [];
    // empty string for return value
    var str = ' ';
    // for in loop to loop through object key
    for (var key in object) {
        // if object value is a string push into empty array
        if (typeof object[key] === 'string' || object[key] instanceof String)
        arr.push(object[key]);
        // assign the arr array joined as a string with a space to str
        str = arr.join(' ');
    }
    // return str
    return str;   
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* arrayOrObject() : Should take one argument and return 'array' if its an 
array and 'object' if its an object
*/

function arrayOrObject(collection) {
    // If collection is an array return array
    if (Array.isArray(collection)) return 'array';
    // Otherwise return object
    else return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* capitalizeWord() : Should take a string of one word, and return the word 
with its first letter capitalized 
*/

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*capitalizeAllWords() : Should take a string of words and return a string with 
all the words capitalized
*/

// I do not see the error.

function capitalizeAllWords(string) {
    // console.log(string.toUpperCase());
    return string.toUpperCase();    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* welcomeMessage() : Should take an object with a name property and 
return 'Welcome <Name>!' 
*/

// I do not see the error. 

function welcomeMessage(object) {
    //if (object.name !== undefined) 
    return 'Welcome' + ' ' + object.name + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* profileInfo() : Should take an object with a name an(d) a species and 
return '<Name> is a <Species>'
*/
// I do not see the error. 

function profileInfo(object) {
    // console.log(object.name + ' is a ' + object.species);
    return object.name + ' is a ' + object.species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* maybeNoises() : Should take an object, if this object has a noises array 
return them as a string separated by a space, if there are no noises return 
'there are no noises' 
*/

// I do not see the error. 

function maybeNoises(object) {
    if (Array.isArray(object.noises)) return object.noises.join(' ');
    if (!Array.isArray(object.noises)) return 'there are no noises'
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* hasWord() : Should take a string of words and a word and return true 
if <word> is in <string of words>, otherwise return false. */

function hasWord(string, word) {
    // If string includes word return true
    if (string.includes(word)) return true;
    // If not return false
    else return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}