/*
119. Pascal's Triangle II

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const triangle = [[1], [1,1]];
    for (let a=triangle.length;a<rowIndex+1;a++) {
        const cur = triangle[triangle.length - 1];
        const row = [];
        for (let i=0;i<=cur.length;i++) {
            if (i===0 || i===cur.length) {
                row.push(1);
            } else {
                row.push(cur[i-1]+cur[i])
            }
        }
        triangle.push(row);
    }

    if (rowIndex === 1) triangle;

    return triangle[rowIndex];
};

console.log(getRow(3))