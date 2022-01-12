// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = (n) => {
  // base case
  // if n is strictly equal to 1 or 0 return 1
  if (n === 1 || n === 0) {
    return 1;
    // if n < 0 return null 
  } else if (n < 0) return null;
  // recursion
  // return n * factorial(n - 1)
  return n * factorial(n - 1);
};

/*
factorial(5)
// FALSE // return 5 * factorial(4)
factorial(4)
// FALSE // return 5 * 4 * factorial(3)
factorial(3)
// FALSE // return 5 * 4 * 3 * factorial(2)
factorial(2)
// FALSE // return 5 * 4 * 3 * 2 * factorial(1)
*/

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = (array) => {
  // base
  // check if length of input array is 1
  if (array.length === 1) {
    // return value at 0 index if true
    return array[0];
    // check if length of input array is 0 and return 0 if true
  } else if (array.length === 0) return 0;
  // recursion
  // return value at 0 index + sum() called on the array with that value removed
  return array[0] + sum(array.slice(1));
};

/*
sum([1, 2, 3, 4, 5, 6])
// FALSE // return 1 + sum([2, 3, 4, 5, 6])
sum([2, 3, 4, 5, 6])
// FALSE // return 1 + 2 + sum([3, 4, 5, 6])
sum([3, 4, 5, 6])
// FALSE // return 1 + 2 + 3 + sum([4, 5, 6])
sum([4, 5, 6])
// FALSE // return 1 + 2 + 3 + 4 + sum([5, 6])
sum([5, 6])
// FALSE // return 1 + 2 + 3 + 4 + 5 + sum([6])
sum([6])
// TRUE // return 1 + 2 + 3 + 4 + 5 + 6 => 21
*/


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = (array) => {
  // base case
  // check if length of input array is 1
  if (array.length === 1) {
    // return value at 0 index if true
    return array[0];
    // check if length of input array is 0 and return 0 if true
  } else if (array.length === 0) return 0;

  // recursion
  
};

/*
arraySum([1, [2,3], [[4]], 5])
// FALSE // return 4 + arraySum([[2,3], [[4]], 5])
arraySum([[2,3], [[4]], 5])
// FALSE // return 1 + 2 + arraySum([[3], [[4]], 5])
arraySum([[3], [[4]], 5])
// FALSE // return 1 + 2 + 3 + arraySum([[[4]], 5])
arraySum([[[4]], 5])
// FALSE // return 1 + 2 + 3 + 4 + arraySum([5])
arraySum([5])
// TRUE // return 1 + 2 + 3 + 4 + 5 => 15
*/


// 4. Check if a number is even.
var isEven = (n) => {
  // base case
  // if n equals 0 return true
  if (n === 0) return true;
  // if n equals 1 return false
  if (n === 1) return false;

  // recursion
  // if n is less than 0 
  if (n < 0) {
    // return isEven(n + 2)
    return isEven(n + 2);
    // if n is greater than 0
  } else {
    // return isEven(n - 2)
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = (n) => {
  // base case
  // if n equals 1, -1, or 0 return 0
  if (n === 1 || n === -1 || n === 0) return 0;
 
  // recursion
  // if n is less than 0
  if (n < 0) { 
    // return (n + 1) + sumBelow(n + 1); 
    return (n + 1) + sumBelow(n + 1); 
    // otherwise
  } else { 
    // (n - 1) + sumBelow(n - 1); 
    return (n - 1) + sumBelow(n - 1); 
  }
};


/*
sumBelow(7)
// FALSE // return 6 + sumBelow(6)
sumBelow(6)
// FALSE // return 6 + 5 + sumBelow(5)
sumBelow(5)
// FALSE // return 6 + 5 + 4 + sumBelow(4)
sumBelow(4)
// FALSE // return 6 + 5 + 4 + 3 + sumBelow(3)
sumBelow(3)
// FALSE // return 6 + 5 + 4 + 3 + 2 + sumBelow(2)
sumBelow(2)
// TRUE // return 6 + 5 + 4 + 3 + 2 + 1 => 21
*/

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = (x, y) => {
  // assign variable named output to empty Array literal
  let output = [];
  
  // base case
  // if x equals y or if y subtracted from x equals 1 or -1 return output
  if (x === y || x - y === -1 || x - y === 1) return output;
  
  // recursion
  // if x is less than y
  if (x < y) {
    // push the sum of x + 1 into the output array
    output.push(x + 1);
    // return output concatenated with range called on input x + 1 and input y
    return output.concat(range(x + 1, y));
    // otherwise 
  } else {
    // push the sum of x - 1 into the output array
    output.push(x - 1);
    // return output concatenated with range called on input x - 1 and input y
    return output.concat(range(x - 1, y));
  }
};

/*
range(2, 9)
// FALSE // return [3]
range(3, 9)
// FALSE // return [3, 4]
range(4, 9)
// FALSE // return [3, 4, 5]
range(5, 9)
// FALSE // return [3, 4, 5, 6]
range(6, 9)
// FALSE // return [3, 4, 5, 6, 7]
range(7, 9)
// FALSE // return [3, 4, 5, 6, 7, 8]
*/

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = (base, exp) => {
  // base case
  // if exp equals 0
  if (exp === 0) {
    // return 1
    return 1;
    // if exp equals 1
  } else if (exp === 1) {
    // return the input for base
    return base;
  }
  // recursion
  // if exp is greater than 0
  if (exp > 0) {
  // return input for base * exponent(base, exp - 1); 
    return base * exponent(base, exp - 1);
    // if exp is less than 0
  } else if (exp < 0) {
      // return input for base / exponent(base, exp * -1 + 1);
      return base / exponent(base, exp * -1 + 1);
  }
};

/*
exponent(4, 3)
// FALSE // return 4 * exponent(4, 2)
exponent(4, 2)
// FALSE // return 4 * 4 * exponent(4, 1)
exponent(4, 1)
// TRUE // return 4 * 4 * 4 
*/

/*
exponent(4, -2)
// FALSE // return 4 / exponent(4, -1)
exponent(4, -1)
// FALSE // return 4 / 4 / exponent(4, 0)
exponent(4, 0)
// FALSE // return 4 / 4 / 4 / exponent(4, 1)
exponent(4, 1)
// TRUE // return 4 / 4 / 4 / 4
/
*/


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = (n) => {
  // base case
  // if n equals 0
  if (n === 0) {
    // return false
    return false;
    // if n equals 2 or 1
  } else if (n === 2 || n === 1) {
    // return true
    return true;
  }

  // recursion
  // return powerOfTwo(n / 2);
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = (string) => {
  // base case
  // if string equals empty string
  if (string === '') {
    // return empty string
    return '';
  }

// recursion
// return the result of calling reverse on input string value 
// at zero index being removed and added back into the string 
return reverse(string.substring(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // assign input string with any white space removed to test
  let test = string.replace(/[" "]/g,"").toLowerCase();
  // base case
  // if test.length equals 1 return true
  if (test.length === 1) return true;
  // if zero index of text is not equal to the last index of test return false 
  if (test[0] !== test[test.length - 1]) return false;
  
  // recursion
  // return palindrome called on test.slice(1, -1)
  return palindrome(test.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  
  if (y > 0) { 
    return x + multiply(x, y - 1);
  }
  if (y < 0) {
    return -x + multiply(x, y + 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if (x === 0 && y === 0 || y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  
  if (x > 0 || y < 0) { 
    return 1 + divide(x - y, y);
  }
  if (x < 0 || y  > 0) {
    return -1 + divide(x + y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

// passes test but still not working perfectly 

var compareStr = function(str1, str2) {
  // base case
  // check if the length of both input str1 and str2 equals 0
  if (str1.length === 0 && str2.length === 0) {
    // return true
    return true;
  }
  // check if the length of both input str1 and str2 equals 1 
  // and the zero indexes of both input str1 and str2 are equal
  if (str1.length === 1 && str2.length === 1 && str1[0] === str2[0]) {
    // return true
    return true;
  }
  // check if the zero indexes of both input str1 and str2 are unequal
  if (str1[0] !== str2[0]) {
    // return false
    return false;
  }
  
  // recursion
  /* 
  return the compareStr function call with inputs of str1 and str2 
  with the previous char at the zero index removed until there is 
  not a match or there are no more characters in the input strings 
  to compare 
  */
  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = (str, output = []) => {
  // base case
  // check if the length of input str equals 0
  if (str.length === 0) {
    // return output
    return output;
  }
  // if the length of input str is not equal to 0
  else { 
    // push the current value of the zero index into the output Array
    output.push(str[0]);
  }
  
  // recursion
  // return the createArray function called on the input str with the 
  //char at index 0 removed and the input output Array 
  return createArray(str.substring(1), output);
};


// 17. Reverse the order of an array
var reverseArr = (array, output = []) => {
  // base case
  // check if array.length equals 0
  if (array.length === 0) {
    // return output
    return output;
    // otherwise
  } else {
    // unshift the current zero index element of array into output
    output.unshift(array.shift());
  }
  // return the reverseArr function called on the input array and input output Array
  return reverseArr(array, output);  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = (value, length, output = []) => {
  // base case
  // if length equals 0 return output
  if (length === 0) {
    return output;
    // otherwise
  } else {
    // push value into output
    output.push(value);
  }

  // recursion 
  // return the buildList function called on input value, input length - 1, and output
  return buildList(value, length - 1, output);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = (array, value, count = 0) => {
  // base case
  // check if input array.length equals 0
  if (array.length === 0) {
    // return count
    return count;
  } 
  
  // recursion
  // check if the value of the shift method called on the input array 
  // equals the input value
  if (array.shift() === value) {    
    // add 1 to count
    count += 1;
  }
  // return the countOccurrence function called on the input array, 
  //input value, and count
  return countOccurrence(array, value, count);
};


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = (array, callback, result = []) => {
  // base case
  // if array.length equals 0
  if (array.length === 0) {
    // return result
    return result;
  }
  
  // recursion
  // if array.length is not equal to result.length
  if (array.length !== result.length) {
    // result gets callback called on input array index 0 concatenated with the rMap function 
    // called on the input array with the 0 index removed and the callback function
    result = [callback(array[0])].concat(rMap(array.slice(1), callback));
    // return result
    return result;
  }
  // return rMap(array, callback, result);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = (n) => {
  // base case 
  // if n is less than 0 i.e. a negative number
  if (n < 0) {
    // return null
    return null;
  }
  // if n is less than 2
  if (n < 2) {
    // return n
    return n;
  }
// recursion
// return the function called nthFibo(n - 1) + nthFibo(n - 2)   
return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = (input, i = 0, result = []) => {
  // base case
  // check if the length of the input Array is equal to the length of result Array
  if (input.length === result.length) {
    // return result array
    return result;
  }
  
  // recursion
  // check if the length of the input Array is not equal to the length of result Array
  if (input.length !== result.length) {
    // push the uppercased value at the current index of the input Array into result Array
    result.push(input[i].toUpperCase());
  }
  // return the function named capitalizeWords called on the input Array, its index + 1 and the result Array
  return capitalizeWords(input, (i + 1), result);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = (array, i = 0, result = []) => {
  // base case
  // check if the length of the input Array is equal to the length of result Array
  if (array.length === result.length) {
    // return result Array
    return result;
  }
  
  // recursion
  // check if the length of the input Array is not equal to the length of result Array
  if (array.length !== result.length) {
    // push the uppercased value of the zero index of the current string concatenated 
    // with the value of the current string less the zero index value
    result.push(array[i][0].toUpperCase() + array[i].slice(1));
  }
  // return the function named capitalizeFirst called on the array argument, i + 1, 
  // and the result argument
  return capitalizeFirst(array, (i + 1), result);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  // why is arguments not defined if letterTally is written as an arrow function expression 
  // what is happening here
  let result = Array.from(arguments)[1] || {};
    
  // check if length of input str equals 0
  if(str.length === 0) {
    // return result
    return result;
  }
  
  // check if result does not have key of value at current zero index for input str
  if(!result[str[0]]) {
    // set value of 1 to result key named after value at current zero index for input str
    result[str[0]] = 1;
    // otherwise
  } else {
    // add 1 to the value of the result key named after value at current zero index for input str 
    result[str[0]] += 1;
  }
  
  // recurison
  // return function named letterTally called on input str.slice(1) and result
  return letterTally(str.slice(1), result);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = (list, output = []) => {
  // base case
  // check if list.length equals 0
  if (list.length === 0) {
    // return list
    return list;
  }
  // check if list.length equals 1
  if (list.length === 1) {
    // push the value at zero index of list into output
    output.push(list[0]);
    // return output
    return output;
  }
  // check if value at zero index of list is not equal to value at the one index of list
  if (list[0] !== list[1]) {
    // push the value at zero index of list into output
    output.push(list[0])
  }
  // return function named compress called on input list.slice(1) and output
  return compress(list.slice(1), output);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = (array) => {
  // base case
  // check if length of input array is less than or equal to 1
  if(array.length <= 1) {
    // return array
    return array;
  }
  // check if the value at zero index of input array strictly equals 
  // the value at the one index of input array
  if(array[0] === array[1]) {
    // return function named minimizeZeroes with an argument of 
    // the current input array.slice(1)
    return minimizeZeroes(array.slice(1));
  }
  // return the current value at zero index of input array concatenated 
  // with function named minimizeZeroes with an argument of the current
  // input array.slice(1)
  return [array[0]].concat(minimizeZeroes(array.slice(1)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
