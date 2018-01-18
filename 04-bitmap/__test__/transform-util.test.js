'use strict';

const transformUtil = require('../lib/transform-util');
const Bitmap = require('../model/bitmap');

describe('transform-util', () => {
  describe('given valid input for file and transform', () => {
    test('#getFile returns bitmap object', (done) => {
      let filePath = `${__dirname}/assets/bitmap.bmp`;
      transformUtil.getFile(filePath)
        .then(function(buf){
          return new Bitmap(buf);
        })
        .then(function(buf){
          expect(buf.BMPFileSizeBytes).toEqual(11078);
          expect(buf.imageSize).toEqual(10000);
          done();
        })
        .catch(done);
    });
  });
  describe('given invalid input for file or transform', () => {
    test('#getFile fails as expected when a non-bmp file is loaded', (done) => {
      let filePath = `${__dirname}/assets/IMG_1212.jpg`;
      transformUtil.getFile(filePath)
        .then(function(buf){
          if(buf.bmValue !== 'BM'){
            return Promise.reject(new Error (`BMValue not equal to BM. The file you loaded was the wrong file format`));
          }
          return new Bitmap(buf);
        })
        //we never expect this "done" line to be reached, because the previous then block does not succeed.  The program jumps straight to the catch block
        .then(done)
        .catch(function(err){
          expect(!!err).toEqual(true);
          expect(err.message).toEqual(`BMValue not equal to BM. The file you loaded was the wrong file format`);
          done();
        });
    });
  });
});