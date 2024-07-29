/*
530. Minimum Absolute Difference in BST

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

Example 1:

Input: root = [4,2,6,1,3]
Output: 1
Example 2:

Input: root = [1,0,48,null,null,12,49]
Output: 1
 
Constraints:

The number of nodes in the tree is in the range [2, 104].
0 <= Node.val <= 105
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var getMinimumDifference = function(root) {

    /*let minDiff = [];

    function innerFunction(root) {
        while (root) {
            if (root.left) {
                minDiff.push(Math.abs(root.val - root.left.val));
                innerFunction(root.left);
            }
            if (root.right) {
                minDiff.push(Math.abs(root.val - root.right.val));
                innerFunction(root.right);
            }
            return;
        }
    }
    
    innerFunction(root);
    return Math.min(...minDiff);*/

    let values = [];

    function innerFunction(root) {
        while (root) {
            values.push(root.val);
            if (root.left) {
                innerFunction(root.left);
            }
            if (root.right) {
                innerFunction(root.right);
            }
            return;
        }
    }
    
    innerFunction(root);

    let minDiff = null;

    for (let i=0;i<values.length;i++) {
        for (let j=i+1;j<values.length;j++) {
            const diff = Math.abs(values[i] - values[j]);
            if (!minDiff || minDiff > diff) {
                minDiff = diff;
            }
        }
    }
    return minDiff;
};

console.log(getMinimumDifference({
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 6,
        left: null,
        right: null
    }
}));

console.log(getMinimumDifference({
    val: 1,
    left: {
        val: 0,
        left: null,
        right: null
    },
    right: {
        val: 48,
        left: {
            val: 12,
            left: null,
            right: null
        },
        right: {
            val: 49,
            left: null,
            right: null
        }
    }
}));