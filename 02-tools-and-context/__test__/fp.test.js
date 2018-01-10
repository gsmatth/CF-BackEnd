'use strict';

const fp = require('../lib/fp');

describe('fp module', () => {

  describe('map method', () => {
    test('returns a new, accurate array when provided correct input', () => {
      let testArray = [2, 4, 6];
      const mapTest = (x) => x * 2;
      let mapResults = fp.map(mapTest, testArray);
      expect(mapResults).toEqual([4, 8, 12]);
    });
    test('returns Error because an empty array was passed as argument', () => {
      let emptyArray = '';
      const mapTest = (x) => x * 2;
      function mapWithEmptyArray() {
        fp.map(mapTest, emptyArray);
      }
      expect(mapWithEmptyArray).toThrowError(Error);
      expect(mapWithEmptyArray).toThrowError('collection argument passed to fp.map is empty');
    });    
  });

  describe('filter method', () => {
    test('returns a new array when provided proper input', () => {
      let words = ['test', 'testing', 'tested', 'one', 'two', 'tree'];
      expect(fp.filter(word => word.length > 2, words).length).toEqual(6);
    });
    test('returns Error if collection passed is empty', () => {
      let words = [];
      function filterWithEmptyArray (){
        fp.filter(word => word.length > 2, words);
      }
      expect(filterWithEmptyArray).toThrowError(Error);
      expect(filterWithEmptyArray).toThrowError('collection passed to fp.filter is empty');
    });
  });

  describe('reduce method', () => {
    test('returns accurate value when provided correct input', () => {
      let numbersArray = [1, 5, 8, 9, 12, 15];
      const callback = (accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue;
      };
      const initialValue = 0;
      let reducedValue = fp.reduce(callback, initialValue, numbersArray);
      expect(reducedValue).toEqual(50);
    });
    test('returns an Error if array passed as argument is empty', () => {
      let numbersArray = [];
      const initialValue = 0;
      const callback = (accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue;
      };
      function reduceWithAnEmptyArray() {
        fp.reduce(callback, initialValue, numbersArray);
      }
      expect(reduceWithAnEmptyArray).toThrowError(Error);
      expect(reduceWithAnEmptyArray).toThrowError('collection passed to fp.reduce is empty');
    });
  });

  describe('slice method', () => {
    test('returns a new array when passed proper input', () => {
      let stringArray = ['ert', 'sdf', 'gfd'];
      let modifiedArray = fp.slice(1, 2, stringArray);
      expect(modifiedArray).toEqual(['sdf']);
    });
    test('returns a new array containing the last item from the original array', () => {
      let stringArray = ['ert', 'sdf', 'gfd'];
      let modifiedArray = fp.slice(2, (stringArray.length + 1), stringArray);
      expect(modifiedArray).toEqual(['gfd']);
    });
    test('returns Error if argument passed for collection is empty', () => {
      let stringInput = [];
      function sliceWithString () {
        fp.slice(0, 2, stringInput);
      }
      expect(sliceWithString).toThrowError(Error);
    });
    test('returns TypeError if begin argument is not a number', () => {
      let stringInput = [1, 2, 3];
      function sliceWithString () {
        fp.slice('test', 2, stringInput);
      }

      expect(sliceWithString).toThrowError(TypeError);
    });
    test('returns TypeError if end argument is not a number', () => {
      let stringInput = [1, 2, 3];
      function sliceWithString () {
        fp.slice(0, {}, stringInput);
      }

      expect(sliceWithString).toThrowError(TypeError);
    });
  });
});