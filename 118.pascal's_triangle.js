/*
118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    const triangle = [[1], [1,1]];
    for (let a=triangle.length;a<numRows;a++) {
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

    if (numRows === 1) triangle.pop();

    return triangle;
};

console.log(generate(3))