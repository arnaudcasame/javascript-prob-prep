import {ListNode} from '../../data-structures/list-node.js';
import {middleNode} from './middle-linked-list.js';
import {expect} from 'chai';


export default describe('#876: Middle of the Linked List', function() {
    xit('Should return [3,4,5]', function() {
        const head = ListNode.fromArray([1, 2, 3, 4, 5]);
        expect(middleNode(head)).to.deep.equal([3, 4, 5]);
    });

    xit('Should return [4,5,6]', function() {
        const head = ListNode.fromArray([1, 2, 3, 4, 5, 6]);
        expect(middleNode(head)).to.deep.equal([4, 5, 6]);
    });
});

