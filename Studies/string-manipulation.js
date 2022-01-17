/**
* STRING MANIPULATION:
* 0. In JavaScript, the String object is used to represent and manipulate a sequence of characters.  Strings are useful 
* for holding data that can be represented in text form.  Some of the most-used operations on strings are to check their 
* length, to build and concatenate them using the + and += string operators, checking for the existence or location of 
* substrings with the indexOf() method, or extracting substrings with the substring() method.
*
* While JavaScript has many applications, working with string values is one of the most popular. Strings are objects within 
* the JavaScript language.  They are not stored as character arrays, so built-in functions must be used to manipulate their 
* values.  The functions provide various ways to access the contents of a string variable. Let's take a closer look at these 
* functions.
*
* We will cover many of the popular string methods in this guide but for information about all of the string methods please 
* visit MDN here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// 1. String Operators //
// In JavaScript, you can also use the + operator to concatenate (join) two or more strings.  In addition to the comparison 
// operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings. 

console.log('my ' + 'string'); // prints => "my string".

// The shorthand assignment operator += can also be used to concatenate strings.

var mystring = 'alpha';
mystring += 'bet'; // evaluates to "alphabet" and assigns this value to mystring.

// String + String => concatenation
'foo' + 'bar' // "foobar"

// Number + String => concatenation
5 + 'foo' // "5foo"

// String + Boolean => concatenation
'foo' + false // "foofalse"


// In JavaScript, you just use the less-than and greater-than comparison operators to compare strings.  A similar result can be 
// achieved using the localeCompare() method.

let a = 'a';
let b = 'b';

if (a < b) { // true
  console.log(a + ' is less than ' + b);
} else if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' and ' + b + ' are equal.');
}


// Long literal strings
// Sometimes, your code will include strings which are very long.  Rather than having lines that go on endlessly, or wrap at the whim 
// of your editor, you may wish to specifically break the string into multiple lines in the source code without affecting the actual 
// string contents.  There are two ways you can do this.

// Method 1
// You can use the + operator to append multiple strings together, like this:

let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."

// Method 2
// You can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. Make sure 
// there is no space or any other character after the backslash (except for a line break), or as an indent; otherwise it will not work.
// That form looks like this:

let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."

// Both of the above methods result in identical strings.
"This is a very long string which needs to wrap across multiple lines because otherwise my code is unreadable."



// 2. String Methods //
// As with most things in JavaScript, strings are also objects.  When you create a string, for example by using a variable your 
// variable becomes a string object instance, and as a result has a large number of properties and methods available to it.


// To find the length of a string you use the length property

const browserType = 'brave';
browserType.length; // => Returns 5 because the string brave is 5 characters long.

// This is useful for many reasons; for example, you might want to find the lengths of a series of names so you can display them 
// in order of length, or let a user know that a username they have entered into a form field is too long if it is over a certain length.


//Retrieving a specific string character

// On a related note, you can return any character inside a string by using square bracket notation — this means you include square brackets 
// ([]) on the end of your variable name. Inside the square brackets you include the number of the character you want to return, so for example 
// to retrieve the first letter you'd do this:

browserType[0]; // => Returns 'b'
// Note: computers count from 0, not 1!

// To retrieve the last character of any string, we could use the following line, combining this technique with the length property we looked at above:

browserType[browserType.length-1]; // => Returns 'e'
//The length of the string "brave" is 5, but because the count starts at 0, the last character's position is 4; using length-1 gets us the last character.


// Testing if a string contains a substring

//Sometimes you'll want to find if a smaller string is present inside a larger one (we generally say if a substring is present inside a string). This can 
// be done using the includes() method, which takes a single parameter — the substring you want to search for.
// It returns true if the string contains the substring, and false otherwise.

const browserType = 'brave';

if (browserType.includes('rave')) { // true
  console.log('Found the rave!'); // prints => Found the rave!
} else {
  console.log('No rave found!');
}


// Often you'll want to know if a string starts or ends with a particular substring. This is a common enough need that there are two special methods for this: 
// startsWith() and endsWith():

// startsWith():
const browserType = 'brave';

if (browserType.startsWith('rave')) { // false
  console.log('Found the rave!');
} else {
  console.log('No rave found!'); // prints => "No rave found!"
}

// endsWith():
const browserType = 'brave';

if (browserType.endsWith('rave')) { // true
  console.log('Found the rave!'); // prints => "Found the rave!"
} else {
  console.log('No rave found!');
}


// indexOf(substr, [start])
// The indexOf() method accepts two arguments: a substring to locate and the fromIndex at which the method starts searching forward in the string.  Searches 
// and (if found) returns the index number of the searched character or substring within the string. If not found, -1 is returned. “Start” is an optional 
// argument specifying the position within string to begin the search. Default is 0.  

let sentence = "Hi, my name is Sam!"
if (sentence.indexOf("Sam")!== -1) { // true
  console.log("Sam is in there!"); // prints => "Sam is in there!"
} else {
  console.log('Sam is not in there!');
}


let str = "This is a string";
           0123456789...
console.log(str.indexOf("is")); // prints => 2

// The following example uses the fromIndex argument:
console.log(str.indexOf('is', 3)); // prints => 5


// lastIndexOf(substring,[fromIndex])
// To find the location of the last occurrence of a substring in a string, you use the lastIndexOf() method.  Searches and (if found) returns the index number 
// of the searched character or substring within the string.  Searches the string from end to the beginning.  If not found, -1 is returned.  “Start” is an 
// optional argument specifying the position within string to begin the search.  Default is string.length - 1.  Unlike the indexOf() method, the lastindexOf() 
// method searches backward from the fromIndex argument.

let str = "This is a string";
           0123456789...
           
console.log(str.lastIndexOf('is')); // prints => 5

// The lastIndexOf() method also returns -1 if the substring is not found in the string as shown in this example:

console.log(str.lastIndexOf('are')); // prints => -1


// Extracting a substring from a string

// You can extract a substring from a string using the slice() method. You pass it: 1.  the index at which to start extracting, 
// 2.  the index at which to stop extracting.  This is exclusive, meaning that the character at this index is not included in the extracted substring.

const browserType = 'brave';
                     01234
console.log(browserType.slice(1, 4)); // prints => "rav"
// The character at index 1 is "r", and the character at index 4 is "e". So we extract all characters starting at "r" and ending just before "e", giving us "rav".

// If you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter.  
// Instead, you only need to include the character position from where you want to extract the remaining characters in a string. 

browserType.slice(2); // => Returns "ave"
// This returns "ave" — this is because the character position of 2 is the letter "a", and because you didn't include a second parameter, the substring that was 
// returned was all of the remaining characters in the string.

// Note: slice() has other options too; learn more at the slice() MDN page at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// Sometimes, you want to extract a substring from a string using starting and ending indexes. In this case, you use the substring() method: substring(startIndex,endIndex)

const browserType = 'brave';
console.log(browserType.substring(1, 4));  // prints => "rav"

// At first glance slice() and substring() are identical.  But are they?  No!  The substring() and slice() methods are almost identical, but there are a couple of subtle 
// differences between the two, especially in the way negative arguments are dealt with.  The substring() method swaps its two arguments if indexStart is greater than 
// indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.

let text = 'Mozilla'
console.log(text.substring(5, 2)); // prints => "zil"
console.log(text.slice(5, 2)); // prints => ""

// If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.

console.log(text.substring(-5, 2)); // prints => "Mo"
console.log(text.substring(-5, -2)); // prints => ""

// slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

console.log(text.slice(-5, 2)); // prints => ""
console.log(text.slice(-5, -2)); // prints => "zil"



// Changing case

//The string methods toLowerCase() and toUpperCase() take a string and convert all the characters to lower- or uppercase, respectively. This can be useful for 
// example if you want to normalize all user-entered data before storing it in a database.

const radData = 'My NaMe Is DeF nOt MuD';
console.log(radData.toLowerCase()); // prints => "my name is def not mud"
console.log(radData.toUpperCase()); // prints => "MY NAME IS DEF NOT MUD"

// Note: In some languages, the rules for converting a string to lowercase and uppercase are very specific.  Therefore, it is safer to use the 
// toLocaleLowerCase() and toLocaleUpperCase() methods, especially when you don’t know which language the code will deal with.
// Check the MDN pages for more information https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase


// Updating parts of a string

// You can replace one substring inside a string with another substring using the replace() method.
// In this example, we're providing two parameters — the string we want to replace, and the string we want to replace it with:

const browserType = 'brave';
const updated = browserType.replace('bra','lea');

console.log(updated);      // prints => "leave"
console.log(browserType);  // prints => "brave"

// Note that replace(), like many string methods, doesn't change the string it was called on, but returns a new string.  If you want to update the original 
// browserType variable, you would have to do something like this:

let browserType = 'brave';
browserType = browserType.replace('bra','lea');

console.log(browserType);  // prints => "leave"
// Also note that we now have to declare browserType using let, not const, because we are reassigning the value that it points too.


// Splitting strings
// JavaScript has a very useful method for splitting a string by a character and creating a new array out of the sections. We will use the split() method to 
// separate the array by a whitespace character, represented by " ".  The split() method divides a String into an ordered list of substrings, puts these 
// substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter 
// in the method's call.  

const originalString = "How are you?";

// Split string by whitespace character
const splitString = originalString.split(" ");

console.log(splitString); // prints => [ 'How', 'are', 'you?' ]

// Now that we have a new array in the splitString variable, we can access each section with an index number.

splitString[1]; // Returns "are"

// If an empty parameter is given, split() will create a comma-separated array with each character in the string.  By splitting strings you can determine how 
// many words are in a sentence, and use the method as a way to determine people’s first names and last names, for example.

// limit Optional
// A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of 
// the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.  The array may 
// contain fewer entries than limit if the end of the string is reached before the limit is reached.  If limit is 0, [] is returned.

const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)

console.log(splits); // prints => ["Hello", "World.", "How"]


// Comparing strings

// Note that a == b and a === b both compare the strings in a and b for being equal in the usual case-sensitive way. If you wish to 
// compare without regard to upper or lower case characters, use a function similar to this along with the toUpperCase() method.

function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase(); // returns true if the uppercased values for both str1 and str2 are strictly equal, otherwise it returns false
}
// Note the toUpperCase() method is prefered over toLowerCase in this function, due to problems with certain UTF-8 character conversions.


// Additionally we can compare strings using the localeCompare() method:

// The localeCompare() returns one of three values: -1, 0, and 1.

console.log('A'.localeCompare('B')); // prints => -1
console.log('a'.localeCompare('B')); // prints => -1
console.log('A'.localeCompare('b')); // prints => -1
console.log('C'.localeCompare('B')); // prints => 1
console.log('c'.localeCompare('B')); // prints => 1
console.log('C'.localeCompare('b')); // prints => 1
console.log('B'.localeCompare('B')); // prints => 0
console.log('b'.localeCompare('B')); // prints => -1
console.log('B'.localeCompare('b')); // prints => 1

// If the first string comes before the second string alphabetically, the method returns -1.
// If the first string comes after the second string alphabetically, the method returns 1.
// If two strings are equal, the method returns 0.  localeCompare() is also case sensitive.


// String character access methods charAt() and charCodeAt()

// There are two ways to access an individual character in a string. The first is the charAt() method:
// charAt(x) This method will return the character at the x position within the string.
let myString = 'jQuery FTW!';
                012345678910
console.log(myString.charAt(7)); // prints => "F"


//The other way (introduced in ECMAScript 5) is to treat the string as an array-like object, where individual characters correspond 
//to a numerical index:
let myString = 'jQuery FTW!';
console.log(myString[7]); // prints => "F"

// Note: When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed.  
// The properties involved are neither writable nor configurable.  Strings are immutable. 


// charCodeAt(x) This method will return the unicode value of the character at position ‘x’ within the string.
let message = "jquery4u";
console.log(message.charCodeAt(1)); // prints => 113


// Concatenating strings to concatenate two or more strings you use the concat() method as follows:

let firstName = 'John';
let fullName = firstName.concat(' ','Doe');
console.log(fullName); // prints => "John Doe"
console.log(firstName); // prints => "John"

// The concat() method concatenates two or more strings and returns the result string.  Note that the concat() method does not modify the original string.
// Besides the concat() method, you can also use the addition operator (+) for concatenating strings. 
// Note: In practice, the addition operator is used more often than the concat() method.


// Removing whitespace characters
// To remove all leading and trailing whitespace characters of a string, you use the trim() method.

let rawString = ' Hi  ';
let strippedString = rawString.trim();
console.log(strippedString); // prints => "Hi"

let str = "     Hello Edureka!     ";
console.log(str.trim()); // prints => "Hello Edureka!"

// Note that the trim() method creates a copy of the original string with whitespace characters stripped, it doesn’t change the original string.
// ES6 introduced two new methods for removing whitespace characters from a string:

// trimStart() returns a string with whitespace stripped from the beginning of a string.

const greeting = '   Hello world!   ';

console.log(greeting); // prints => "   Hello world!   ";
console.log(greeting.trimStart()); // prints => "Hello world!   ";

// trimEnd() returns a string with the whitespace stripped from the end of a string.

const greeting = '   Hello world!   ';

console.log(greeting); // prints => "   Hello world!   ";

console.log(greeting.trimEnd()); // prints => "   Hello world!";


// Matching patterns with match() method
// The match() method allows you to match a string with a specified regular expression and get an array of results.  The match() method returns 
// null if it does not find any match.  Otherwise, it returns an array containing the entire match and any parentheses-capture matched results.
// If the global flag (g) is not set, the element zero of the array contains the entire match. Here is an example:

let expression = '1 + 2 = 3';
let matches = expression.match(/\d+/);
console.log(matches[0]); // prints => "1"

// In this example, the pattern matches any number in the expression string.  In case the global flag ( g) is set, the elements of the result array 
// contain all matches as follows:

let expression = '1 + 2 = 3';
let matches = expression.match(/\d+/g);

for (const match of matches) {
  console.log(match); // prints => "1"
}                     //           "2"
                      //           "3"

// In the above example, the matches array contains all the matches including 1, 2, and 3 in the expression string.  If you only need to find out 
// if a string matches a regular expression, you use the search() method instead.

// Similar to the match() method, the search() method accepts a regular expression and returns the position of the string where the first match is found.  
// In case no match is found, it returns -1.

let str = "This is a test of search()";
let pos = str.search(/is/);
console.log(pos); // prints => 2