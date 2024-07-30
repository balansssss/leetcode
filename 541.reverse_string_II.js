/*
541. Reverse String II
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function(s, k) {
    /*const firstPart = s.slice(0, k).split("").reverse().join("");
    const lastPart = s.slice(k);
    return firstPart+lastPart;*/

    const parts = [];

    let str = "";

    for (let i=0;i<s.length;i++) {
        str += s[i];
        if ((i+1)%k === 0) {
            parts.push(str);
            str = "";
        }
    }

    if (parts.length*k < s.length) parts.push(s.slice(parts.length*k));

    for (let i=0;i<parts.length;i++) {
        if (i%2 !== 1) {
            parts[i] = parts[i].split("").reverse().join("");
        }
    }

    return parts.join("");
};

//console.log(reverseStr("abcdefg", 2)); //bacdfeg
//console.log(reverseStr("abcd", 2));
//console.log(reverseStr("abcdef", 3));
console.log(reverseStr("abcdefg", 4)); //dcbaefg
console.log(reverseStr("hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl", 39));

