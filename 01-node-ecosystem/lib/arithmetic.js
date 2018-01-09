'use strict';

//alternate technique
// module.exports = {
 
//     add : (a, b) => {
//         if((typeof a !== 'number') || (typeof b !== 'number')) return null;
//         return a + b;
//     },

//     subtract: (a,b) => {
//         if((typeof a !== 'number') || (typeof b !== 'number')) return null;
//         return a - b;
//     }
// };

const Arithmetic = module.exports = {};

Arithmetic.add = (a, b) => {
    if((typeof a !== 'number') || (typeof b !== 'number')) return null;
    return a + b;
};

Arithmetic.subtract = (a,b) => {
    if((typeof a !== 'number') || (typeof b !== 'number')) return null;
    return a - b;
};