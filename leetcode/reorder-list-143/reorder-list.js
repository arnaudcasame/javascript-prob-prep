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
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
    let current = head;
    let half = head;
    let index = 0;

    while (current && current.next) {
        half = half.next;
        current = current.next.next;
        index++;
    }

    if (current) {
        index = (index * 2) + 1;
    } else {
        index = index * 2;
    }

    let reverse = null;
    while (half) {
        const tmp = new ListNode(half.val);
        tmp.next = reverse;
        reverse = tmp;
        half = half.next;
    }

    current = head;
    while (reverse) {
        const tmp = reverse;
        reverse = reverse.next;

        tmp.next = current.next;
        current.next = tmp;

        if (!reverse && index%2 === 0) {
            current.next.next = null;
            // break;
        } else if (!reverse && index%2 !== 0) {
            current.next = null;
            // break;
        }
        current = current.next ? current.next.next : null;
    }


    // console.log(index, ListNode.toArray(head));
};

export default {
    reorderList: reorderList,
};
