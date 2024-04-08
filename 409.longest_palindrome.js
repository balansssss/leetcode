/*
409. Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {
    let result = 0;
    let unique = new Set();


    for (let i=0;i<s.length;i++) {
       if (unique.has(s[i])) {
        result += 2;
        unique.delete(s[i]);
       } else {
        unique.add(s[i]);
       }
    }

    return result < s.length ? result + 1 : result;
};

console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('a'))