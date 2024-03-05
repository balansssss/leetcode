/*
144. Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.
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
 * @return {number[]}
 */

var preorderTraversal = function(root) {
    let res = [];

    function traversal(root) {
        if (!root) {
            return;
        }
    
        if (root.val != null) {
            res.push(root.val);
        }
    
        if (root.left) {
            traversal(root.left);
        }

        if (root.right) {
            traversal(root.right);
        }
    }
    
    traversal(root);

    return res;
};

console.log(preorderTraversal({
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null
    }
}))