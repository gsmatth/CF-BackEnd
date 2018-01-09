'use strict';


let greet = require ('../lib/greet');

describe('greet module', () => {
    test ('returns an accurate string, when passed a valid string argument', () => {
        let nameString = 'Veronica';
        let completeString = greet.helloWorldGreet(nameString);
        expect(completeString).toEqual('Hello Veronica');
    });
    test('returns "null" if the parameter is not a string', () => {
        let invalidStringParameter = 67;
        let nullReturnValue = greet.helloWorldGreet(invalidStringParameter);
        expect(nullReturnValue).toEqual(null);
    });

    });