'use strict';

const printFiles = require('../lib/print-files.js');
const expect = require('expect');

describe('testing printFiles', () => {
  it('should resolve an array with [\'cool 18572\n\', \'cool 2907\n\', \'cool 2980\n\']', (done) => {
    let paths = [
      `${__dirname}/data/0.txt`,
      `${__dirname}/data/1.txt`,
      `${__dirname}/data/2.txt`,
    ];
    console.log(paths);
    printFiles(paths, (err, data) => {
      expect(err).toBe(null);
      expect(data).toEqual(['cool 18572\n', 'cool 2907\n', 'cool 2980\n']);
      done();
    });
  });

  it('should reject and error', (done) => {
    let paths = [
      `${__dirname}/data/dont-exist.txt`,
      `${__dirname}/data/1.txt`,
      `${__dirname}/data/2.txt`,
    ];

    printFiles(paths, (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done();
    });
  });

  it('should reject and error', (done) => {
    let paths = [
      `${__dirname}/data/0.txt`,
      `${__dirname}/data/dont-exist.txt`,
      `${__dirname}/data/2.txt`,
    ];

    printFiles(paths, (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done();
    });
  });

  it('should reject and error', (done) => {
    let paths = [
      `${__dirname}/data/0.txt`,
      `${__dirname}/data/1.txt`,
      `${__dirname}/data/dont-exist.txt`,
    ];

    printFiles(paths, (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done();
    });
  });
});
