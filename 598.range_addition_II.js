/*
598. Range Addition II
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return the number of maximum integers in the matrix after performing all the operations.

Example 1:

Input: m = 3, n = 3, ops = [[2,2],[3,3]]
Output: 4
Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.
Example 2:

Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
Output: 4
Example 3:

Input: m = 3, n = 3, ops = []
Output: 9
 
Constraints:

1 <= m, n <= 4 * 104
0 <= ops.length <= 104
ops[i].length == 2
1 <= ai <= m
1 <= bi <= n
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */

var maxCount = function (m, n, ops) {
    /*const initialMatrix = [];
    for (let i = 0; i < m; i++) {
        initialMatrix.push([]);
        for (let j = 0; j < n; j++) {
            initialMatrix[i].push(0);
        }
    }

    for (let i = 0; i < ops.length; i++) {
        for (let a = 0; a < ops[i][0]; a++) {
            for (let b = 0; b < ops[i][1]; b++) {
                initialMatrix[a][b] += 1;
            }
        }
    }

    let count = 0;
    let max = 0;
    for (let i = 0; i < initialMatrix.length; i++) {
        for (let j = 0; j < initialMatrix[i].length; j++) {

        }
    }
    return initialMatrix;*/
    
    /*const initialMatrix = {};
    for (let i=0;i<m*n;i++) {
        initialMatrix[i] = 0;
    }

    for (let i = 0; i < ops.length; i++) {
        for (let j = 0; j < ops[i][0] * ops[i][1]; j++) {
          initialMatrix[j] += 1;
        }
    }

    let max = initialMatrix[0];
    let count = 0;
    for (let value of Object.values(initialMatrix)) {
      if (value === max) count++;
    }
    return count;*/

    if (!ops.length) return m*n;

    let minA = Infinity;
    let minB = Infinity;

    for (let i = 0; i < ops.length; i++) {
        minA = Math.min(minA, ops[i][0]);
        minB = Math.min(minB, ops[i][1]);
    }

    return minA * minB;
};

console.log(maxCount(3, 3, [[2, 2], [3, 3]]))
console.log(maxCount(3, 3, [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]))
console.log(maxCount(3, 3, []))
console.log(maxCount(39999, 39999, [[19999,19999]]))