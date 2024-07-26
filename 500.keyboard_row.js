/*
500. Keyboard Row

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

 

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 

Constraints:

1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(words) {
    const result = [];

    const firstRow = "qwertyuiop";
    const secondRow = "asdfghjkl";
    const thirdRow = "zxcvbnm";

    for (let i=0;i<words.length;i++) {
        let curRow = null;
        let prevRow = null;
        for (let j=0;j<words[i].length;j++) {
            if (firstRow.includes(words[i][j].toLowerCase())) {
                curRow = 1;
            } else if (secondRow.includes(words[i][j].toLowerCase())) {
                curRow = 2;
            } else if (thirdRow.includes(words[i][j].toLowerCase())) {
                curRow = 3;
            }
            if (prevRow && prevRow !== curRow) break;
            prevRow = curRow;
        }
        if (prevRow !== curRow) continue;
        result.push(words[i]);
    }

    return result;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["adsdf","sfd"]));