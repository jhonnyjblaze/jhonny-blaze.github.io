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

/**
 QUnit.test("isFriend() : Should take a name and an object and return true if <name> 
 is a friend of <object> and false otherwise", function(assert){
     assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
    assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
    assert.equal(isFriend("chuck",{}), false);
}); 
 */


function isFriend(name, object) {
    // empty output array named arr
    var arr = [];
    // assigns array of friends name to arr
    arr = object.friends;
    // if array is undefined return false
    if (arr === undefined) return false;
    // checks if array element strictly equals name parameter return true if truthy
    if (arr.find(element => element === name)) return true;
    // checks if array element strictly does not equals name parameter return false if truthy
    if (arr.find(element => element !== name)) return false;   
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

/**
 * QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
      var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
      assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
      assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
      assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
    });
 *  
 */

    function nonFriends(name, array) {
        // empty array named names to collect list of names
        let names = [];
        let friends = [];
        let output = [];
        let nonFriends = [];
        // push each elements name values into names array
        array.forEach(element => names.push(element.name));
        //console.log(names);
        array.forEach(element => friends.push(element.friends))
    //    console.log(friends);
        for (let index of friends) {
          //console.log(index);
          for (let value of index) {
            //console.log(value)
            if (output.indexOf(value) === -1) {
             output.push(value);
            }
            nonFriends = names.concat(output);
            // console.log(nonFriends);
            // filter out non unique values from array
            var unique = nonFriends.filter((value, index) => {
              return nonFriends.indexOf(value) === nonFriends.lastIndexOf(value);
            });  
            
          }
        }
        // return array with unique values
        return unique;
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

/**
 * QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
   If <key> does not exist on <object> create it.", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
    });
 *
 * I don't understand why test are failing as console.log produces the values being tested for exactly
 */

function updateObject(object, key, value) {
    // assign object property to value input
    object[key] = value;
    // return object
    return object;
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

/**
 * QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
      assert.deepEqual(data, {b: "two"});

      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["b"])
      assert.deepEqual(data, {a: "one", "hokey": false});

      var data = {a: "one", b: "two", hokey: false};
      removeProperties(data, []);
      assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
    });  
 *  
 */

function removeProperties(object, array) {
    // iterate through object properties
    for (var prop of array) {
        // checks if the object has the current property
        if (object.hasOwnProperty(prop)) {
            // deletes the current property from the object if it is present
            delete object[prop]; 
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

/**
 * QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
      var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
      var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
      assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
      assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
    });
 *  
 */

function dedup(array) {
    // empty array named arr
    var arr = [];
    // iterate through input array
    for (var element in array) {
        // console.log(array[element]);
        // check if input array element is not present in arr
        if (arr.indexOf(array[element]) === -1) {
            // if it is not present push only the first such element into arr
            arr.push(array[element]);
        }
      // return arr
    } return arr;
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