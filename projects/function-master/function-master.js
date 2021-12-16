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
    /**
     * Break the string into words Array (by space delimiter)
     * Break each word to first character + rest of characters in the word
     * The first letter is transformed to uppercase, and the rest remains as-is
     * Joins back the Array into a string with spaces
     */
    
    return string.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    /**
     * The regex basically matches the first letter of each word within the given 
     * string and transforms only that letter to uppercase: 
     * \b matches a word boundary (the beginning or ending of word);
     * \w matches the following meta-character [a-zA-Z0-9].
     */

    // return string.replace(/\b\w/g, s => s.toUpperCase());
    
    /**
     * This regex matches the first letter and every non-whitespace letter preceded 
     * by whitespace within the given string and transforms only that letter to uppercase:
     * \s matches a whitespace character
     * \S matches a non-whitespace character
     * (x|y) matches any of the specified alternatives
     */
    
    // return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* welcomeMessage() : Should take an object with a name property and 
return 'Welcome <Name>!' 
*/


function welcomeMessage(object) {
    // undefined variable called name
    var name;
    // name assigned to object.name capitalized
    name = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    // console.log(name);
    // undefined variable called message
    var message;
    // message assigned to Welcome + whitespace + value of name + !
    message = 'Welcome' + ' ' + name + '!';
    // console.log(message);
    // return welcome message
    return message;
}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* profileInfo() : Should take an object with a name an(d) a species and 
return '<Name> is a <Species>'
*/


function profileInfo(object) {
    // undefined variable called name
    var name;
    // name assigned to object.name capitalized
    name = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    // console.log(name);
    // undefined variable called species
    var species;
    // species assigned to object.name capitalized
    species = object['species'].charAt(0).toUpperCase() + object['species'].slice(1);
    // console.log(species);
    // undefined variable called message
    var message;
    // message assigned to name + ' is a ' + species
    message = name + ' is a ' + species;
    // console.log(message);
    // return profile info
    return message;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* maybeNoises() : Should take an object, if this object has a noises array 
return them as a string separated by a space, if there are no noises return 
'there are no noises' 
*/


function maybeNoises(object) {
    // if object.noises is an array and has a length of 0 or if object.noises is not an array return 'there are no noises'
    if (Array.isArray(object.noises) && object.noises.length === 0 || !Array.isArray(object.noises)) return 'there are no noises';
    // if object.noises is an array reutrn the elements as a string joined separated by a space
    if (Array.isArray(object.noises)) return object.noises.join(' ');
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

/* addFriend() : Should take a name and an object and add the name to the 
object's friends array then return the object 
*/

function addFriend (name, object) {
    // Add name to object's friends array
    object.friends.push(name);
    // return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* isFriend() : Should take a name and an object and return true if <name> 
is a friend of <object> and false otherwise
*/

// I don't see the error

function isFriend(name, object) {
    // empty output array named arr
    var arr = [];
    // assigns array of friends name to arr
    arr = Object.values(object.friends);
    // checks if array element strictly equals name parameter return true if truthy
    if (arr.find(element => element === name)) return true;
    // return falsy if undefined
    else return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * nonFriends() : Should take a name and a list of people, and return a list of all 
 * the names that <name> is not friends with
 * @param {*} name 
 * @param {*} array 
 */

function nonFriends(name, array) {
    const iterator = array.values();

    for (const value of iterator) {
        if (name === value.name) {

        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * updateObject() : Should take an object, a key and a value. Should update the 
 * property <key> on <object> with new <value>. If <key> does not exist on <object> 
 * create it 
 * @param {*} object 
 * @param {*} key 
 * @param {*} value 
 */

function updateObject(object, key, value) {
    // console.log(object.hasOwnProperty(key));
    if (object.hasOwnProperty(key)) {
        object.key = value;
    } else object.key = key;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * removeProperties() : Should take an object and an array of strings. 
 * Should remove any properties on <object> that are listed in <array>
 * @param {*} object 
 * @param {*} array 
 */

function removeProperties(object, array) {
    for (var element of array) {
        if (object.hasOwnProperty(element)) {
            delete element;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * dedup() : Should take an array and return an array with all the duplicates removed
 * @param {*} array 
 */

function dedup(array) {
    var arr = [];
    for (var element in array) {
        if (array[element] !== array[element]) {
            arr.push(array[element]);
        }
    } console.log(arr);
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