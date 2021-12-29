// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jhonny-blaze.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // assign the variable named males to filter function
    let males = _.filter(array, function(customer) {
        // return array of customers that are male
        return customer.gender === 'male';
    });
    // return the array length
    return males.length;
};

var femaleCount = function(array) {
    // use the reduce function to return the total number of female customers
    let females = _.reduce(array, function(accumulator, current, index) {
        // if current customer object is female
        if (current.gender === 'female') {
            // add 1 to accumulator
            accumulator += 1;
        }
        // return accumulator
        return accumulator;
    }, 0);
    return females;
};

var oldestCustomer = function(array) {
    // assign variable named oldest to array with sort method called upon it
    let oldest = array.sort(function(a, b) { 
        // return array sorted by value of each object age property in descending order
        return b.age - a.age 
    })
    // return the name value of the object in the zero index
    return oldest[0].name;
};

var youngestCustomer = function(array) {
    // assign variable named youngest to array with sort method called upon it
    let youngest = array.sort(function(a, b) { 
        // return array sorted by value of each object age property in ascending order
        return a.age - b.age 
    })
    // return the name value of the object in the zero index
    return youngest[0].name;
};

var averageBalance = function(array) {
    let output = [];
    for (let i = 0; i < array.length; i++){
        output.push(1 * (array[i].balance.slice(1, array.length + 1).replace(/,/g,'')));
    }
    //console.log(output);
    let sum = output.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum / output.length;
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
