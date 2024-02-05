/* eslint-disable max-len */
import {maxProductDifference, maxProductDifferenceO} from './maximum-product-2-pairs.js';
import {expect} from 'chai';

export default describe.skip('Maximum Product Difference between 2 pairs ', function() {
    it('Should return 34 for [5,6,2,7,4]', function() {
        expect(maxProductDifference([5, 6, 2, 7, 4])).to.equal(34);
    });

    it('Should return 34 for [5,6,2,7,4]', function() {
        expect(maxProductDifferenceO([5, 6, 2, 7, 4])).to.equal(34);
    });

    it('Should return 64 for [4,2,5,9,7,4,8]', function() {
        expect(maxProductDifference([4, 2, 5, 9, 7, 4, 8])).to.equal(64);
    });

    it('Should return 64 for [4,2,5,9,7,4,8]', function() {
        expect(maxProductDifferenceO([4, 2, 5, 9, 7, 4, 8])).to.equal(64);
    });
});
