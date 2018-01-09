'use strict';

exports.helloWorldGreet = (name) => {
    if(typeof name !== 'string') {
        throw new TypeError('the name entered must be a string');
    }
    return 'Hello ' + name;
};