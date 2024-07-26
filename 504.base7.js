/*
504. Base 7

Given an integer num, return a string of its base 7 representation.

Example 1:

Input: num = 100
Output: "202"
Example 2:

Input: num = -7
Output: "-10"
 

Constraints:

-107 <= num <= 107
*/

/**
 * @param {number} num
 * @return {string}
 */

var convertToBase7 = function(num) {
    if (num === 0) return '0';

    let result = '';
    let abs = Math.abs(num);

    while (abs/7 > 0) {
        result = abs % 7 + result;
        abs = Math.floor(abs / 7);
    }

    if (num < 0) {
        result = '-' + result;
    }

    return result;
};

console.log(convertToBase7(100))
console.log(convertToBase7(-7))
