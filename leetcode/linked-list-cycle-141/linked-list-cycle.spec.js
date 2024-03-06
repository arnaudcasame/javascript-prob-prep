/* eslint-disable max-len */
import {hasCycle} from './linked-list-cycle.js';
import {expect} from 'chai';
import {ListNode} from '../../data-structures/list-node.js';

export default describe('#141: Linked List Cycle', function() {
    xit('Should return true if Linked List has cycle', function() {
        const tail = new ListNode(8);
        const cycle = new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, tail))))));
        tail.next = cycle;
        const head = new ListNode(1, cycle);
        expect(hasCycle(head)).to.be.true;
    });

    xit('Should return false if Linked List has no cycle', function() {
        const cycle = new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8)))))));
        const head = new ListNode(1, cycle);
        expect(hasCycle(head)).to.be.false;
    });

    xit('Should return true if Linked List has cycle', function() {
        const tail = new ListNode(40);
        const cycle = new ListNode(27, new ListNode(34, new ListNode(22, new ListNode(52, new ListNode(35, new ListNode(28, tail))))));
        tail.next = cycle;
        const head = new ListNode(74, cycle);
        expect(hasCycle(head)).to.be.true;
    });
});
