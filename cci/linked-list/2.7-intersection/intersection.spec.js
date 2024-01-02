import {intersect} from './intersection.js';
import {ListNode} from '../../../data-structures/list-node.js';
export default describe('Intersection of 2 LinkedLists', function() {
    it('Should return the intersecting node', function() {
        const links = ListNode.link2Lists([3, 1, 5, 9, 7, 2, 1],
            [4, 6, 7, 2, 1], 4, 2);
        const list1 = links[0];
        const list2 = links[1];
        // eslint-disable-next-line no-undef
        expect(intersect(list1, list2)).to.equal(0);
    });
});
