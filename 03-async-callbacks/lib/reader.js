'use strict';

const fs = require ('fs');
const path = require('path');

const reader = module.exports = {};

reader.assets = (fileNames, callback) => {
  let results = [];
  let filePaths = fileNames.map(function(fileName) { 
    return path.join(__dirname, '../assets', fileName);
  });
  fs.readFile(filePaths[0], (err, data) => {
    if(err) callback(err);
    results.push(data.toString());
    fs.readFile(filePaths[1], (err, data) => {
      if(err) callback(err);
      results.push(data.toString());
      fs.readFile(filePaths[2], (err, data) => {
        if(err) callback(err);
        results.push(data.toString());
        callback(null, results);
      });
    });
  });
};



