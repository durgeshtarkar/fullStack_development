/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { "name": "durgesh", "price": 2000, "instructor": "harry" },
  { "name": "python basics", "price": 1500, "instructor": "alice" },
  { "name": "machine learning", "price": 3000, "instructor": "bob" },
  { "name": "web development", "price": 2500, "instructor": "charlie" },
  { "name": "data science", "price": 3500, "instructor": "diana" }
]);


// Print a message to the output window.
console.log(`database done`);

