'use strict';

exports.helloWorldGreet = (name) => {
    if(typeof name === 'string') return 'Hello ' + name;
    return null;
};