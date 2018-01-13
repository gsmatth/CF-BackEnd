'use strict';

const fs = require('fs');
const reader = require('../lib/reader');


describe('reader module', () => {
  test('asset method', (done) => {
    const fileNames = fs.readdirSync(`${__dirname}/../assets`);
    reader.assets(fileNames, (err, data) => {
      expect(data[0]).toEqual('one is file name');
      expect(data[1]).toEqual('two is file name');
      expect(data[2]).toEqual('three is file name');
      done();
    });
  });
});