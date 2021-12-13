/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * ## Step 1 - Object Creation
 1. [ ] Open up the file data.js.
 2. [ ] Create a variable named `animal` and assign it to an empty object.
 3. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
 4. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
 5. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
 6. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
 7. [ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.
 8. [ ] It should be something like: 
~~~JS
{ species: 'duck', name: 'Jennifer', noises: [] }
~~~ 
 */

// Assign empty Object literal to variable named animal 
var animal = {};
// Create species key (with dot notation) on the animal object and assign value 'Canis lupus familiaris'
animal.species = 'dog';
// Create name key (with bracket notation) on the animal object and assign value 'Goofy'
animal['name'] = 'Goofy';
// Create noises key on the animal object assign value []
animal.noises = [];
// Print animal object to the console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * ## Step 2 - Array Creation
 1. [ ] Create a variable named `noises` and assign it to an empty array.
 2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
 3. [ ] Using an array function add another noise to the end of `noises`.
 4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
 6. [ ] Add an element to `noises` using this function.
 7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
 8. [ ] `console.log` the length of `noises`
 9. [ ] `console.log` the last element in `noises` again without hard coding the index.
 10. [ ] `console.log` the whole array.
 11. [ ] Does it look right?
 */

 // Assign empty Array literal to variable named noises
 var noises = [];
 // Create first element of noises array using bracket notation
 noises[0] = 'Yaaah-hoo-hoo-hoo-hooey!!!';
 // Create an element at the end of the noises array using Array push method
 noises.push('Wowwhoa!');
 // Add an element to the beginning of the noises array using Array unshift method
 noises.unshift('Ouch!');
 // Add an element to the end of the noises array using bracket notation w/o hard coding
 noises[noises.length] = 'Whaaaaugh!';
 // Output the length of the noises array to the console 
 console.log(noises.length);
 // Output the last element in the noises array to the console w/o hard coding
 console.log(noises[noises.length - 1]);
 // Output the whole array to the console
 console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Use bracket notation to assign the noises array as the value to the noises property/key on the animal object
animal['noises'] = noises;
// Add a new noise element to the noises array on the animal object's noises property/key 
animal.noises.push('Whoooooa!');
// Output the animal object to the console
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  Bracket notation or dot notation.
 * 2. What are the different ways of accessing elements on arrays?
 *  Only bracket notation.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a variable named animals and assign it to an empty Array literal
var animals = [];
// Use the Array push method to push the animal object into the animals array
animals.push(animal);
// Output the animals array to the console
console.log(animals);
// Create a variable called 'duck' and assign it to the data => `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
var duck = {
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
// Use the push method and push duck to animals
animals.push(duck);
// Output animals to the console
console.log(animals);
// Create two more animal objects with a species, a name, and at least two sounds sounds
var dolphin = {
  species: 'dolphin', 
  name: 'Flipper', 
  noises: ['click', 'squeak']
};

var cat = {
  species: 'cat', 
  name: 'Otis', 
  noises: ['meow', 'purr', 'hiss']
};

// add each one (dolphin and cat) of them to the animals array
animals.push(dolphin, cat);
// Output animals and the length of animals to the console
console.log(animals, animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}