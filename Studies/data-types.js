/**
* DATA TYPES:
* 0.  A value in JavaScript is always of a certain type.  Types are values that JavaScript can have.  For example, a 
* string or a number.  JavaScript has seven types.  The set of types in the JavaScript language consists of 6 primitive 
* values and 1 non-primitive or complex data type, the Object.  Primitive values (immutable datum represented directly 
* at the lowest level of the language).  Below is a list of data types that JavaScript can have:
*    
*    Primitive Types
*    1.  Boolean type
*    2.  Null type
*    3.  Undefined type
*    4.  Number type
*    5.  String type
*    6.  Symbol type
*
*    Non-Primitive Type
*    7.  Object (collections of properties)
*
* Difference Between Primitive and Non-Primitive Data Types in JavaScript:
* 1.  JavaScript primitive data types are data types that refer to a single value.  E.g. var a = 5;
* Here the variable 'a' is an integer data type and has a single integer value.  The variable 'a' refers to a single value 
* in memory.  If we want to change the value of a, we would have to assign a new value to a.  Primitive data types are not 
* mutable.  When we create a variable, it reserves a space for itself in the memory.  The variable 'a' has space in memory 
* which holds its value.  When we try to change the value of 'a' by assigning another value like var a = 6; it does not 
* alter the value of the original a, it just creates a new variable 'a' with the new value 6.  We can assign the value of 
* 'a' to another variable like this: var a1 = a;
* Here the variable 'a1' is assigned the value of 'a', not the address of 'a' in memory.  Thus 'a1' now holds the same 
* value as 'a'.  We can compare the two variables 'a' and 'a1' as the two variables refer to the same value now.  Using 
* the comparison operator will return a Boolean value of 'true'.  a === a1 // prints => true as '==='  checks both the 
* value and type of these two variables are true.
*
* JavaScript non-primitive types are objects.  The JavaScript arrays and functions are also objects.  An object holds a 
* reference/address of a single key-value pair or many key-value pairs.  Whenever we refer to an object, we refer to an 
* address in memory which contains the key-value pair.  If we assign an object 'object1' to another object 'object2', we 
* are actually assigning the address of 'object1' to 'object2' instead of the key-value pair which the 'object1'
* contains in memory.  Let’s see below.
* 
* let object1= { a: 5, a1: 6 };
* 
* let object2 = object1;
*
* The above statement assigns the address of object2 to object1, and not the value { a:5, a1:6 }. Thus with this assignment 
* 'object1' and 'object2' refer to the same address in memory.  When we compare these two objects, we find that both of 
* them refer to the same address in memory.
*
* object1 === object2 // prints => true, as both refer to the same address. 
*
* If we compare two separate objects like below:
*
* let object1= { a: 5, a1: 6 };
*
* let object2 = { a: 5, a1: 6 };
*
* This statement object1 === object2 // prints => false, because both the objects refer to two separate addresses in memory. 
* When we compare two objects, we compare their addresses, not their values.  We have seen above in the case of primitive 
* data types, that when we assign the variable 'a' to variable 'a1', the value of 'a' is copied to 'a1', and not its address 
* which happens in non-primitive data types.  Thus primitive data types refer to a 'single value' in an address in memory 
* whereas non-primitive data types refer to the 'address' in memory which contains single or multiple key-value pair/s.
* 
* All types except objects define immutable values (that is, values which can't be changed). For example (and unlike in C), 
* Strings are immutable.  We refer to values of these types as "primitive values".  Primitive data types are number, string, 
* boolean, NULL, Infinity and symbol.  Non-primitive data types is the Object, which also includes Array and Function.  
*/

//  1.  Boolean type //
// The boolean data type has only two values, true and false.  It is mostly used to check a logical condition. Thus
// Booleans are logical data types which can be used for comparison of two variables or to check a condition. The true and
// false implies a ‘yes’ for ‘true’ and a ‘no’ for ‘false in some places when we check a condition or the existence of a
// variable or a value.

// When we check the data type of ‘true’ or ‘false’ using typeof operator, it returns a boolean.

console.log(typeof true); // prints => boolean
console.log(typeof false); // prints => boolean

// Let’s see an example of comparison statement:

let a = 5;
let b = 6;
console.log(a == b); // prints => false

// A boolean value is also used to check a condition in an expression:

if(a < b){
  console.log('a is a smaller number than b');
}

// If the above condition ‘a < b’ is true, the message will print to the console.

// We can create a new Boolean variable using the Boolean() function.
let check = Boolean(expression);  // If expression evaluates to true, the value of ‘check’ is true, otherwise it is false.
let check = Boolean(a < b); // This expression evaluates to true, thus the value of check is true.

// The Boolean() function converts a non-boolean value to a boolean value.
let myString = 'hi there';
Boolean(myString); // prints => true because the ‘myString’ value exists.

// A Boolean object can be created using the new operator.
let booleanobj = new Boolean(true);

// Here ‘boolleanobj’ is a Boolean object.  Though we can create an object of the primitive data types, ‘number’, 
// ’boolean’ and ‘number’ it is common convention to use the primitive version of these types.

//  2.  Null type //
// The Null type has exactly one value: null.  A null value means no value.  In JavaScript, null is not a “reference to 
// a non-existing object” or a “null pointer” like in some other languages.  It’s just a special value which represents 
// “nothing”, “empty” or “value unknown”. 

let a = null;
console.log(a); // prints => null

console.log(typeof a); // prints => object
// This means the type of a null value is an object, not null.

let age = null;
console.log(age); // prints => null
// The code above states that age is unknown.

//  3.  Undefined type //
// Undefined data type means a variable that is not defined.  The variable is declared but doesn’t contain any value.
// The special value undefined also stands apart. It makes a type of its own, just like null.  The meaning of 
// undefined is “value is not assigned”.  A variable that has not been assigned a value has the value undefined.

let a;
console.log(a); // prints => undefined.
// The variable ‘a’ has been declared but hasn’t been assigned a value yet.
// We can assign a value to a:

a = 5;
console.log(a); // prints => 5

// Technically, it is possible to explicitly assign undefined to a variable:

a = undefined;
console.log(a); // prints => undefined
// This is not recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable,  
// while undefined is reserved as a default initial value for unassigned things.

//  4.  Number type //
// ECMAScript has two built-in numeric types: Number and BigInt.  A number data type can be an integer, a floating 
// point value, an exponential value, a ‘NaN’ or a ‘Infinity’.  There are many operations for numbers, 
// e.g. multiplication *, division /, addition +, subtraction -, and so on.  Mathematical operations are safe. 
// Doing math is “safe” in JavaScript.  We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
// The script will never stop with a fatal error (“die”).  At worst, we’ll get NaN as the result.

let x = 250;  // integer value
let y = 25.5;  // a floating point value or number containing a decimal 
let z = 10e4; //  an exponential value which evaluates to 10*10000;

// There are special numeric values e.g. NaN, Infinity, and -Infinity.
// If a number is divided by 0, the resulting value is infinity.
// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

console.log(9 / 0); // prints => Infinity
console.log(typeof Infinity); // prints => number
console.log(Math.log(0));  // prints => -Infinity

// A ‘NaN’ results when we try to perform an operation on a number with a non-numeric value
console.log('hi' * 9); // prints => NaN
console.log(typeof NaN); // prints => number

// We can also create a number literal by using the Number() function:

let x = Number(9);
console.log(x); // prints => number

// We can create a number object using the ‘new’ operator and the Number() constructor:

let num = new Number(9);
console.log(num); // prints => Number {9}
console.log(typeof num); // prints => object

// Reminder: Though we can create an object of the primitive data types, ‘number’, ’boolean’ and ‘number’ it 
// is common convention to use the primitive version of these types.

//  4a.  BigInt //
// In JavaScript, the “number” type cannot represent integer values larger than (253-1) 
// (that’s 9007199254740991), or less than -(253-1) for negatives. It’s a technical limitation caused by their 
// internal representation.  For most purposes that’s quite enough, but sometimes we need really big numbers,
// e.g. for cryptography or microsecond-precision timestamps.A BigInt value, also sometimes just called a 
// BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the 
// BigInt() constructor (but without the new operator) and giving it an integer value or string value.
// BigInt values are similar to Number values in some ways, but also differ in a few key matters: A BigInt 
// value cannot be used with methods in the built-in Math object and cannot be mixed with a Number value in 
// operations; they must be coerced to the same type. Be careful coercing values back and forth, however, as 
// the precision of a BigInt value may be lost when it is coerced to a Number value.

const bigInt = 1234567890123456789012345678901234567890n;

const sameBigInt = BigInt("1234567890123456789012345678901234567890");

const bigIntFromNumber = BigInt(10); // same as 10n

// BigInt can mostly be used like a regular number, for example:

console.log(1n + 2n); // prints => 3n
console.log(5n / 2n); // prints => 2
console.log(typeof 1n); // prints => bigint

// Note: the division 5/2 returns the result rounded towards zero, without the decimal part. The / operator 
// also works as expected with whole numbers — but operations with a fractional result will be truncated when 
// used with a BigInt value — they won’t return any fractional digits.  All operations on BigInts return BigInts.

// We can’t mix bigints and regular numbers:

console.log(1n + 2); // prints => Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

// We should explicitly convert them if needed: using either BigInt() or Number(), like this:

let bigInt = 1n;
let num = 2;

// number to bigInt
console.log(bigInt + BigInt(num)); // prints => 3n

// bigInt to number
console.log(Number(bigInt) + num); // prints => 3

// The conversion operations are always silent, never give errors, but if the bigint is too huge and won’t fit 
// the number type, then extra bits will be cut off, so we should be careful doing such conversion.
// The unary plus operator +value is a well-known way to convert value to a number.  In order to avoid confusion, 
// it’s not supported on bigints: 

let bigInt = 1n;
console.log(+bigInt); // prints => Uncaught TypeError: Cannot convert a BigInt value to a number

// So we should use Number() to convert a bigint to a number.

// Comparisons A BigInt value is not strictly equal to a Number value, but it is loosely so:

console.log(0n === 0); // prints => false
console.log(0n == 0); // prints => true

// A Number value and a BigInt value may be compared as usual:

console.log(1n < 2); // prints => true
console.log(2n > 1); // prints => true
console.log(2 > 2); // prints => false
console.log(2n > 2); // prints => false
console.log(2n >= 2); // prints => true

// A BigInt value behaves like a Number value in cases where:
// it is converted to a Boolean: via the Boolean function;
// when used with logical operators ||, &&, and !; or
// within a conditional test like an if statement.

if (0n) {
  console.log('Hello from the if!') // This code does not execute because 0n is false.
} else {
  console.log('Hello from the else!') // prints => "Hello from the else!"
}

console.log(0n || 12n); // prints => 12n
console.log(0n && 12n); // prints => 0n
console.log(Boolean(0n)); // prints => false
console.log(Boolean(12n)); // prints => true
console.log(!12n); // prints => false
console.log(!0n); // prints => true

// BigInt values and Number values may be mixed in arrays and sorted:

const mixed = [ 4n, 6, -12n, 10, 4, 0, 0n ]
console.log(mixed.sort()); // prints => [ -12n, 0, 0n, 10, 4n, 4, 6 ]

// The following code won't work since subtraction will not work with mixed types

console.log(mixed.sort((a, b) => a - b)); // prints => Uncaught TypeError: Cannot mix BigInt and other types, 
// use explicit conversions


// sort with an appropriate numeric comparator
console.log(mixed.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))); // prints => [ -12n, 0, 0n, 4n, 4, 6, 10 ]


// 5.  String type //
// A string in JavaScript must be surrounded by quotes.  

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(phrase); // prints => can embed another Hello 

// In JavaScript, there are 3 types of quotes.  The string data type in JavaScript can be any group of characters 
// enclosed by a single or double quotes or by backticks.

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.  
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string 
// by wrapping them in ${…}, for example:

let name = "John";

// embed a variable
console.log(`Hello, ${name}!`); // prints => Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`); // prints => 3

function sum(a, b) {
  return a + b;
}

// embed a function
console.log(`1 + 2 = ${sum(1, 2)}.`); // prints => 1 + 2 = 3.

// The expression inside ${…} is evaluated and the result becomes a part of the string.  We can put anything in 
// there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.  Another 
// advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // prints a multiline list of guests 

// prints => // Guests:
             //  * John
             //  * Pete
             //  * Mary 


// Note that this can only be done in backticks.  Other quotes don’t have this embedding or spanning functionality!

let guestList = "Guests: 
  * John"; // prints => Uncaught SyntaxError: Invalid or unexpected token

// Special characters make it possible to create multiline strings with single and double quotes by using a 
// so-called “newline character”, written as \n, which denotes a line break:

let guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList); // prints a multiline list of guests 

// prints => // Guests:
             //  * John
             //  * Pete
             //  * Mary 

// For example, these two lines are equal, just written differently:

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2); // prints => true

// There are a several other special characters for us to utilize in JavaScript.


// Alternatively, we can use the String() function to create a new string.

let str3 = String('hi');  // This creates a string literal with value 'hi'
console.log(str3); // prints => hi;

// Strings can be treated like an Array of characters.  We can access the individual characters of strings using 
// what's called, Array-syntax, or bracket notation:

let name = 'Blaze';
console.log(name[0]); // prints => B

// The expression name[0] resolves to the first character of the String held in the variable, namem which is B, 
// located at index 0.  If you think of a String, or any Array, like a simple, ordered table, starting at 0:

// indexvalue
// 0    B
// 1    l
// 2    a
// 3    z
// 4    e

// Accessing string characters using Array syntax: name[indexPosition]
console.log(name[1]); // prints => l
console.log(name[4]); // prints => e

// An important pattern to find the last index position of any String or Array
console.log(name[name.length - 1]); // prints => e

// Strings like Arrays also have a variety of built in methods

let myString = "hello!"

console.log(myString.slice(0, 2)); // prints => he
console.log(myString.charAt(0).toUpperCase() + myString.slice(1)); // prints => Hello!


//  6.  Symbol type //
// The ‘symbol’ data type is new in es6. It is one of the new features of es6. The symbol data type defines a 
// property of an object which is private to the object. It refers to the ‘key’ of the key-value pair of an object.

let obj1 = {
   name: 'Shane',
   age: 35,
   city: 'New Orleans'
}
let occupation = Symbol('engineer');

// The function Symbol() is used to create a new symbol. Here we have created a symbol ‘occupation’ with the value 
// ‘engineer’ for the above object ‘obj1’.  Every symbol is unique. Two Symbols even with the same key values are 
// not same.  Symbols are often used to add unique property keys to an object that won’t collide with keys any other 
// code might add to the object, and which are hidden from any mechanisms other code will typically use to access 
// the object.

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log(Symbol('foo') === Symbol('foo')); // prints => false