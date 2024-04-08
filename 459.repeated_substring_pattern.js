/*
459. Repeated Substring Pattern

Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var repeatedSubstringPattern = function(s) {
    /*let countLetter = Math.floor(s.length/2);

    while (countLetter) {
        let values = new Set();
        let max = s.length/countLetter;
        for (let i=0;i<max;i++) {
            const cur = s.slice(i*countLetter,(i*countLetter)+countLetter);
            if (!values.has(cur)) {
                values.add(cur);
            }
        }
        if (values.size === 1) return true;
        countLetter -= 1;
    }

    return false;*/

    for (let i=1;i<=s.length/2;i++) {
        const check = s.substring(0,i).repeat(s.length/i);
        if (check === s) {
            return true;
        }
    }

    return false;
};

console.log(repeatedSubstringPattern('abab'))
console.log(repeatedSubstringPattern('aba'))
console.log(repeatedSubstringPattern('abcabcabcabc'))
console.log(repeatedSubstringPattern('ababab'))
console.log(repeatedSubstringPattern('ababba'))