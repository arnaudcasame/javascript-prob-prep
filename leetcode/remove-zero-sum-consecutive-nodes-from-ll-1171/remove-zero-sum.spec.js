/* eslint-disable max-len */
import {expect} from 'chai';
import {ListNode} from '../../data-structures/list-node.js';
import {removeZeroSumSublists} from './remove-zero-sum.js';

export default describe('#1171: Remove Zero Sum Consecutive Nodes from Linked List', function() {
    xit('Should return [3, 1]', function() {
        const head = ListNode.fromArray([1, 2, -3, 3, 1]);
        const result = removeZeroSumSublists(head);
        expect(ListNode.toArray(result)).to.deep.equal([3, 1]);
    });

    xit('Should return [1, 2, 4]', function() {
        const head = ListNode.fromArray([1, 2, 3, -3, 4]);
        const result = removeZeroSumSublists(head);
        expect(ListNode.toArray(result)).to.deep.equal([1, 2, 4]);
    });

    xit('Should return [1]', function() {
        const head = ListNode.fromArray([1, 2, 3, -3, -2]);
        const result = removeZeroSumSublists(head);
        expect(ListNode.toArray(result)).to.deep.equal([1]);
    });
});
