/* eslint-disable max-len */
import {expect} from 'chai';
import {longestOnes} from './max-consecutive.js';

export default describe('#1004: Max Consecutive Ones III', function() {
    it('Should return 6', function() {
        expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).to.equal(6);
    });

    it('Should return 10', function() {
        expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).to.equal(10);
    });
});
