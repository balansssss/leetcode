/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
    const obj = {};

    for (let i=0;i<s.length;i++) {
        const letS = s[i];
        const letT = t[i];
        if (!obj[letS] && !Object.values(obj).includes(letT)) {
            obj[letS] = letT;
        } else {
            if (obj[letS] === letT) {
                continue;
            }
            return false;
        }
    }

    return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));    
console.log(isIsomorphic('badc', 'baba'));    