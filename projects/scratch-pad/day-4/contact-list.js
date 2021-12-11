// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the contacts separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

    // create variable obj set to empty object
  var obj = {};
  // add id key and value
  obj.id = id;
  // add nameFirst key and value
  obj.nameFirst = nameFirst;
  // add nameLast key and value
  obj.nameLast = nameLast;
  // return the contact obj
  return obj;

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // Empty Array literal named contacts to collect contact list contacts
    var contacts = [];
        
    return {
        // we implemented the length api for you //
        // length key, annonymous function value
        length: function() {
          // return the number of contacts within the list.
            return contacts.length;
        },
        // addContact key, function value with contact parameter
        addContact: function(contact) {
            // Add contact into the contacts array
            contacts.push(contact);
        },
        // findContact key, function value with fullName parameter
        findContact: function(fullName) {
            // for of loop to loop over contacts array
            for (var element of contacts) {
                // If fullName === element.nameFirst + ' ' + element.nameLast return the element
                 if(fullName === element.nameFirst.concat(' ', element.nameLast)) { return element; }
                // If not true return undefined
                else return undefined;
            } 
        },
        // removeContact key, function value with contact parameter
        removeContact: function(contact) {
            // for of loop to loop over contacts array
            for (var element of contacts) {
                // If contact === element grab index and set to value of i
                if (contact === element) { var i = contacts.indexOf(); }
                // Remove element from the index it is in
                contacts.splice(i, 1);
            }
        },
        // printAllContactNames key, annonymous function value
        printAllContactNames: function() {
            // Empty String literal named output to collect contact names
            var output = '';
            // for of loop to loop over contacts array
            for (var element of contacts) {
                // Assign output to equal the nameFirst + nameLast values of each element with a newline after each element
                output += element.nameFirst.concat(' ', element.nameLast + '\n');
            }
            // return ouput with any white space at either end of the string removed
            return output.trim();
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
