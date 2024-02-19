/* eslint-disable max-len */
import {maxSumAfterPartitioning} from './partition-array.js';
import {expect} from 'chai';

export default describe('#1043: Partition Array for Maximum Sum', function() {
    it('Should return 84 for array: [1,15,7,9,2,5,10]', function() {
        expect(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)).to.equal(84);
    });

    it('Should return 83 for array: [1,4,1,5,7,3,6,1,9,9,3]', function() {
        expect(maxSumAfterPartitioning([1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], 4)).to.equal(83);
    });

    it('Should return 1 for array: [1]', function() {
        expect(maxSumAfterPartitioning([1], 1)).to.equal(1);
    });
});
