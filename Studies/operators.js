/**
* OPERATORS: 
* 0.  In computer programming generally and JavaScript specifically, operators are constructs defined within 
* programming languages which behave generally like functions, but which differ syntactically or semantically.  
* Common simple examples include arithmetic (e.g. addition with +), comparison (e.g. "greater than" with >), and 
* logical operations (e.g. AND, written && in JavaScript).  Operators are reserved syntax consisting of punctuation 
* or alphanumeric characters that carries out built-in functionality. For example, in JavaScript the addition 
* operator ("+") adds numbers together and concatenates strings, whereas the "not" operator ("!") negates an 
* expression — for example making a true statement return false.  Operators act on program data, like assign data 
* to a variable or comparing data or executing arithmetic operations.  Operators are classed by what action they do 
* and how many operands they require.  Operands are the data or values that operators act upon, unary operators act 
* upon one value, binary upon two values, and ternary upon three values.  An operator performs some operation on 
* single or multiple operands (data value) and produces a result.
*
* 1.  There are a variety of different types of operators.  In this guide we will focus on assignment, comparison, 
* arithmetic, logical, string, conditional (ternary), and unary operators.
*
* 2.  For the comprehensive list of JavaScript operators or a more in depth explanation of an operator in this guide
* please visit MDN at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
*/


// 1.  Assignment operator //
// Assignment operators are used to assign values to variables.  
// For example, const x = 5; Here, the = operator is used to assign value 5 to variable x.

/*

  Operator	 Name	                         Example
  
  =	         Assignment operator	         a = 9;     => 9
  
  // The simple assignment operator (=) is used to assign a value to a variable.  The assignment operation evaluates 
  // to the assigned value.  Chaining the assignment operator is possible in order to assign a single value to 
  // multiple variables.
  
  +=	     Addition assignment	         a += 5;    => a = 14 b/c 14 = 9 += 5;
  
  // The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result 
  // to the variable.  The types of the two operands determine the behavior of the addition assignment operator.  
  // Addition or concatenation is possible.
  
  -=	     Subtraction Assignment	         a -= 2;    => a = 12 b/c 12 = 14 -= 2;
  
  // The subtraction assignment operator (-=) subtracts the value of the right operand from a variable and assigns 
  // the result to the variable.
 
  *=	     Multiplication Assignment       a *= 3;    => a = 36 b/c 36 = 12 *= 3;
  
  // The multiplication assignment operator (*=) multiplies a variable by the value of the right operand and assigns 
  // the result to the variable.
  
  /=	     Division Assignment	         a /= 2;    => a = 18 b/c 18 = 36 /= 2;
  
  // The division assignment operator (/=) divides a variable by the value of the right operand and assigns the 
  // result to the variable.
  
  %=	     Remainder Assignment	         a %= 5;    => a = 3 b/c 3 = 18 %= 5;
  
  // The remainder assignment operator (%=) divides a variable by the value of the right operand and assigns the 
  //remainder to the variable.
  
  **=	     Exponentiation Assignment	     a **= 3;   => a = 9 b/c 9 = 3 **= 3;
  
  // The exponentiation assignment operator (**=) raises the value of a variable to the power of the right operand.
  
  // Note: There are a few more assignment operators available in JavaScript.  You can learn more about them at MDN
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators

*/


// 2.  Arithmetic operators //
// Arithmetic operators are used to perform arithmetic calculations. 
// For example, const number = 3 + 5; => 8 Here, the + operator is used to add the two operands.
// Here, the comparison operator > is used to compare whether a is greater than b.

/*

// An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single 
// numerical value.  

  Operator   Name	                         Example
  
  +	         Addition	                     3 + 5;         => 8
  -	         Subtraction	                 5 - 3;         => 2
  *	         Multiplication	                 4 * 2;         => 8
  /	         Division	                     4 / 2;         => 2
  
  // The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/).  These 
  // operators work as they do in most other programming languages when used with floating point numbers (in particular, 
  // note that division by zero produces Infinity).
  
  %	         Remainder	                     5 % 2;         => 1
  
  // Binary Operator. Returns the integer remainder of dividing the two operands.
  
*/


// 3.  Relational or Comparison Operators //
// A comparison operator compares its operands and returns a boolean value based on whether the comparison is true.
// < Less than operator.  > Greater than operator.  <= Less than or equal operator.  >= Greater than or equal operator.

// Comparison operators 
// Compare two values and return a boolean value, either true or false.  
// For example, const a = 3, b = 2; console.log(a > b); => true
// Note: => is not an operator, but the notation for Arrow functions.

/*

  Operator	 Description	                 Example
  
  >	         Greater than: true if left      x > y 
             operand is greater than the 
             right operand	
             
  >=	     Greater than or equal to:       x >= y 
             true if left operand is 
             greater than or equal to the 
             right operand	
             
  <	         Less than: true if the left     x < y
             operand is less than the 
             right operand	
             
  <=	     Less than or equal to: true     x <= y 
             if the left operand is less 
             than or equal to the right 
             operand

*/


// in operator //
// The in operator determines whether an object has a given property.  The in operator returns true if the 
// specified property is in the specified object or its prototype chain.

/*

// Object
const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);  // expected output: true

delete car.make;

if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);  // expected output: "Suzuki"

// Array
let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']
0 in trees        // returns true
3 in trees        // returns true
6 in trees        // returns false
'bay' in trees    // returns false (you must specify the index number, not the value at that index)
'length' in trees // returns true (length is an Array property)

*/

// instanceof operator //
// The instanceof operator determines whether an object is an instance of another object.  The instanceof operator tests 
// to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.  The return 
//value is a boolean value.

/*

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);  // expected output: true

console.log(auto instanceof Object);  // expected output: true


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let mycar = new Car('Honda', 'Accord', 1998)
let a = mycar instanceof Car     // returns true
let b = mycar instanceof Object  // returns true


let literalString = 'This is a literal string';
let stringObject  = new String('String created with constructor');

literalString instanceof String;  // false, string literal is not a String
stringObject  instanceof String;  // true

literalString instanceof Object;  // false, string literal is not an Object
stringObject  instanceof Object;  // true

stringObject  instanceof Date;    // false


let myDate = new Date();

myDate instanceof Date;      // true
myDate instanceof Object;    // true
myDate instanceof String;    // false

*/

// Equality operators
// The result of evaluating an equality operator is always of type boolean based on whether the comparison is true.
// (==) Equality operator.  (!=) Inequality operator.  (===) Strict equality operator.  (!==) Strict inequality operator.

/*
 
  Operator	 Description	                    Example
  
  ==	     Equal to: returns true if the      x == y 
             operands are equal	
                                             
                                                More Examples
                                                
                                                "1" ==  1;            // true
                                                1 == "1";             // true
                                                0 == false;           // true
                                                0 == null;            // false
                                                0 == undefined;       // false
                                                0 == !!null;          // true, look at Logical NOT operator
                                                0 == !!undefined;     // true, look at Logical NOT operator
                                                null == undefined;    // true
                                                
                                                const object1 = {"key": "value"};
                                                const object2 = {"key": "value"};
                                                
                                                   object1 == object2 // false
                                                   object2 == object2 // true   
               
  !=	     Not equal to: returns true if      x != y
             the operands are not equal	     
             
                                                More Examples
                                                
                                                1 != 2;              // true
                                                "hello" != "hola";   // true
                                                1 != 1;              // false
                                                "hello" != "hello";  // false
                                                
                                                "1" !=  1;            // false
                                                0 != false;           // false
                                                0 != null;            // true
                                                0 != undefined;       // true
                                                0 != !!null;          // false, look at Logical NOT & Double NOT operator
                                                0 != !!undefined;     // false, look at Logical NOT & Double NOT operator
                                                null != undefined;    // false
                                                
                                                const number1 = new Number(3);
                                                const number2 = new Number(3);
                                                
                                                number1 != 3;         // false
                                                number1 != number2;   // true
                                                
                                                const object1 = {"key": "value"};
                                                const object2 = {"key": "value"};
                                                
                                                   object1 != object2 // true
                                                   object2 != object2 // false   
             
  ===	     Strict equal to: true if the       x === y
             operands are equal and of the 
             same type	
             
                                                More Examples
                                                
                                                console.log("hello" === "hello");   // true
                                                console.log("hello" === "hola");    // false
                                                
                                                console.log(3 === 3);               // true
                                                console.log("3" === 3);             // false
                                                console.log(3 === 4);               // false                                              
                                                
                                                console.log(true === 1);            // false                                               
                                                console.log(true === true);         // true
                                                console.log(true === false);        // false  
                                                
                                                console.log(null === null);         // true
                                                console.log(null === undefined);    // false
                                                
                                                const object1 = { name: "hello" };
                                                const object2 = { name: "hello" };
                                                
                                                console.log(object1 === object2);   // false
                                                console.log(object1 === object1);   // true
                                                
  !==	     Strict not equal to: true if       x !== y 
             the operands are equal but of 
             different type or not equal 
             at all		
              
                                                More Examples
                                                
                                                console.log("hello" !== "hello");   // false
                                                console.log("hello" !== "hola");    // true
                                                
                                                console.log("3" !== 3);             // true
                                                console.log(3 !== 3);               // false
                                                console.log(3 !== 4);               // true
                                                
                                                console.log(true !== 1);            // true
                                                console.log(true !== true);         // false
                                                console.log(true !== false);        // true
                                                
                                                console.log(null !== null);         // false                                       
                                                console.log(null !== undefined);    // true
                                                
                                                const object1 = { name: "hello" }; 
                                                const object2 = { name: "hello" };
                                                
                                                console.log(object1 !== object2);   // true
                                                console.log(object1 !== object1);   // false

*/


// 4.  Logical Operators //
// Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.  However,
// the && and || operators actually return the value of one of the specified operands, so if these operators are used with 
// non-Boolean values, they may return a non-Boolean value.  Logical operators perform logical operations and return a 
// boolean value, either true or false. 
//For example, const x = 5, y = 3;  (x < 6) && (y < 5);  // true

/*
 
  Operator	 Description	                    Example
  
  &&	     Logical AND: true if both the      x && y 
             operands are true, else 
             returns false	
             
                                                More Examples
                                                
                                                a1 = true  && true       // t && t returns true
                                                a2 = true  && false      // t && f returns false
                                                a3 = false && true       // f && t returns false
                                                a4 = false && (3 == 4)   // f && f returns false
                                                a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
                                                a6 = false && 'Cat'      // f && t returns false
                                                a7 = 'Cat' && false      // t && f returns false
                                                a8 = ''    && false      // f && f returns ""
                                                a9 = false && ''         // f && f returns false
          
// Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns 
// true if both operands are true; otherwise, returns false.          
             
  ||	     Logical OR: true if either of      x || y
             the operands is true; returns 
             false if both are false	 
              
                                                More Examples

                                                o1 = true  || true       // t || t returns true
                                                o2 = false || true       // f || t returns true
                                                o3 = true  || false      // t || f returns true
                                                o4 = false || (3 == 4)   // f || f returns false
                                                o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
                                                o6 = false || 'Cat'      // f || t returns "Cat"
                                                o7 = 'Cat' || false      // t || f returns "Cat"
                                                o8 = ''    || false      // f || f returns false
                                                o9 = false || ''         // f || f returns ""
                                                o10 = false || varObject // f || object returns varObject
             
// Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns 
// true if either operand is true; if both are false, returns false.             
             
  !	         Logical NOT: true if the           !x
             operand is false and vice-versa.	
             
                                                More Examples

                                                n1 = !true               // !t returns false
                                                n2 = !false              // !f returns true
                                                n3 = !''                 // !f returns true
                                                n4 = !'Cat'              // !t returns false

// Returns false if its single operand that can be converted to true; otherwise, returns true.

  !!         Logical Double NOT: true if the    !!x
             operand is truthy and vice-versa.	
             
                                                More Examples

                                                n1 = !!true                   // !!truthy returns true
                                                n2 = !!{}                     // !!truthy returns true: ANY object is truthy...
                                                n3 = !!(new Boolean(false))   // !!truthy returns true: ...even a Boolean 
                                                                              // objects with a false .valueOf()!
                                                n4 = !!false                  // !!falsy returns false
                                                n5 = !!""                     // !!falsy returns false
                                                n6 = !!Boolean(false)         // !!falsy returns false


// It is possible to use a couple of NOT operators in series to explicitly force the conversion of any value to the 
// corresponding boolean primitive. The conversion is based on the "truthyness" or "falsyness" of the value

*/


// 5.  Unary Operators //
// A unary operation is an operation with only one operand.

/*

  ++	     Increment (increments by 1)	 ++x; or x++;   => x = 5 console.log(++x) => prints 6 becase x = 6 now
                                                               x = 6 console.log(x++) => prints 6 then increases to 7
  
  // Adds one to its operand.  If used as a prefix operator (++x), returns the value of its operand after adding one; 
  // if used as a postfix operator (x++), returns the value of its operand before adding one.
  
  --	     Decrement (decrements by 1)	 --x; or x--;   => x = 5 console.log(--x) => prints 4 becase x = 4 now
                                                               x = 4 console.log(x--) => prints 4 then decreases to 3
    
  // Subtracts one from its operand.  The return value is analogous to that for the increment operator.
  
  **	     Exponentiation (Power)	x ** y   3 ** 3;        => 27 = 3 * 3 * 3
  
  // Calculates the base to the exponent power, that is, base^exponent.
  
  // Unary plus (+), attempts to convert the operand to a number, if it is not already.	The unary plus operator (+) 
  // precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.  
  // +"3" returns 3.  +true returns 1.  +false returns 0.

  // Unary negation (-), returns the negation of its operand.  The unary negation operator (-) precedes its operand 
  // and negates it.  If x is 3, then -x returns -3.  -true returns -1.  -false returns -0.
  
  // delete, the delete operator deletes a property from an object.  The JavaScript delete operator removes a 
  // property from an object; if no more references to the same property are held, it is eventually released 
  // automatically.  The delete operator removes a given property from an object. On successful deletion, it will 
  // return true, else false will be returned.  The delete operator deletes an object's property.  The syntax is: 
  // delete object.property;  delete object[propertyKey];  delete objectName[index];  
  
  const Employee = {
   firstname: 'John',
   lastname: 'Doe'
  };

  console.log(Employee.firstname);  prints => "John"
 
  delete Employee.firstname;
 
  console.log(Employee.firstname);  prints => undefined

  // Note: You can learn more about the delete operator at MDN 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
  
*/

  
// 6. Ternary Operators // (a ? b : c)
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question 
// mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute 
// if the condition is falsy. This operator is frequently used as an alternative to an if...else statement. 

// The syntax is: condition ? exprIfTrue : exprIfFalse

/* 

Parameters

condition - An expression whose value is used as a condition.

exprIfTrue - An expression which is evaluated if the condition evaluates to a truthy value (one which equals or can be converted to 
true).

exprIfFalse - An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).


Examples

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));   // expected output: "$2.00"

console.log(getFee(false));  // expected output: "$10.00"

console.log(getFee(null));   // expected output: "$10.00"


var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage);   // "Beer"


One common usage is to handle a value that may be null:

let greeting = person => {
    let name = person ? person.name : `stranger`
    return `Howdy, ${name}`
}

console.log(greeting({name: `Alice`}));   // "Howdy, Alice"
console.log(greeting(null));              // "Howdy, stranger"


The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if 
… else chain:

function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}


// 7.  Operator precedence //
// Operator precedence determines how operators are parsed concerning each other.  Operators with higher precedence become the operands 
// of operators with lower precedence.  The precedence of operators determines the order they are applied when evaluating an expression.  
// Parentheses, Exponents, Multiplication/Division, Addition/Subtraction aka PEMDAS is valid in JavaScript as you can override operator 
// precedence by using parentheses.
// Note: For more detailed information regarding operator precedence visit MDN at
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

*/