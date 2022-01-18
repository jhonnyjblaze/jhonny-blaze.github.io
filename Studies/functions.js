/**
* FUNCTIONS:
* Functions are a type of data encapsulating reusable code.  Generally speaking, a function is a "subprogram" that can be called by code external 
* (or internal in the case of recursion) to the function.  Like the program itself, a function is composed of a sequence of statements called the function body. 
* Values can be passed to a function, and the function will return a value.  In JavaScript, functions are first-class objects, because they can have properties 
* and methods just like any other object.  What distinguishes them from other objects is that functions can be called.  In brief, they are Function objects.
*
* Functions are one of the fundamental building blocks in JavaScript.  A function in JavaScript is similar to a procedure—a set of statements that performs a task 
* or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship 
* between the input and the output.  To use a function, you must define it somewhere in the scope from which you wish to call it.
*
* To return a value other than the default, a function must have a return statement that specifies the value to return.  A function without a return statement will 
* return a default value.  In the case of a constructor called with the new keyword, the default value is the value of its this parameter.  For all other functions, 
* the default return value is undefined.
*
* The parameters of a function call are the function's arguments.  Arguments may be passed by value (in the case of primitive values) or by reference 
* (in the case of objects).  This means that if a function reassigns a primitive type parameter, the value won't change outside the function. In the case of an object 
* type parameter, if it's reassigned or mutated, the change will impact outside of the function.  See the following example:
*
* Functions allow us to encapsulate a block of code, and execute that block of code whenever we want and how ever many times we want.  Where Numbers are numeric data, 
* and Strings are character data, you can think of a Function as logic data.  Like a recipe is a set of instructions, so Functions are a list of instructions.  
* Functions encapsulate a block of code.  You can pass around this block of code in your program, and execute the instructions at some later point.
*
* There are two phases of using Functions:
* 1.  declaration/definition: creating the Function.
* 2.  invocation/calling/executing/applying: using the Function.
*/


// Function Definitions
// Before you can use your Function, you must first define your Function.  This is simply the process of designing some code you want to execute when your Function is called.  
// The keyword to declare a Function is, function.

// Function Anatomy/Syntax

function(parameterOne, parameterTwo) {
    // function body: code goes here, NOTE indentation!
  }
  
  
  // Inputs/Output
  // When designing Functions, we can list any number of required inputs.  We call these inputs 
  // parameters, and we list them between the parenthesis, like so:
  
  function(numOne, numTwo) {
    // function body code
  }
  
  // The above Function takes two parameters, parameterOne, parameterTwo.  You should always strive to name your parameters so it's crystal clear what needs to be provided 
  // when executing the Function.  In the above example, it's clear we should pass in two Number values.  Functions return a single output.  By default, Functions will 
  // return undefined.
  
  console.log((function() {}())); // prints => undefined
  
  // Otherwise, we can explicitly return value by using the return keyword followed by a value.
  
  const add = function(numOne, numTwo) {
    return numOne + numTwo;
  }
  
  const sum = add(1, 1);
  console.log(sum); // prints => 2
  
  
  // Syntax for a Named Function, a named function looks like this:
  
  function add(numOne, numTwo) { 
    return numOne + numTwo;
  }
  
  // Above, the name of the Function is add. Named Function definitions are hoisted to the top of their scope, so they can be used in the program before they appear to be 
  // sequentially defined.
  
  const sum = add(1, 1); // add is called before it appears to be defined
  console.log(sum); // prints => 2
  
  function add(numOne, numTwo) {
    return numOne + numTwo;
  }
  
  // To understand hoisting, be aware that before JavaScript begins to execute code in a script, it first sweeps the scope in which it's executing, either the global scope 
  // or the scope of a Function being executed, and hoists into memory named Function definitions and any variables.  This means named Functions can be called before they 
  // appear to be defined.  In the above example, the named Function add() is called before its definition appears sequentially in the code.
  
  
  // Anonymous Functions
  // Many of the above examples are anonymous Functions, meaning they're defined without a name.  Anonymous Functions are typically written while being passed to other 
  // Functions, like so:
  
  function printAlteredString(string, alterString) {
    console.log(alterString(string));
  }
  
  printAlteredString('hello', function(str) { return str.toUpperCase(); }); // prints => "HELLO"
  
  // In the above example, the anonymous Function is defined on the fly as an argument being passed to the Function, printAlteredString().  The anonymous Function gets 
  // plugged into the parameter, alterString, which is then executed and passed to console.log().  The fact that we can pass Function definitions as values to other 
  // Functions is an example of Functions in JavaScript being first class Objects.  This feature provides a great deal of flexibility when writing code.  Above, while 
  // defining the Function printAlteredString(), we're not committing to how we're altering the String.  How we alter the String will happen later, when we call 
  // printAlteredString()!
  
  
  // Function Expressions
  // A Function expression is formed when an anonymous Function is assigned to a variable or constant.  Function expressions are not hoisted onto the beginning of the 
  // scope, therefore they cannot be used before they appear in the code.
  
  const sum = add(1, 1);  // Throws an Error: TypeError: add is not a function or ReferenceError: Cannot access 'add' 
  
  const add = function(numOne, numTwo) {
    return numOne + numTwo;
  };
  
  // Above, trying to call add() before it's assigned will throw an error.  The reason for this should be clear - the constant add is yet to be assigned!  When using the
  // pattern of Function expressions, you can only call the Function after it's been assigned to a variable or constant.  
  
  const add = function(numOne, numTwo) {
    return numOne + numTwo;
  };
  
  const sum = add(1, 1);
  console.log(sum); // prints => 2
  
  // The fact that we can assign Function definitions to a variable or constant is another example of Functions in JavaScript being first class Objects.
  
  
  // Calling a Function
  // To use a Function, we have to call it.  Calling a Function will run the code within the body or code block of the Function.  Executing, invoking, 
  // applying, running are all synonymous with calling a Function/
  
  
  // Arguments (inputs) are what we call the values passed to a Function when we execute the Function.  Said another way parameters are the names for the argument to be 
  // passed to the function.  You can think of arguments like passengers, and parameters like car seats.  If we defined a Function with two parameters, that's two 
  // car-seats.  When we call that Function, we'll pass in two values, that's two passengers, one for each car-seat.  To call a Function, you must reference its name or 
  // the variable name to which its assigned, then pass any values expected. 
  
  const add = function(numOne, numTwo) {
    return numOne + numTwo;
  };
  
  const sum = add(1, 1);
  console.log(sum); // prints => 2
  
  // We can assign the result of a Function to a variable or constant, like we did in the above example.  The result of add(1, 1) was assigned to the constant, sum.
  // Or, we can pass the invocation as a value to another Function as input:
  
  const add = function(numOne, numTwo) {
    return numOne + numTwo;
  };
  
  console.log(add(1, 1)); // prints => 2
  
  // Note: In this regard, all Functions are expressions, because they produce a value!
  
  
  // Function scope
  // Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. 
  // However, a function can access all variables and functions defined inside the scope in which it is defined.  In other words, a function defined in the global 
  // scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent 
  // function, and any other variables to which the parent function has access.
  
  // The following variables are defined in the global scope
  
  var num1 = 20,
      num2 = 3,
      name = 'Chamakh';
  
  
  // This function is defined in the global scope
  
  function multiply() {
    return num1 * num2;
  }
  
  multiply(); // Returns => 60
  
  
  // A nested function example
  
  function getScore() {
    var num1 = 2,
        num2 = 3;
  
    function add() {
      return name + ' scored ' + (num1 + num2);
    }
  
    return add();
  }
  
  getScore(); // Returns => "Chamakh scored 5"
  
  
  // Constructor vs. declaration vs. expression
  // Compare the following:
  
  // A function defined with the Function constructor assigned to the variable multiply:
  
  let multiply = new Function('x', 'y', 'return x * y');
  
  // A function declaration of a function named multiply:
  
  function multiply(x, y) {
     return x * y;
  } // there is no semicolon here
  
  // A function expression of an anonymous function assigned to the variable multiply:
  
  let multiply = function(x, y) {
     return x * y;
  };
  
  // A function expression of a function named func_name assigned to the variable multiply:
  
  let multiply = function func_name(x, y) {
     return x * y;
  };
  
  // Differences
  // All do approximately the same thing, with a few subtle differences:  There is a distinction between the function name and the variable the function is 
  // assigned to. The function name cannot be changed, while the variable the function is assigned to can be reassigned. The function name can be used only 
  // within the function's body. Attempting to use it outside the function's body results in an error (or undefined if the function name was previously 
  // declared via a var statement). For example:
  
  var y = function x() {};
  console.log(x); // throws an error
  
  
  // Nested functions and closures
  // You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.  It also forms a closure. 
  // A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables 
  // (that "closes" the expression).  Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of 
  // its containing function. In other words, the inner function contains the scope of the outer function.  
  
  // To summarize:
  // The inner function can be accessed only from statements in the outer function.  The inner function forms a closure: the inner function can use the
  // arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
  
  //The following example shows nested functions:
  
  function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  
  a = addSquares(2, 3); // returns => 13
  b = addSquares(3, 4); // returns => 25
  c = addSquares(4, 5); // returns => 41
  
  // Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:
  
  function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  
  fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  
  result = fn_inside(5); // returns => 8
  
  result1 = outside(3)(5); // returns => 8
  
  // Preservation of variables
  // Notice how x is preserved when inside is returned.  A closure must preserve the arguments and variables in all scopes it references.  Since each call 
  // provides potentially different arguments, a new closure is created for each call to outside. The memory can be freed only when the returned inside is 
  // no longer accessible.  This is not different from storing references in other objects, but is often less obvious because one does not set the 
  // references directly and cannot inspect them.
  
  
  // Multiply-nested functions
  // Functions can be multiply-nested. For example:
  
  // A function (A) contains a function (B), which itself contains a function (C).  Both functions B and C form closures here. So, B can access A, and C can access B.
  // In addition, since C can access B which can access A, C can also access A.  Thus, the closures can contain multiple scopes; they recursively contain the scope
  // of the functions containing it. This is called scope chaining. (The reason it is called "chaining" is explained later.)
  
  // Consider the following example:
  
  function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // prints => 6 (1 + 2 + 3)
  
  // In this example, C accesses B's y and A's x.
  
  // This can be done because:
  
  // B forms a closure including A (i.e., B can access A's arguments and variables).  C forms a closure including B.  Because B's closure includes A, C's closure includes A, 
  // C can access both B and A's arguments and variables.  In other words, C chains the scopes of B and A, in that order.  The reverse, however, is not true. A cannot 
  // access C, because A cannot access any argument or variable of B, which C is a variable of. Thus, C remains private to only B.
  
  
  // Name conflicts
  // When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. More nested scopes take precedence. So, the inner-most scope 
  // takes the highest precedence, while the outer-most scope takes the lowest. This is the scope chain. The first on the chain is the inner-most scope, and the last is the 
  // outer-most scope. Consider the following:
  
  function outside() {
    var x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  outside()(10); // returns 20 instead of 10
  
  // The name conflict happens at the statement return x * 2 and is between inside's parameter x and outside's variable x.  The scope chain here is {inside, outside, global 
  // object}.  Therefore, inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).
  
  // Closures
  // Closures are one of the most powerful features of JavaScript.  JavaScript allows for the nesting of functions and grants the inner function full access to all the 
  // variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).  However, the outer function 
  // does not have access to the variables and functions defined inside the inner function.  This provides a sort of encapsulation for the variables of the inner function.
  // Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the 
  // duration of the outer function execution, if the inner function manages to survive beyond the life of the outer function. A closure is created when the inner function
  // is somehow made available to any scope outside the outer function.
  
  var pet = function(name) {   // The outer function defines a variable called "name"
    var getName = function() {
      return name;             // The inner function has access to the "name" variable of the outer function
    }
    return getName;            // Return the inner function, thereby exposing it to outer scopes
  }
  myPet = pet('Vivie');
  
  myPet();                     // Returns "Vivie"
  
  
  // It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.
  
  var createPet = function(name) {
    var sex;
  
    return {
      setName: function(newName) {
        name = newName;
      },
  
      getName: function() {
        return name;
      },
  
      getSex: function() {
        return sex;
      },
  
      setSex: function(newSex) {
        if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
          newSex.toLowerCase() === 'female')) {
          sex = newSex;
        }
      }
    }
  }
  
  var pet = createPet('Vivie');
  pet.getName();                  // Vivie
  
  pet.setName('Oliver');
  pet.setSex('male');
  pet.getSex();                   // male
  pet.getName();                  // Oliver
  
  // In the code above, the name variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables 
  // except through the inner functions. The inner variables of the inner functions act as safe stores for the outer arguments and variables. They hold 
  // "persistent" and "encapsulated" data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.
  
  
  // A function defined by a function expression or by a function declaration inherits the current scope. That is, the function forms a closure. On the other hand, 
  // a function defined by a Function constructor does not inherit any scope other than the global scope (which all functions inherit).
  
  /*
   * Declare and initialize a variable 'p' (global)
   * and a function 'myFunc' (to change the scope) inside which
   * declare a varible with same name 'p' (current) and
   * define three functions using three different ways:-
   *     1. function declaration
   *     2. function expression
   *     3. function constructor
   * each of which will log 'p'
   */
  
  var p = 5;
  function myFunc() {
      var p = 9;
  
      function decl() {
          console.log(p);
      }
      var expr = function() {
          console.log(p);
      };
      var cons = new Function('\tconsole.log(p);');
  
      decl();
      expr();
      cons();
  }
  myFunc();
  
  /*
   * Logs:-
   * 9  - for 'decl' by function declaration (current scope)
   * 9  - for 'expr' by function expression (current scope)
   * 5  - for 'cons' by Function constructor (global scope)
   */
  
  // Functions defined by function expressions and function declarations are parsed only once, while those defined by the Function constructor are not. That is, 
  // the function body string passed to the Function constructor must be parsed each and every time the constructor is called. Although a function expression 
  // creates a closure every time, the function body is not reparsed, so function expressions are still faster than "new Function(...)". Therefore the Function 
  // constructor should generally be avoided whenever possible.
  
  
  function makePerson(nameFirst, nameLast) {
    var friends = [];
    
    return {
      nameFirst: nameFirst,
      nameLast: nameLast,
      addFriends: function() {
        Array.prototype.push.apply(friends, Array.prototype.slice.call(arguments));
      }, 
      getNumFriends: function() {
        return friends.length;
      },
      getFriendsNames: function() {
        return friends.map(function(friend) {
          return friend.nameFirst + ' ' + friend.nameLast;
        })
        .join(', ');
      }
    };
  }
  
  // Above, when invoking makePerson(), the inner Function definitions of addFriends(), getNumFriends(), getFriendNames() form closures that carry with them a 
  // reference to the Array stored in the friends variable.  Below because we keep the person-Object returned from the call to makePerson() in a variable, 
  // for example, john, we've created a private member.  The friends Array is available only through the API of the person-Object.  Client code does not have 
  // direct access to the friends Array, but as you can see below, it is ALIVE!
  
  var john = makePerson('John', 'Doe');
  var alice = makePerson('Alice', 'Green');
  var greg = makePerson('Greg', 'Brady');
  john.addFriends(greg, alice);
  console.log(john.getFriendNames());
  
  
  // Note to learn more about Functions in JavaScript visit the MDN pages below:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions