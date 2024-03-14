import {expect} from 'chai';
import {increasingTriplet} from './increasing-triplet-subsequence.js';

export default describe('#334: Increasing Triplet Subsequence', function() {
    it('Should return true for [1,2,3,4,5]', function() {
        expect(increasingTriplet([1, 2, 3, 4, 5])).to.be.true;
    });

    it('Should return false for [5,4,3,2,1]', function() {
        expect(increasingTriplet([5, 4, 3, 2, 1])).to.be.false;
    });

    it('Should return false for [2,4,-2,-3]', function() {
        expect(increasingTriplet([2, 4, -2, -3])).to.be.false;
    });

    it('Should return true for [2,1,5,0,4,6]', function() {
        expect(increasingTriplet([2, 1, 5, 0, 4, 6])).to.be.true;
    });
});
