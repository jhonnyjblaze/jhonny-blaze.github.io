/**
* LOOPS AND ITERATION:
*
* Loops offer a quick and easy way to do something repeatedly.  In this guide we introduce the different iteration statements 
* available to JavaScript.  You can think of a loop as a computerized version of the game where you tell someone to take X 
* steps in one direction, then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this 
* way as a loop:
*
* for (let step = 0; step < 5; step++) {
*  // Runs 5 times, with values of step 0 through 4.
*  console.log('Walking east one step');
* }
*
* There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.  
* (Note that it's possible that number could be zero!).  The various loop mechanisms offer different ways to determine the start 
* and end points of the loop. There are various situations that are more easily served by one type of loop over the others.
*/


// while statement
// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.  The 
// condition is evaluated before executing the statement.  A while statement looks as follows:

while (condition) {
  statement
}

// If the condition evaluates to false or falsey, the statement inside the loop stops executing and control passes to the statement 
// following the loop.  The condition test occurs before statement in the loop is executed. If the condition returns true, statement 
// is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the 
// statement following while.

let result = '';
let i = -1;

while (i < 9) {
  i = i + 1;
  result = result + i;
}

console.log(result); // prints => "0123456789"

let result = '';
let i = 10;

while (i > 0) {
  i = i - 1;
  result = result + i;
}

console.log(result); // prints => "9876543210"

let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = -1;

while (i < 9) {
  i = i + 1;
  console.log(result[i]); // prints => 0
}                         //           1
                          //           2
                          //           3
                          //           4 
                          //           5
                          //           6
                          //           7
                          //           8
                          //           9

let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 10;

while (i > 0) {
  i = i - 1;
  console.log(result[i]);  // prints => 9
}                          //           8
                           //           7
                           //           6
                           //           5
                           //           4
                           //           3
                           //           2
                           //           1
                           //           0


// The following while loop iterates as long as n is less than 3:

let n = 0;
let x = 0;
while (n < 3) { // true
  n++; // => n = 1
  x += n; // => x = 1
}

// After one iteration/loop

let n = 1;
let x = 1;
while (1 < 3) { // true
  1++; // => n = 2
  1 += n; // => x = 3
}

// After two iterations/loops

let n = 2;
let x = 3;
while (2 < 3) { // true
  2++; // => n = 3
  3 += n; // => x = 6
}

// After three iterations/loops

let n = 3;
let x = 6;
while (3 < 3) { // false: thus the while loop terminates (self-destructs) and the code block/statements stop executing
  3++;
  6 += n;
}


// Avoid infinite loops at all cost!  Make sure the condition in a loop eventually becomes false—otherwise, the loop will never terminate!  
// The statements in the following while loop execute forever because the condition never becomes false:

// Infinite loops are horrifying!
while (true) { // condition is always true
  console.log('Hello, world!'); // never stops printing (i.e. infinite loop)  => "Hello, world!"
}

// Note to learn more about while statments visit the MDN page at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


// do...while statement
// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false.  The condition is 
// evaluated after executing the statement, resulting in the specified statement executing at least once.  A do...while statement looks as follows:

do
  statement
while (condition);

// statement is always executed once before the condition is checked.  If condition is true, the statement executes again. At the end of every execution, 
// the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.

let result = '';
let i = -1;

do {
  i = i + 1;
  result = result + i;
} while (i < 9);

console.log(result); // prints => "0123456789"

let result = '';
let i = 10;

do {
  i = i - 1;
  result = result + i;
} while (i > 0);

console.log(result); // prints => "9876543210"

let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 10;

do {
  i = i - 1;
  console.log(result[i]); // prints => 9
} while (i > 0);          //           8
                          //           7
                          //           6
                          //           5
                          //           4
                          //           3
                          //           2
                          //           1
                          //           0

let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = -1;

do {
  i = i + 1;
  console.log(result[i]); // prints => 0
} while (i < 9);          //           1
                          //           2
                          //           3
                          //           4
                          //           5
                          //           6
                          //           7
                          //           8
                          //           9
                           
// Note to learn more about do...while statments visit the MDN page at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while


// for statement
// The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement 
// (usually a block statement) to be executed in the loop.  A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is 
// similar to the Java and C for loop.  A for statement looks as follows:

for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
  statement
}

/*
When a for loop executes, the following occurs:

1.  The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an 
    expression of any degree of complexity. This expression can also declare variables.
2.  The conditionExpression expression is evaluated. If the value of conditionExpression is true, the loop statements execute. If the value of condition is false, 
    the for loop terminates. (If the condition expression is omitted entirely, the condition is assumed to be true.)
3.  The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
4.  If present, the update expression incrementExpression is executed.
5.  Control returns to Step 2.
*/

let str = '';

for (let i = 0; i < 10; i++) {
  str = str + i;
}

console.log(str); // prints => "0123456789"

let str = '';

for (let i = 9; i > -1; i--) {
  str = str + i;
}

console.log(str); // prints => "9876543210"


let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < 10; i++) {
  console.log(result[i]); // prints => 0
}                         //           1
                          //           2
                          //           3
                          //           4
                          //           5
                          //           6
                          //           7
                          //           8
                          //           9

let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 9; i > 0; i--) {
  console.log(result[i]); // prints => 9
}                         //           8
                          //           7
                          //           6
                          //           5
                          //           4
                          //           3
                          //           2
                          //           1
                          //           0


// All three expressions in the head of the for loop are optional.  For example, in the initialization block it is not required to initialize variables: 

let str = '';
let i = 0;

for (; i < 10; i++) {
  str = str + i;
}

console.log(str); // prints => "0123456789"


// Like the initialization block, the condition block is also optional. If you are omitting this expression, you must make sure to break the loop in the 
// body in order to not create an infinite loop.

let str = '';

for (let i = 0;; i++) {
  str = str + i;
  if (i > 8) break;
}

console.log(str); // prints => "0123456789"


// You can also omit all three blocks. Again, make sure to use a break statement to end the loop and also modify (increase) a variable, so that the condition 
// for the break statement is true at some point.

let str = '';
let i = 9

for (;;) {
  str = str + i;
  if (i < 1) break;
  i--
}

console.log(str); // prints => "9876543210"

// Note to learn more about for statments visit the MDN page at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for


// for...in statement (looping/iterating over an Object)
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including 
// inherited enumerable properties.  A for...in statement looks as follows:

//variable
// A different property name is assigned to variable on each iteration.

// object
// Object whose non-Symbol enumerable properties are iterated over.

for (variable in object) {
  statement
}


const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`); // prints => "a: 1"
}                                                  //           "b: 2"
                                                   //           "c: 3"


var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`); // prints => "obj.a = 1"
}                                            //           "obj.b = 2"
                                             //           "obj.c = 3"

// Note: Arrays: Although it may be tempting to use this as a way to iterate over Array elements, the for...in statement will return 
// the name of your user-defined properties in addition to the numeric indexes.  Therefore, it is better to use a traditional for loop 
// with a numeric index when iterating over arrays, because the for...in statement iterates over user-defined properties in addition 
// to the array elements, if you modify the Array object (such as adding custom properties or methods).

// Note to learn more about for...in statments visit the MDN page at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in



// for...of statement (looping/iterating over array-like objects)
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects 
// (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.  It invokes a custom iteration hook with statements 
// to be executed for the value of each distinct property of the object.

for (variable of iterable) {
  statement
}

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element); // prints => "a"
}                       //           "b"
                        //           "c"


const iterable = 'boo';

for (const value of iterable) {
  console.log(value); // prints => "b"
}                     //           "o"
                      //           "o"


// You can use let instead of const too, if you reassign the variable inside the block.

const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value); // prints => 11
}                     //           21
                      //           31


// The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, 
// for...of iterates over property values:

const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // prints => "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // prints => 3, 5, 7
}

// Note to learn more about for...of statments visit the MDN page at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of