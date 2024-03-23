import {ListNode} from '../../data-structures/list-node.js';
import ordering from './reorder-list.js';
import sinon from 'sinon';
import {expect} from 'chai';


export default describe('#143: Reorder List', function() {
    let spy;
    beforeEach(function() {
        spy = sinon.spy(ordering, 'reorderList');
    });

    xit('Should alter the argument to equal [1,4,2,3]', function() {
        const head = ListNode.fromArray([1, 2, 3, 4]);
        ordering.reorderList(head);

        const call = spy.getCall(0);
        expect(ListNode.toArray(call.args[0])).to.deep.equal([1, 4, 2, 3]);
    });

    xit('Should alter the argument to equal [1,5,2,4,3]', function() {
        const head = ListNode.fromArray([1, 2, 3, 4, 5]);
        ordering.reorderList(head);

        const call = spy.getCall(0);
        expect(ListNode.toArray(call.args[0])).to.deep.equal([1, 5, 2, 4, 3]);
    });

    afterEach(function() {
        spy.restore();
    });
});
