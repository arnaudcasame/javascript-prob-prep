/* eslint-disable no-undef */
/* eslint-disable max-len */
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
 * @return {ListNode}
 */
export const removeZeroSumSublists = function(head) {
    let val = 0;
    const tmp = new ListNode(0, head);
    const bucket = new Map();
    bucket.set(0, tmp);

    while (head) {
        val += head.val;
        if (bucket.has(val)) {
            let tmpRemove = bucket.get(val).next; let key = val;

            // console.log('1', Object.keys(bucket));
            while (tmpRemove !== head) {
                key += tmpRemove.val;
                // console.log('removing...', key);
                bucket.delete(key);
                tmpRemove = tmpRemove.next;
            }
            // console.log('2', Object.keys(bucket));
            bucket.get(val).next = head.next;
        } else {
            bucket.set(val, head);
        }
        head = head.next;
    }
    return tmp.next;
};
