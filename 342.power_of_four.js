/*
342. Power of Four

Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true
 

Constraints:

-231 <= n <= 231 - 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfFour = function(n) {
    if (n === 1) return true;
    if (n < 4) return false;

    while (n%4===0) {
        n = n/4;
    }
    
    return n === 1; 
};

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(15))
console.log(isPowerOfFour(64))