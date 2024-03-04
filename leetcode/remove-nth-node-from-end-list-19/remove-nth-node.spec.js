import {removeNthFromEnd} from './remove-nth-node.js';
import {expect} from 'chai';
import {ListNode} from '../../data-structures/list-node.js';

export default describe('#19: Remove Nth Node From End of List', function() {
    xit('Should return [1,2,3,5] for input: (1)(2)(3)(4)(5)', function() {
        const node = ListNode.fromArray([1, 2, 3, 4, 5]);
        expect(removeNthFromEnd(node, 2)).to.deep.equal([1, 2, 3, 5]);
    });

    xit('Should return [] for input: (1)', function() {
        const node = ListNode.fromArray([1]);
        expect(removeNthFromEnd(node, 1)).to.deep.equal([]);
    });

    xit('Should return [1] for input: (1)(2)', function() {
        const node = ListNode.fromArray([1, 2]);
        expect(removeNthFromEnd(node, 1)).to.deep.equal([1]);
    });
});
