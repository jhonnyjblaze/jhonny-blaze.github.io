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


// assign the annonymous function expression to the variable named maleCount
var maleCount = function(array) {
    // assign the variable named males to filter function
    let males = _.filter(array, function(customer) {
        // return array of customers that are male
        return customer.gender === 'male';
    });
    // return the array length
    return males.length;
};


// assign the annonymous function expression to the variable named femaleCount
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
    // Set seed to 0    
    }, 0);
    return females;
};


// assign the annonymous function expression to the variable named oldestCustomer
var oldestCustomer = function(array) {
    // assign variable named oldest to array with sort method called upon it
    let oldest = array.sort(function(a, b) { 
        // return array sorted by value of each object age property in descending order
        return b.age - a.age 
    });
    // return the name value of the object in the zero index
    return oldest[0].name;
};


// assign the annonymous function expression to the variable named youngestCustomer
var youngestCustomer = function(array) {
    // assign variable named youngest to array with sort method called upon it
    let youngest = array.sort(function(a, b) { 
        // return array sorted by value of each object age property in ascending order
        return a.age - b.age 
    });
    // return the name value of the object in the zero index
    return youngest[0].name;
};


// assign the annonymous function expression to the variable named averageBalance
var averageBalance = function(array) {
    // assign variable named output to empty array literal
    let output = [];
    // iterate through input array
    for (let i = 0; i < array.length; i++) {
        // push each element transformed from string to number into output array
        output.push(1 * (array[i].balance.slice(1, array.length + 1).replace(/,/g,'')));
    }
    // assign variable named sum to _.reduce called on output array
    let sum = _.reduce(output, function(a, b){
        // return previous number plus current number after each iteration
        return a + b;
    }, 0);
    // assign variable named avg to sum divided by length of output array
    let avg = sum / output.length;
    // return avg
    return avg;
};


// assign the annonymous function expression to the variable named firstLetterCount
var firstLetterCount = function(array, letter) {
    // assign variable named count to 0
    let count = 0;
    // iterate through each array element object
    _.forEach(array, function(customer) {
        /* check if zero index of object name property lowercased is
           strictly equal to the input letter lowercased */
        if (customer.name[0].toLowerCase() === letter.toLowerCase()) {
            // if true add one to count
            count += 1;
        }
  })
  // return count
  return count;
};


// assign the annonymous function expression to the variable named friendFirstLetterCount
var friendFirstLetterCount = function(array, customerName, letter) {
    // assign 0 to variable named count
    let count = 0;
    // assign empty object literals to variables named customer and customerFriend
    let customer = {};
    let customerFriend = {};
    // assign empty array literal to variable named test
    let test = [];
    // iterarte through the input for the array param
    for (let i = 0; i < array.length; i++) {
      // assign customer to the array object
      customer = array[i];
      // check if input for customerName strictly equals the value at the customer name property
      if (customerName === customer.name) {
        // if true assign test to the value at the customer friends property
        test = customer.friends;
        // iterate through the test array
        for (let j = 0; j < test.length; j++) {
          customerFriend = test[j];
          /* check if the zero index of the value at the name property for customerFriend 
             lowercased stritcly equals the input letter lowercased */
          if (customerFriend.name[0].toLowerCase() === letter.toLowerCase()) {
            // if true add 1 to the value of count
            count += 1;
          }
        }    
      }
    }
    // return count
    return count;  
  };


// assign the annonymous function expression to the variable named friendsCount
var friendsCount = function(array, customerName) {
    // assing empty array literal to variable named output
    let output = [];
    // assign empty object literal to variable named customer
    let customer = {};
    // iterarte through the input for the array param
    for (let i = 0; i < array.length; i++) {
      // assign customer to the array object
      customer = array[i];
      // check if value of name property of each customer does not strictly equals input for customerName param
      if (customer.name !== customerName) {
        // if true iterate through array value of friends property on customer object
        for (let j = 0; j < customer.friends.length; j++) {
          /* check if name value of each element of friends property on customer object strictly equals input 
             for customerName param */
          if (customer.friends[j].name  === customerName) {
            // if true push the name value of the customer object into output
            output.push(customer.name);
          }
        }
      }
    }
    // sort output
    output.sort();
    // return output
    return output;
};


// assign the annonymous function expression to the variable named topThreeTags
var topThreeTags = function(array) {
    // assing empty array literal to variable named tags
    let tags = [];
    // assing empty array literal to variable named testedTags
    let testedTags = [];
    // assing empty array literal to variable named test
    let test = [];
    // assing empty array literal to variable named topTags
    let topTags = [];
    // iterate through input array param
    for (let i = 0; i < array.length; i++) {
      // assign tags to the tags property of each array element object
      tags = array[i].tags;
      // iterate through the tags array
      for (let j = 0; j < tags.length; j++) {
        // push each tag into the testedTags array
        testedTags.push(tags[j]);      
      }
      // assign test to the testedTags array filtered for duplicates
      test = _.filter(testedTags, (item, index) => index !== testedTags.indexOf(item));
      // assign topTags to the test array filtered for duplicates
      topTags = _.filter(test, (item, index) => index !== test.indexOf(item));
    }
    // return topTags array
    return topTags;
  };


// assign the annonymous function expression to the variable named genderCount
var genderCount = function(array) {
  /* assign an object with female prop and 0 value, male prop and 0 value, and non-binary prop and 0 value 
     to a variable called result */
  let result = { female: 0, male: 0, 'non-binary': 0 };
  // assign 0 to a variable named countFem
  let countFem = 0;
  // assign 0 to a variable named countMale
  let countMale = 0;
  // assign 0 to a variable named countNonBi
  let countNonBi = 0;
  // declare a variable named gender
  let gender;
  // iterate through input array 
  for (let i = 0; i < array.length; i++) {
    // assign each value for the gender property on the input array element object to gender
    gender = array[i].gender;
    /* if gender strictly equals female add 1 to the value of countFem and assign the total to the value 
       for the result.female prop */
    if (gender === 'female') {
        countFem += 1;
        result.female = countFem;
    }
    /* if gender strictly equals male add 1 to the value of countMale and assign the total to the value 
       for the result.male prop */
    if (gender === 'male') {
        countMale += 1;
        result.male = countMale;
    }
    /* if gender strictly equals non-binary add 1 to the value of countNonBi and assign the total to the value 
       for the result['non-binary'] prop */
    if (gender === 'non-binary') {
        countNonBi += 1;
        result['non-binary'] = countNonBi;
    } 
  }
  // return result
  return result;
};


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
