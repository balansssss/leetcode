/*
100. Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {

    function nodeTraversal(tree) {

        let result = '';

        if (!tree) {
            return;
        }

        const queue = [];
        queue.push(tree);

        while(queue.length) {
            const node = queue.shift();
            result += node.val;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                if (!node.left) {
                    result += 'null';
                }
                queue.push(node.right);
            }
        }

        return result;
    }

    return nodeTraversal(p) === nodeTraversal(q);
};

/*console.log(isSameTree({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}, {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}))*/
console.log(isSameTree({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: null
}, {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: null
    }
}))
