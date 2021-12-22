// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// assign _.identity to function expression that takes a param of any value
_.identity = function (value) {
    // return the value unchanged
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// assign _.typeOf to function expression that takes a param of any value
_.typeOf = function(value) {
    // check if typeof value is not an object, if not then return the typeof value
    if (typeof(value) !== 'object') return typeof(value);
    // conditions for complex data types typeof -> object, array, null, or date object
    // check if value is an array if so return array
    if (Array.isArray(value)) { return 'array'; } 
    // check if value is null if so return null
    if (value === null) { return 'null'; }
    // check if value is Date if so return date
   // if (value instanceof Date) { return 'date';}
    // otherwise return object
    else return 'object';
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// assign _.first to function expression that takes a param of an array and a number
_.first = function(array, number) {
    // If array is not an array or if number param is - return []
    if (!Array.isArray(array) || number < 0) { return []; }
    // If number param is empty or not a number return the first element in array parameter
    else if (typeof(number) !== 'number' || number === null) { return array[0]; }
    // if number param is greater than array.length return array
    else if (number > array.length) { return array; }
    // Otherwise return an equal number of array elements to the number param beginning at first/zero index
    else { return array.slice(0, number); }
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// assign _.last to function expression that takes a param of an array and a number
_.last = function(array, number) {
    // if array param is not an array return []
    if (!Array.isArray(array) || number < 0) { return []; }
    // if number param is not given or not a number return the last element in array param
    else if (number === null || typeof(number) !== 'number') { return array[array.length - 1]; }
    // if number param is greater than array.length return array
    else if (number > array.length) { return array; }
    // otherwise return an equal number of array elements to the number param beginning at last index
    else return array.slice(-number);
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// assign _.indexOf to function expression that takes a param of an array and any value
_.indexOf = function(array, value) {
    let element;
    // iterate through array elements
    for (let i = 0; i < array.length; i++) {
        // assign element to array[i] the array element being iterated
        element = array[i];
        // if element equals value param return the array param index
        if (element === value) { return i; } 
    } 
    // if element does not equal value param return -1
    if (element !== value) { return -1; }
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// assign _.contains to function expression that takes a param of an array and a value
_.contains = function(array, value) {
    // return true if array contains value and false otherwise using the ternary operator
    return (_.indexOf(array, value) > 0 ? true : false);    
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// assign _.each to function expression that takes a param of a collection and a function
_.each = function(coll, func) {
    // if coll param is an array call func param once for each element in coll
    if (Array.isArray(coll)) {
        // iterate through coll elements
        for (let i = 0; i < coll.length; i++) {
            // call func param on each element, it's index, <collection>
            func(coll[i], i, coll);
        }
      // if coll is an object  
    } else {
            // iterate through coll
            for (let key in coll) {
                // call func param on each property's value, it's key, <collection>
                func(coll[key], key, coll);
            }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// assign _.unique to function expression that takes a param of a collection and a function
_.unique = function(arr) {
    // empty output array
    let output = [];
    // iterate through input array
    for (let i = 0; i < arr.length; i++) {
        // assign element to each array element
        let element = arr[i];
        // check if the element is not inside of the output array
        if (output.indexOf(element) === -1) {
            // if not present push element into output array
            output.push(element);
        }
    }
    return output;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// assign _.filter to function expression that takes a param of an array and a function
_.filter = function(arr, func) {
    // assign empty array to output
    const output = [];
    // call _.each on the array
    _.each(arr, function(el, i) {
        // test function param called on each array element and index
        if (func(el, i)) {
            // if true push element into output array
            output.push(el);
        }
    });
    // return output
    return output;
};




// // assign _.filter to function expression that takes a param of an array and a function
// _.filter = function(arr, func) {
//     // assign empty array to output
//     const output = [];
//     // iterate through array
//     for (let i = 0; i < arr.length; i++) {
//         // call func param for each element, it's index, and arr parameter
//         if (func(arr[i], i, arr)) {
//             // push all true elements into output array 
//             output.push(arr[i]);
//         }
//     }
//     // return output
//     return output;
// };


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// assign _.reject to function expression that takes a param of an array and a function
_.reject = function(arr, func) {
    // empty array assigned to rejected
    const rejected = [];
    // iterate through array
    for (let i = 0; i < arr.length; i++) {
        // call func param for each element, it's index, and array
        if (!func(arr[i], i, arr)) {
            // push all elements that get false into rejected
            rejected.push(arr[i]);
        }
    }
    // return rejected
    return rejected;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

// assign _.partition to function expression that takes a param of an array and a function
_.partition = function(arr, func) {
    // assign empty array to output
    const output = [];
    const truthy = [];
    const falsy = [];
    // iterate through input array
    for (let i = 0; i < arr.length; i++) {
        // if func call on element is true
        if (func(arr[i], i, arr)) {
            // push element into truthy
            truthy.push(arr[i]);
        // if func call on element is false
        } else {
            // push element into falsy
            falsy.push(arr[i]);
        }
    }
    // unshift truthy and falsy arrays into output array
    output.unshift(truthy, falsy);
    // return output
    return output
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

/*

// assign _.map to function expression that takes a param of a collection and a function
_.map = function(coll, func) {
    // assign output to empty array
    const output = [];
    // check if collection is an array
    if (Array.isArray(coll)) {
        // if true iterate through array
        for (let i = 0; i < coll.length; i++) {
            // push value of calling function param on the array param into output
            output.push(func(coll[i], i, coll));
        }
        // return output
        return output;
    // if not true then collection is an object
    } else {
        // iterate through object
        for (let key in coll) {
            // push value of calling function param on the object param into output
            output.push(func(coll[key], key, coll));
        }
    }
    // return output
    return output;
};

*/

// assign _.map to function expression that takes a param of a collection and a function
_.map = function(coll, func) {
    // assign output to empty array
    const output = [];
    _.each(coll, function(el, i) {
        output.push(func(el, i));
    });
    // return output
    return output;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// assign _.pluck to function expression that takes a param of an array of objects and a property
_.pluck = function(arr, prop) {
    // return _.map called on the _.pluck function params
    return _.map(arr, (arr => arr[prop]));    
};

/*
// assign _.pluck to function expression that takes a param of an array of objects and a property
_.pluck = function(arr, prop) {
    // return _.map called on the _.pluck function params
    return _.map(arr, function(arr) {
        return arr[prop];
    });    
};
*/

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// assign _.every to function expression that takes a param of a collection and a function
_.every = function(coll, func) {
    let isTrue;
    // if collection is an array
    if (Array.isArray(coll)) {
        // iterate through array elements
        for (let i = 0; i < coll.length; i++) {
            if (func === undefined && coll[i] === false) {
                return false;                
            } else { isTrue = true; }
            // if call function param on every element of collection produces a false return false
            if (!func(coll[i], i, coll)) {
                return false;
            // otherwise isTrue assigns true    
            } else isTrue = true;       
        }
    } else {
        for (let key in coll) {
            if (func === undefined && coll[key] === false) {
                return false;                
            } else { isTrue = true; }

            if (!func(coll[key], key, coll)) {
                return false;
            } else isTrue = true;
        }
    }
    return isTrue;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

// assign _.some to function expression that takes a param of a collection and a function
_.some = function(coll, func) {
    let isTrue;
    if(Array.isArray(coll)) {
        for (let i = 0; i < coll.length; i++) {
            if (func(coll[i], i, coll)) {
                isTrue = true;
                return isTrue;
            } else {
                
            }
        }
    }
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
