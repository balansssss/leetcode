/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {

    let prefix = '';
    
    for (let i=0;i<strs[0].length;i++) {
        prefix += strs[0][i];
        const resArr = strs.filter(l => l.startsWith(prefix));
        if (resArr.length < strs.length) {
            return prefix.slice(0,prefix.length-1);
        }
    }

    return prefix;
};

//console.log(longestCommonPrefix(["flower", "flower1", "flower2", "flower3"]))
//console.log(longestCommonPrefix(["flower","flow","flight"]))
//console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix(["c","acc","ccc"]))