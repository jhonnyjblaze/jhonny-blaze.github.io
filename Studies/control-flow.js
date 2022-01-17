/**
* Control Flow
* 
* Often times, as a computer is reading and executing our code, we want code to run only if something is true or not.  
* This is known as control flow.  Control flow is the order in which statements are executed in a program.  The 
* default control flow is for statements to be read and executed in order from left-to-right, top-to-bottom in a 
* program file.  We will learn to use some basic control flow today, so that not all code on the screen is executed 
* in order, or even executed at all.  We alter control flow with control structures such as conditionals.  Conditionals 
* alter control flow by only executing blocks of code if certain conditions are met.
*
* Each of the following control structures essentially allow your program to make decisions about which code is executed 
* as the program runs.
*/
 

// A common conditional is the if statement:
// An if statement accepts an expression with a set of parentheses: If the expression evaluates to a truthy (or true) value, 
// then the code within its code body executes.

let mailSent = true;
	 
if (mailSent) { // true
  console.log('Mail sent to recipient'); // prints => "Mail sent to recipient"
}

// If the expression evaluates to a falsy (or false) value, its code body will not execute. 

let isMailReceived = false;
 
if (isMailReceived) { // false
  console.log('Recipient got mail'); // Does not print
}
	
	
// Another common conditional is the else statement:
// An else block can be added to an if block but the else block will be executed only if the if condition fails.

let isMailSent = false;
	 
if (isMailSent) { // false
  console.log('Mail sent to recipient'); // Does not print
} else { // default
  console.log('Mail not sent to recipient'); // prints => "Mail not sent to recipient"
}


// Another conditional is the else if clause
// After an initial if block, else if blocks can each check an additional condition. An optional else block can be added after 
// the else if block(s) to run by default if none of the conditionals evaluated to truthy.

let size = 10;

if (size > 1000) { // false
  console.log('Big'); // Does not print

} else if (size > 200) { // false
  console.log('Medium'); // Does not print

} else if (size > 40) { // false
  console.log('Small'); // Does not print

} else { // default
  console.log('Tiny'); // prints => "Tiny"
}


// The final conditional is the switch statement or case clause
// The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated 
// with that case, as well as statements in cases that follow the matching case.

switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}


const expr = 'Papayas';
switch (expr) {
  case 'Oranges': // false
    console.log('Oranges are $0.59 a pound.'); // Does not print
    break;
  case 'Mangoes': // false
  case 'Papayas': // true
    console.log('Mangoes and papayas are $2.79 a pound.'); // prints => "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// The break statements above terminate the switch statement when a case clause resolves to true then transfers program 
// control to the statement following the terminated switch statement.

// For a more indepth look at the topics covered above check out their MDN pages below:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break