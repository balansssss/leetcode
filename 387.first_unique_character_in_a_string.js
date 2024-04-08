/*
387. First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    let unique = new Set();

    for (let i=0;i<s.length;i++) {
        if (unique.has(s[i])) continue;
        unique.add(s[i]);
        const val = s.indexOf(s[i], i+1);
        if (val === -1) return i;
    }

    return -1;
};

console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetcode'))
console.log(firstUniqChar('aabb'))
console.log(firstUniqChar('aadadaad'))