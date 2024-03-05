/*
101. Symmetric Tree
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
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
 * @return {boolean}
 */

var isSymmetric = function (root) {
    const queue = [];
    queue.push(root.left, root.right);

    while (queue.length) {
        let leftNode = queue.shift();
        let rightNode = queue.shift();
        if (leftNode == null && rightNode == null) {
            continue;
        }
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
            return false;
        }
        queue.push(leftNode.left, rightNode.right, leftNode.right, rightNode.left);

    }
    return true;
    
};

/*console.log(isSymmetric({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}))*

console.log(isSymmetric({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}))*/

/*console.log(isSymmetric({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 2,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    }
}))*/

console.log(isSymmetric({
    val: 2,
    left: {
        val: 3,
        left: {
            val: 4,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 5,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: {
                val: 9,
                left: null,
                right: null
            }
        },
    },
    right: {
        val: 3,
        left: {
            val: 5,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            }
        },
        right: {
            val: 4,
            left: null,
            right: {
                val: 6,
                left: null,
                right: null
            }
        }
    }
}))