'use strict';

const transforms = require('../lib/transforms');
const Bitmap = require('../model/bitmap');
const transformUtil = require('../lib/transform-util');


let bufObject;

beforeEach((done) => { 
  let filePath = `${__dirname}/assets/bitmap.bmp`;
  transformUtil.getFile(filePath)
    .then(function(buf){
      return new Bitmap(buf);
    })
    .then(function(buf){
      bufObject = buf;
      done();
    });
});

describe('transform', () => {
  describe('given valid input bitmap object', () => {
    test('#colorToGreyscale updates color palette values', (done) => {
      let modifiedBuf = transforms.colorToGreyscale(bufObject);
      expect(modifiedBuf.colorTableBuf[3]).toEqual(37);
      done();
    });
    test('#redHighlight updates color palette red values to 255', (done) => {
      let modifiedBuf = transforms.redHighlight(bufObject);
      expect(modifiedBuf.colorTableBuf[5]).toEqual(255);
      done();
    });
    test('#swapRGB updates color palette red values to ???', (done) => {
      let modifiedBuf = transforms.swapRGB(bufObject);
      expect(modifiedBuf.colorTableBuf[4]).toEqual(60);
      expect(modifiedBuf.colorTableBuf[5]).toEqual(0);
      expect(modifiedBuf.colorTableBuf[6]).toEqual(34);
      expect(modifiedBuf.colorTableBuf[7]).toEqual(32);
      done();
    });
  });
});