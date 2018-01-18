'use strict';

const fs = require('fs');
const transformUtil = require('./lib/transform-util');
const Bitmap = require('./model/bitmap');
const transforms = require('./lib/transforms');
const filePath = `${__dirname}/__test__/assets/${process.argv[2]}`;
const transform = process.argv[3];


transformUtil.getFile(filePath)
  .then(function(buf){
    if(buf.toString('utf8',0,2) !== 'BM'){
      return Promise.reject(new Error (`BMValue not equal to BM.
        The file you loaded was the wrong file format`));
    }
    /*
    by using return, we are sending to resolve, which passes the value to the next "then" block.
    If we generate an error or explicitly Promise.reject(), we are sending to reject, which passes the value to the next catch block.
    **/
    return new Bitmap(buf);
  })
  .then((bitmapObject) => {
    console.log('BMPFileSize: ', bitmapObject.BMPFileSizeBytes);
    console.log('dibHeaderSize: ', bitmapObject.dibHeaderSize);
    console.log('numberOfBitsPerPixel: ', bitmapObject.numberOfBitsPerPixel);
    console.log('colorPaletteOffset: ', bitmapObject.colorTableOffset);
    console.log('colorTableBuf: ', bitmapObject.colorTableBuf);
    
    return bitmapObject;
  })
  .then((bitmapObject) => {
    let transformedBitmapObject = transforms[`${transform}`](bitmapObject);
    return transformedBitmapObject;
  })
  .then((transformedBitmapObject) => {
    fs.writeFile('./__test__/assets/transformed-bitmap.bmp', transformedBitmapObject.buf, (err) => {
      if(err) throw err;
      console.log('The file has been saved');
    });
  })
  .catch(function(err){
    console.error('error: ', err);
  });