/*
404. Sum of Left Leaves

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
Example 2:

Input: root = [1]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-1000 <= Node.val <= 1000
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

var sumOfLeftLeaves = function(root) {
    let res = 0;

    const queue = [];
    const isLeft = [];
    
    if (!root) return res;
    if (root.left) {
        queue.push(root.left);
        isLeft.push(true);
    }
    if (root.right) {
        queue.push(root.right);
        isLeft.push(false);
    } 

    while(queue.length) {
        if (queue[0].left) {
            queue.push(queue[0].left);
            isLeft.push(true);
        }
        if (queue[0].right) {
            queue.push(queue[0].right);
            isLeft.push(false);
        }
        if (isLeft[0] && !queue[0].left && !queue[0].right) {
            res += queue[0].val;
        }
        queue.shift();
        isLeft.shift();
    }
    
    return res;
};

/*console.log(sumOfLeftLeaves({
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}))*/

console.log(sumOfLeftLeaves({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}))