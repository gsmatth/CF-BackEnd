'use strict';

const fs = require('fs');

const transformUtil = module.exports = {};

transformUtil.getFile = function(filePath){
  return new Promise(function(resolve, reject){
    fs.readFile(filePath, (err, buf) => {
      if(err) return reject(err);
      return resolve(buf);
    });
  });
};
