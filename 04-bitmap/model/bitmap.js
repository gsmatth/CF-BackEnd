'use strict';


module.exports = Bitmap;

function Bitmap(fileBuffer){
  this.buf = fileBuffer;
  this.bmValue = fileBuffer.toString('utf8',0,2);
  this.BMPFileSizeBytes = fileBuffer.readUInt32LE(2);
  this.imageWidth = fileBuffer.readInt32LE(18);
  this.imageHeight = fileBuffer.readInt32LE(22);
  this.imageSize = fileBuffer.readUInt32LE(34);
  this.headerSize = 14;
  this.dibHeaderSize = fileBuffer.readUInt32LE(14);
  this.colorPlaneNumber = fileBuffer.readUInt16LE(26);
  this.numberOfBitsPerPixel = fileBuffer.readUInt16LE(28);
  this.numberOfColorsInPalette = fileBuffer.readUInt32LE(46);
  this.colorTableOffset = this.headerSize + this.dibHeaderSize + 1;
  this.colorTableBuf = fileBuffer.slice(this.colorTableOffset, (this.colorTableOffset + 1024));
  this.imageDataOffset = fileBuffer.readUInt32LE(10);
  this.endOfPixelData = this.imageSize + this.imageDataOffset;
  this.pixelData = fileBuffer.slice(this.imageDataOffset, this.endOfPixelData);
  this.buf = fileBuffer;

}


