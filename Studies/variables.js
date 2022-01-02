/**
* Variables:
*
* 0.  In JavaScript, you can create 3 types of variables: using const, let, and var statements.  Each 
* variable type has different behavior regarding the declaration, initialization, value access, and 
* assignment steps.  A variable is a named reference for a value. A value in JavaScript can be either 
* a primitive or an object.  The variable name is called the identifier.  An identifier can be anything 
* but best practice is to name it something that contextually refers to the value it references.  An 
* identifier can contain letters, digits (0-9) and the special symbols $ and _.  An identifier cannot 
* start with a digit.  Examples of valid identifiers are myNumber, my_number, list1, $item, _name, a, b, 
* $, _.  Examples of invalid identifiers are 1number (identifiers cannot start with digits), my-number 
* (- is not one of the special symbols allowed in an identifier).  JavaScript also has a list of reserved 
* keywords none of which can be used as an identifier such as the keywords function, break, const, and for. 
* Lastly identifiers are case sensitive, so myNumber and mynumber are different identifiers.  One last thing 
* camelCase is the casing convention for JavaScript identifiers.  This is not camelCase => mynumber. This is 
* also not camelCase => MyNumber.  This is proper camelCase => myNumber. 
*
* 1.  There are 3 ways to declare variables in JavaScript: const, let, and var statements.  The var statement 
* declares a function-scoped or globally-scoped variable, optionally initializing it to a value.  The let 
* statement declares a block-scoped local variable, optionally initializing it to a value. The const statement 
* declares a block-scoped variable, much like variables declared using the let keyword.  The value of a 
* constant CANNOT be changed through re-assignment (i.e. by using the assignment operator), and it cannot be 
* redeclared (i.e. through a variable declaration).  However, if a constant is an object or an array its 
* properties or items can be updated or removed.
*
* 2.  There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. Declaration & Initialization or Assignment //
// Here's why we CANNOT declare a const variable with a name identifier without also initializing it.
// JavaScript requires const statements to be initialized or assigned at declaration.
const myName; 
// JavaScript describes the above code with the SyntaxError: Missing initializer in const declaration
console.log(myName); // prints => Uncaught ReferenceError: myName is not defined

// Here's how to declare and initialize a const variable with the identifier myName and the value 'jblaze'.
// Declares a const variable with the identifier myName initialized with the string literal 'jblaze'.
const myName = 'jblaze';
console.log(myName); // prints => jblaze
// Unlike the let and var variables below, you must assign the initial value to const variables right away.

// Here's how to declare a var variable with the identifier myName.
// Declares a var variable with the identifier myName.
var myName;
console.log(myName); // prints => undefined
// JavaScript considers uninitialized variables as having the special value undefined.

// Here's how to declare and initialize a var variable with the identifier myName and the value 'jblaze'.
var myName = 'jblaze';
console.log(myName); // prints => jblaze

// Here's how you can declare a let variable with the identifier myName.
// Declares a let variable with the identifier myName.
let myName;
console.log(myName); // prints => undefined
// JavaScript considers uninitialized variables as having the special value undefined.

// Here's how to declare and initialize a let variable with the identifier myName and the value 'jblaze'.
let myName = 'jblaze';
console.log(myName); // prints => jblaze

// 2. Re-assignment
// Here's how to change or update the value of a previously assigned variable declared with let or var.
myName = 'bob'
console.log(myName); // prints => bob
// Reminder: JavaScript does not allow a variable declared with const to be re-assigned.

/**
* HOISTING:
* JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of 
* functions, variables or classes to the top of their scope, prior to execution of the code.  So before
* statements of a program are executed all var declarations are dragged up to the top of the program 
* (or 'hoisted to the top').  let and const values are NOT hoisted and therefore if you try referencing 
* them before they are declared, you get a Reference Error.  Hoisting allows functions to be safely used 
* in code before they are declared.  Variable and class declarations are also hoisted, so they too can be 
* referenced before they are declared.  Note that doing so can lead to unexpected errors, and is not 
* generally recommended. 
*
* Variable hoisting
* Hoisting works with variables too, so you can use a variable in code before it is declared and/or 
* initialized.  However JavaScript only hoists declarations, not initializations! This means that 
* initialization doesn't happen until the associated line of code is executed, even if the variable was 
* originally initialized then declared, or declared and initialized in the same line.  Until that point 
* in the execution is reached the variable has its default initialization (undefined for a variable 
* declared using var, otherwise uninitialized).
*
* var hoisting
* Here we declare then initialize the value of a var after using it. The default initialization of the 
* var is undefined.
* 
*    console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
*    var num; // Declaration
*    num = 6; // Initialization
*    console.log(num); // Returns 6 after the line with initialization is executed.
*
* The same thing happens if we declare and initialize the variable in the same line.
*
*    console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
*    var num = 6; // Initialization and declaration.
*    console.log(num); // Returns 6 after the line with initialization is executed.
*
* If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted. 
* Trying to read the variable before it is initialized results in ReferenceError exception.
*
*    console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
*    num = 6; // Initialization
*
* Note however that initialization also causes declaration (if not already declared). The code snippet 
* below will work, because even though it isn't hoisted, the variable is initialized and effectively 
* declared before it is used.
*
*    a = 'Cran'; // Initialize a
*    b = 'berry'; // Initialize b
*
*    console.log(a + "" + b); // 'Cranberry'
*
* let and const hoisting 
* Variables declared with let and const are also hoisted but, unlike var, are not initialized with a 
* default value.  An exception will be thrown if a variable declared with let or const is read before 
* it is initialized.  
*
*    console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
*    let num = 6; // Initialization
*
* Note that it is the order in which code is executed that matters, not the order 
* in which it is written in the source file. The code will succceed provided the line that initializes 
* the variable is executed before any line that reads it.
*
* Temporal dead zone (TDZ)
* let variables cannot be read/written until they have been fully initialized, which happens when they 
* are declared (if no initial value is specified on declaration, the variable is initialized with a 
* value of undefined). Accessing the variable before the initialization results in a ReferenceError.
*
* Note: This differs from var variables, which will return a value of undefined if they are accessed 
* before they are declared.
*
* The variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until the 
* initialization has completed.
*
*    { // TDZ starts at beginning of scope
*      console.log(bar); // undefined
*      console.log(foo); // ReferenceError
*      var bar = 1;
*      let foo = 2; // End of TDZ (for foo)
*    }
*
* The term "temporal" is used because the zone depends on the order of execution (time) rather than the 
* order in which the code is written (position). For example, the code below works because, even though 
* the function that uses the let variable appears before the variable is declared, the function is 
* called outside the TDZ.
*
*    {
*        // TDZ starts at beginning of scope
*        const func = () => console.log(letVar); // OK
*
*        // Within the TDZ letVar access throws `ReferenceError`
*
*        let letVar = 3; // End of TDZ (for letVar)
*        func(); // Called outside TDZ!
*    }
*
*
*
* 1. Conceptually variable hoisting is often presented as the interpreter "splitting variable declaration 
* and initialization, and moving (just) the declarations to the top of the code".
*
* 2. Constants and lets are block scoped meaning they are pinned to the code block in which they are declared/assigned.
*/