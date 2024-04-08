/*
345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const res = s.split('');

    let left = 0;
    let right = res.length - 1;
    
    while (right > left) {
        if (!vowels.includes(res[left])) {
            left++;
            continue;
        }
        if (!vowels.includes(res[right])) {
            right--;
            continue;
        }
        const temp = res[left];
        res[left] = res[right];
        res[right] = temp;
        left++;
        right--;
    }

    return res.join('');
};

console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))