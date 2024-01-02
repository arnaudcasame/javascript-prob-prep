import {intersect} from './intersection.js';
import {ListNode} from '../../../data-structures/list-node.js';

export default describe('Intersection of 2 LinkedLists', function() {
    it('Should return the intersecting node (7)', function() {
        const links = ListNode.link2Lists([3, 1, 5, 9, 7, 2, 1],
            [4, 6, 7, 2, 1], 4, 2);
        const list1 = links[0];
        const list2 = links[1];
        // eslint-disable-next-line no-undef
        expect(intersect(list1, list2)).to.equal('(7)');
    });

    it('Should return null for non-intersecting nodes', function() {
        const list1 = ListNode.fromArray([3, 1, 5, 9, 7, 2, 1]);
        const list2 = ListNode.fromArray([4, 6, 7, 2, 1]);
        // eslint-disable-next-line no-undef
        expect(intersect(list1, list2)).to.be.null;
    });

    it('Should return the intersecting node (2)', function() {
        const links = ListNode.link2Lists(
            [2, 0, 0, 4, 2, 8, 8, 5, 2, 8, 7, 3, 5, 2],
            [7, 9, 4, 5, 2, 8, 7, 3, 5, 2], 8, 4);
        const list1 = links[0];
        const list2 = links[1];
        // eslint-disable-next-line no-undef
        expect(intersect(list1, list2)).to.equal('(2)');
    });
});
