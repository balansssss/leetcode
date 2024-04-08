/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {

    if (!head) {
        return null;
    }

    const reverseValues = [];

    while(head) {
        reverseValues.push(head.val);
        head = head.next;
    }

    reverseValues.reverse();
    const result = {
        val: null,
        next: null
    };
    let curNode = result;

    for (let i=0;i<reverseValues.length;i++) {
        curNode.val = reverseValues[i];
        if (i === reverseValues.length - 1) {
            curNode.next = null;
        } else {
            curNode.next = {
                val: null,
                next: null
            };
        }
        curNode = curNode.next;
    }

    return result;
    
};

console.log(reverseList({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}))