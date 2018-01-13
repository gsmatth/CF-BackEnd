'use strict';

const fs = require('fs');

const readerRecurs = module.exports = {};

readerRecurs.readFiles = (paths, callback) => {
  let results = [];

  function readFileRecursively(){
    if(paths.length == 0){
      callback(null, results);
    } else {
      fs.readFile(paths.shift(), (err, data) => {
        if(err) {
          callback(err);
          return;
        }
        results.push(data.toString());
        readFileRecursively();
      });
    }
  }
  readFileRecursively();
};