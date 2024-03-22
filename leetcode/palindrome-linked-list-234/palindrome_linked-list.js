import {ListNode} from '../../data-structures/list-node.js';
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
export const isPalindrome = function(head) {
    let current = head;
    let reverse = null;

    while (current) {
        const node = new ListNode(current.val);
        node.next = reverse;
        reverse = node;
        current = current.next;
    }

    while (reverse && head) {
        if (reverse.val !== head.val) {
            return false;
        }
        reverse = reverse.next;
        head = head.next;
    }
    return true;
};
