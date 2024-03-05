/*
168. Excel Sheet Column Title

Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

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

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"

*/

/**
 * @param {number} columnNumber
 * @return {string}
 */

var convertToTitle = function(columnNumber) {
    function getNumber(number) {
        return String.fromCharCode(65+number);
    }
    let res = '';

    while(columnNumber > 0) {
        columnNumber--;
        res = getNumber(columnNumber % 26) + res;
        columnNumber = Math.floor(columnNumber/26);  
    }
    return res;
};

//console.log(convertToTitle(1)) //A
//console.log(convertToTitle(28)) //AB
console.log(convertToTitle(52)) //AZ
console.log(convertToTitle(701)) //ZY
//console.log(convertToTitle(2147483647)) //FXSHRXW
//console.log(convertToTitle(731)) //ABC