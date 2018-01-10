'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {
  if(!collection.length >= 1){
    throw new Error('collection argument passed to fp.map is empty');
  }
  return Array.prototype.map.call(collection, callback);
};

fp.filter = (callback, collection) => {
  /**
   * "collection" parameter below is the "thisArg" for CALL method, it is what the filter method will use as its "this" and operate on.
   * "callback" parameter below is the callback for FILTER method
   */
  if(!collection.length >= 1){
    throw new Error('collection passed to fp.filter is empty');
  }
  return Array.prototype.filter.call(collection, callback);
};

fp.reduce = (callback, initialState, collection) => {
  if(!collection.length >= 1 ){
    throw new Error('collection passed to fp.reduce is empty');
  }
  return Array.prototype.reduce.call(collection,callback, initialState);
};

fp.slice = (begin, end, collection) => {
  if(!collection.length >= 1){
    throw new Error('collection passed to fp.slice has no items');
  }
  if(typeof begin !== 'number'){
    throw new TypeError('begin parameter passed to fp.slice is not a number');
  }
  if(typeof end !== 'number'){
    throw new TypeError('end parameter passed to fp.slice is not a number');
  }
  return Array.prototype.slice.apply(collection, [begin, end]);
};