/*
202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {

    function checkHappy(n) {
        let nums = String(n).split('');
        if (n === 1 || n === 7) {
            return true;
        } 
        if (nums.length < 2) {
            return false;
        }

        let result = nums.reduce((prev, cur) => prev + Math.pow(Number(cur),2), 0);
        if (result === 1) {
            return true;
        }

        return checkHappy(result);
    }

    return checkHappy(n);
};

console.log(isHappy(19));
console.log(isHappy(9));
console.log(isHappy(100));
console.log(isHappy(1));