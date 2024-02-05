/* eslint-disable max-len */
import {mergeTwoLists} from './merge-two-lists.js';
import {ListNode} from '../../data-structures/list-node.js';
import {expect} from 'chai';


export default describe.skip('Merge Two Lists', function() {
    it('Should return [1, 1, 2, 3, 4, 4] for [1,2,4], [1,3,4]', function() {
        expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).to.deep.equal(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))));
    });

    it('Should return empty Array for [], []', function() {
        expect(mergeTwoLists([], [])).to.be.undefined;
    });

    it('Should return [0] for [], [0]', function() {
        expect(mergeTwoLists([], [0])).to.deep.equal(new ListNode(0));
    });
});
