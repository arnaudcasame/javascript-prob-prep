import {expect} from 'chai';
import {canTraverseAllPairs} from './can-traverse-all-pairs.js';

export default describe('#2709: Greatest Common Divisor Traversal', function() {
    xit('Should return true for [2, 3, 6]', function() {
        expect(canTraverseAllPairs([2, 3, 6])).to.be.true;
    });

    xit('Should return false for [3,9,5]', function() {
        expect(canTraverseAllPairs([3, 9, 5])).to.be.false;
    });

    xit('Should return true for [4,3,12,8]', function() {
        expect(canTraverseAllPairs([4, 3, 12, 8])).to.be.true;
    });
});
