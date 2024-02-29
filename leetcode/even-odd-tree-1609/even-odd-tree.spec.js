/* eslint-disable max-len */
import {expect} from 'chai';
import {isEvenOddTree} from './even-odd-tree.js';

export default describe('#1609: Even Odd Tree', function() {
    xit('Should return true for tree', function() {
        expect(isEvenOddTree([1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2])).to.be.true;
    });

    xit('Should return false for tree', function() {
        expect(isEvenOddTree([5, 4, 2, 3, 3, 7])).to.be.false;
    });

    xit('Should return false for tree', function() {
        expect(isEvenOddTree([5, 9, 1, 3, 5, 7])).to.be.false;
    });

    xit('Should return false for tree', function() {
        expect(isEvenOddTree([2, 12, 8, 5, 9, null, null, 18, 16])).to.be.false;
    });
});
