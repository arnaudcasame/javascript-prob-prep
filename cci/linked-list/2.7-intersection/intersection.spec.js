import {intersect} from './intersection.js';
import {ListNode} from '../../../data-structures/list-node.js';
export default describe('Intersection of 2 LinkedLists', function() {
  xit('title', function() {
    const list1 = ListNode.fromArray([]);
    const list2 = ListNode.fromArray([]);
    // eslint-disable-next-line no-undef
    expect(intersect(list1, list2)).to.equal(0);
  });
});
