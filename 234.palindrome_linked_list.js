/*
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
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
 * @return {boolean}
 */


var isPalindrome = function(head) {
    let res = [];

    while(head) {
        res.push(head.val);
        head = head.next;
    }

    return res.join('') === res.reverse().join('');
};

console.log(isPalindrome({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 1,
                next: null
            }
        }
    }
}))