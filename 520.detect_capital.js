/*
520. Detect Capital
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false
 
Constraints:

1 <= word.length <= 100
word consists of lowercase and uppercase English letters.
*/

/**
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function(word) {
    if (word === word.toUpperCase() || word === word.toLowerCase()) return true;
    const firstLetter = word[0];
    const restLetters = word.substring(1);
    if (firstLetter === firstLetter.toUpperCase() && restLetters === restLetters.toLowerCase()) return true;
    return false;
};

console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("FlaG"))