/*
171. Excel Sheet Column Number

Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701
 

Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
*/

/**
 * @param {string} columnTitle
 * @return {number}
 */

var titleToNumber = function (columnTitle) {

    function getNumber(letter) {
        return letter.toLowerCase().charCodeAt() - 97 + 1;
    }

    let result = 0;

    for (let i=0,j=1;i<columnTitle.length-1;i++,j++) {
        result += (Math.pow(26,columnTitle.length-j) * getNumber(columnTitle[i]));
    }
    result += getNumber(columnTitle[columnTitle.length-1]);

    return result;

};

console.log(titleToNumber('A'))
console.log(titleToNumber('Y'))
//console.log(titleToNumber('AB'))
//console.log(titleToNumber('ZY'))
console.log(titleToNumber('ABC'))