import {expect} from 'chai';
import {canTraverseAllPairs} from './can-traverse-all-pairs.js';

export default describe('#2709: Greatest Common Divisor Traversal', function() {
    it('Should return true for [2, 3, 6]', function() {
        expect(canTraverseAllPairs([2, 3, 6])).to.be.true;
    });

    it('Should return false for [3,9,5]', function() {
        expect(canTraverseAllPairs([3, 9, 5])).to.be.false;
    });

    it('Should return true for [4,3,12,8]', function() {
        expect(canTraverseAllPairs([4, 3, 12, 8])).to.be.true;
    });

    it('Should return false for [28, 39]', function() {
        expect(canTraverseAllPairs([28, 39])).to.be.false;
    });

    it('Should return false for [21,88,75]', function() {
        expect(canTraverseAllPairs([21, 88, 75])).to.be.false;
    });

    it('Should return false for [1, 1]', function() {
        expect(canTraverseAllPairs([1, 1])).to.be.false;
    });

    it('Should return true for [10]', function() {
        expect(canTraverseAllPairs([10])).to.be.true;
    });
});
