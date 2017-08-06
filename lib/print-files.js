// create a function that takes an array of three filepaths and a callback
//   * it should have a function signature (paths, callback) => undefined
//   * expect the callback function signature to be (err, data) => undefined
//   * read the three files in order
//   * on success pass an array of the contents of the files the data param of the callback `callback(null, data)`
//   * on failure pass and error in to the callback `callback(err)`
//

'use strict';

const fs = require('fs');

let printFiles = module.exports = (filepaths, callback) => {
  fs.readFile(filepaths[0], (err, data) => {
    if(err) {
      return callback(err);
    }
    callback(null, [data.toString()]);
    fs.readFile(filepaths[1], (err, data) => {
      if(err) {
        return callback(err);
      }
      callback(null, [data.toString()]);
      fs.readFile(filepaths[2], (err, data) => {
        if(err) {
          return callback(err);
        }
        callback(null, [data.toString()]);
      });
    });
  });
};
