/**
* VARIABLES:
*
* 0.  In JavaScript programming, variables are named containers for reassignable values.  Variables are 
* called so because once created (declared), we can CHANGE the value (and type of value) they contain.
* Variables are named identifiers that can point to values of a particular type, like a Number, String, 
* Boolean, Array, Object or another data-type. Variables store the special data value undefinded by 
* default.  We store or reference to a piece of data in a container utilizing the Assignment Operator (=) 
* to assign the variable.  Variables are bound to a section of our program, called a scope.  A function 
* serves as a closure in JavaScript, and thus creates a (local) scope, so that (for example) a variable 
* defined exclusively within the function cannot be accessed from outside the function or within other 
* functions.  However, if a variable statement is declared outside of a function, it has a (global) scope 
* meaning it may be accessed anywhere in the program or application.  Variables are used to hold values 
* in computer memory during the life-cycle of a computer program.  Variables allow us to give a name to 
* data whose value is unknown until runtime.  Data is either user-generated, hard-coded, or calculated by 
* the program itself. In order to hold data in memory within our program we need to assign them to a 
* variable, or, in ES6, a constant or let.
*
* 1.  To create a variable we use the keyword, var, followed by a name (id or alias) for our variable.
* The name must start with a letter ("&" and "_" are the exceptions and should be avoided if possible). 
* Names are case sensitive and there is a Camel Case naming convention where the first word is lowercase. 
* Each word that follows is capitalized.  The name SHOULD relate to the Data being stored but it is not 
* a requirement. This is called a var statement.
*
* 2. There are 2 steps (phases) to using variables: 1. Declaration and 2. Assignment 
*/

/*
// 1. Declaration //
// The container or variable named myName is undefined because it has NOT been assigned a value. 

var myname; // => This is not camelCase.
var MyName; // => This is also not camelCase.

var myName; // => This is camelCase.
console.log(myName); // prints => undefined


// 2. Assignment or Initialization //
// When you assign a value to an undeclared variable the variable ceases to be undefined.

myName = 'jblaze'; // jblaze is a String type value assigned to the myName variable
console.log(myName); // prints  => 'jblaze'


// 3. Re-assignment //
// Changing or updating the value of a previously assigned variable gives it the updated value.
myName = false; // false is a Boolean type value assigned to the myName variable
console.log(myName); // prints => false


/**
* LETS:
*
* 0. The let statement declares a block-scoped local variable, optionally initializing it to a value.
* let allows you to declare variables that are limited to the scope of a block statement, or expression 
* on which it is used, unlike the var keyword, which declares a variable globally, or locally to an 
* entire function regardless of block scope. The other difference between var and let is that the latter 
* is initialized to a value only when a parser evaluates it.  Variables declared by let have their scope 
* in the block for which they are declared, as well as in any contained sub-blocks. In this way, let 
* works very much like var. The main difference is that the scope of a var variable is the entire 
* enclosing function:
*
* function varTest() {
*   var x = 1;
*   {
*     var x = 2;  // same variable!
*     console.log(x);  // 2
*   }
*   console.log(x);  // 2
* }
*
* function letTest() {
*   let x = 1;
*   {
*     let x = 2;  // different variables!
*     console.log(x);  // 2
*   }
*   console.log(x);  // 1
* }
*
* 1. Containers for reassignable values; they are NOT hoisted to their code block
*
* 2. There are 2 steps (phases) of using let: declaration and initialization (or assignment).
*/

/*
// 1. Declaration //
// The container or variable named myName is undefined because it has NOT been assigned a value. 

let myname; // => This is not camelCase.
let MyName; // => This is also not camelCase.

let myName; // => This is camelCase.
console.log(myName); // prints => undefined


// 2. Assignment or Initialization //
// When you assign a value to an undeclared let statement the variable ceases to be undefined.

myName = 'jblaze'; // jblaze is a String type value assigned to the myName variable
console.log(myName); // prints  => 'jblaze'


// 3. Re-assignment //
// Changing or updating the value of a previously assigned let statement gives it the updated value.
myName = false; // false is a Boolean type value assigned to the myName variable
console.log(myName); // prints => false


/**
* CONSTANTS:
*
* 0. Containers whose values can never change are called a const statement.  Constants are created 
* using the keyword const and must be assigned a value immediately. Constants are block-scoped, much 
* like variables declared using the let keyword.  The value of a constant can't be changed through 
* reassignment (i.e. by using the assignment operator), and it can't be redeclared 
* (i.e. through a variable declaration).  However, if a constant is an object or array its properties 
* or items can be updated or removed.  Constants can be declared with uppercase or lowercase, but a 
* common convention is to use all-uppercase letters. An initializer for a constant is required. 
*
* 1. Const statements MUST be initialized upon declaration.  You must specify its value in the same 
* statement in which it's declared.
*
* 2. The const declaration creates a read-only reference to a value.  It does not mean the value 
* it holds is immutable—just that the variable identifier cannot be reassigned. For instance, in the 
* case where the content is an object, this means the object's contents (e.g., its properties) can be 
* altered.
*/


// 1. Declaration //
// You cannot declare a container or variable name for a const statement without also assigning a value. 
const YOUR_NAME; // => This is all-uppercase but it is missing an assignment to a value.
console.log(YOUR_NAME); // prints => error


// 2. Assignment or Initialization //
// You also cannot assign a value to a declared const statement after the declaration.
YOUR_NAME = 'Not Blaze'; // Not Blaze is a String type value assigned to the YOUR_NAME variable
console.log(YOUR_NAME); // prints  => 'error' likely SyntaxError: Missing initializer in const declaration


// 3. Declaration & Assignment //
// You must declare and assign in the same const statement.
const YOUR_NAME = 'Not Blaze';
console.log(YOUR_NAME); // prints  => 'Not Blaze'

// 4. Re-assignment //
// Changing or updating the value of a previously assigned constant is NOT allowed.
YOUR_NAME = false; // This is not allowed and causes an error, likely TypeError: Assignement to constant variable.


/**
* HOISTING:
*
* 0. Hoisting variables refers to our ability to use our variables in code before declaration and/or 
* initialization. So before statements of a program are executed all var declarations are dragged up to 
* the top of the program (or 'hoisted to the top').  let and const values are NOT hoisted and therefore 
* if you try referencing them before they are declared, you get a Reference Error.  However JavaScript 
* only hoists declarations, and NOT initializations! This means that initialization doesn't happen until 
* the associated line of code is executed, even if the variable was originally initialized then declared, 
* or declared and initialized in the same line. Until that point in the execution is reached the variable 
* has its default initialization (undefined for a variable declared using var, otherwise uninitialized). 
*
* 1. Conceptually variable hoisting is often presented as the interpreter "splitting variable declaration 
* and initialization, and moving (just) the declarations to the top of the code".
*
* 2. Constants are block scoped meaning they are pinned to the code block in which they are declared/assigned.
*/