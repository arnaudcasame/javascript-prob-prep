/* eslint-disable max-len */
import {sortedSquares} from './squares-sorted-array.js';
import {expect} from 'chai';

export default describe('#977: Squares of a Sorted Array', function() {
    xit('Should return [0, 1, 9, 16, 100]', function() {
        expect(sortedSquares([-4, -1, 0, 3, 10])).to.deep.equal([0, 1, 9, 16, 100]);
    });

    xit('Should return [4,9,9,49,121]', function() {
        expect(sortedSquares([-7, -3, 2, 3, 11])).to.deep.equal([4, 9, 9, 49, 121]);
    });
});
