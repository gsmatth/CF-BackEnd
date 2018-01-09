'use strict';


let greet = require ('../lib/greet');

describe('greet module', () => {
    test ('returns an accurate string, when passed a valid string argument', () => {
        let nameString = 'Veronica';
        let completeString = greet.helloWorldGreet(nameString);
        expect(completeString).toEqual('Hello Veronica');
    });
    test('throws TypeError and message "the name entered must be a string" ', () => {
        let invalidStringParameter = 67;
        function greetWithoutString(){
            greet.helloWorldGreet(invalidStringParameter);
        }
        
        expect(greetWithoutString).toThrowError(TypeError);
        expect(greetWithoutString).toThrowError('the name entered must be a string');
    });

    });