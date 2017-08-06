// create an `index.js` that calls your function with three paths from process.argv
//   and then logs the contents of the three files to the screen
//   * (your console.log should be  in the index.js file not in your print-files function)

'use strict';

const fs = require('fs');
const printFiles = require('./lib/print-files.js');

let splice = (list, ...args) => {
  if(typeof list === 'object')
    return Array.prototype.splice.apply(list, args);
  throw new Error('invalid input');
};

let list = splice(process.argv, 2);

printFiles(list, (err, content) => {
  if (err) {
    return console.log(err);
  }
  console.log(content);
});
