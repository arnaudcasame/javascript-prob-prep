import {expect} from 'chai';
import {findMedianSortedArrays} from './median-two-sorted.js';

export default describe('#4: Median of Two Sorted Array', function() {
    it('Should return 2.00000 for ', function() {
        expect(findMedianSortedArrays([1, 3], [2])).to.equal(2.00000);
    });

    it('Should return 2.5 for ', function() {
        expect(findMedianSortedArrays([1, 2], [3, 4])).to.equal(2.5);
    });
});
