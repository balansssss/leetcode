/*
572. Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:

Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:

Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false

Constraints:

The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function compareTrees(node1, node2) {
    if (!node1 && !node2) return true;
    else if (!node1 || !node2) return false;
    else return node1.val === node2.val && compareTrees(node1.left, node2.left) && compareTrees(node1.right, node2.right);
    
}

var isSubtree = function(root, subRoot) {
    if (!root) return false;
    else {
        return compareTrees(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
};

console.log(isSubtree({
    val: 3,
    left: {
        val: 4,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: null,
        right: null
    }
},{
    val: 4,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: null,
        right: null
    }
    
}))

/*console.log(isSubtree({
    val:1,
    left: {
        val: 1,
        left: null,
        right: null
    }, 
    right: null
},{
    val:1,
    left: null,
    right: null
}));*/