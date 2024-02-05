/* eslint-disable max-len */
import {onesMinusZeros} from './diff-between-ones-zeros.js';
import {expect} from 'chai';

export default describe.skip('Difference Between Ones and Zeros in Row and Column', function() {
    it('Should return [[0,0,4],[0,0,4],[-2,-2,2]]', function() {
        expect(onesMinusZeros([[0, 1, 1], [1, 0, 1], [0, 0, 1]])).to.deep.equal([[0, 0, 4], [0, 0, 4], [-2, -2, 2]]);
    });

    it('Should return [[5,5,5],[5,5,5]]', function() {
        expect(onesMinusZeros([[1, 1, 1], [1, 1, 1]])).to.deep.equal([[5, 5, 5], [5, 5, 5]]);
    });
});
