'use strict';

const transforms = module.exports = {};

transforms.colorToGreyscale = (bitmapObject) => {

  for(let i = 3; i < bitmapObject.colorTableBuf.length; i += 4){
    let blue =  bitmapObject.colorTableBuf[i];
    let green =  bitmapObject.colorTableBuf[i + 1];
    let red =  bitmapObject.colorTableBuf[i + 2];
    let luminance = Math.ceil(0.299 * red + 0.587 * green + 0.144 * blue);
    bitmapObject.colorTableBuf[i] = luminance;
    bitmapObject.colorTableBuf[i + 1] = luminance;
    bitmapObject.colorTableBuf[i + 2] = luminance;
  }
  return bitmapObject;
};

transforms.redHighlight = (bitmapObject) => {
  for(let i = 5; i < bitmapObject.colorTableBuf.length; i+= 4){
    bitmapObject.colorTableBuf[i] = 255;
  }
  return bitmapObject;
};

transforms.swapRGB = (bitmapObject) => {
  bitmapObject.colorTableBuf.swap32();
  return bitmapObject;
};