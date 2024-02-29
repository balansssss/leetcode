/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    
    function findPair(str) {
        if (str.length > 1) {
            if (str.indexOf('()') !== -1) {
                str = str.replace('()','');
            } else if (str.indexOf('[]') !== -1) {
                str = str.replace('[]','');
            } else if (str.indexOf('{}') !== -1) {
                str = str.replace('{}','');
            } else {
                return false;
            }
            return findPair(str);
        } else if (str.length === 0) {
            return true;
        } else {
            return false;
        }
    } 

    return findPair(s);
};

console.log(isValid("()"))
console.log(isValid("(())"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))