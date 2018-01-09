'use strict';

let arithmetic = require('../lib/arithmetic');

describe('arithmetic module', () => {
    test('add method, returns sum of two numbers', () => {
        let a = 6;
        let b = 8;
        let sum = arithmetic.add(a, b);
        expect(sum).toEqual(a + b);
    });
    test('add method, returns "null" if either parameter is not a number', () => {
        let c = 5;
        let d = true;
        let nonNumberReturnValue = arithmetic.add(c, d);
        expect(nonNumberReturnValue).toEqual(null);
    });
    test('subtract method, returns accurate remainder of subtraction of two provided numbers', () => {
        let a = 10;
        let b = 5;
        let remainder = arithmetic.subtract(a, b);
        expect(remainder).toEqual(a-b);

    });
    test('subtract method returns null if either parameter is not a number', () => {
        let c = 87;
        let d = 'test';
        let nonNumberReturnValue = arithmetic.subtract(c, d);
        expect(nonNumberReturnValue).toEqual(null);
    });
});