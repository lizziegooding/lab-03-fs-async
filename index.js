// create an `index.js` that calls your function with three paths from process.argv
//   and then logs the contents of the three files to the screen
//   * (your console.log should be  in the index.js file not in your print-files function)

'use strict';

const printFiles = require('./lib/print-files.js');

let main = module.exports = (filepaths, callback) => {
  printFiles(filepaths, (err, data) => {
    if (err) return console.log(err);
    console.log(data);
    callback(null, data);
  });
};

main(process.argv.slice(2), () => {});
