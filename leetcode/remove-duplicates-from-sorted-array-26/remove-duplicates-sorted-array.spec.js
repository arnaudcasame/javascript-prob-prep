/* eslint-disable max-len */
import {removeDuplicates} from './remove-duplicates-sorted-array.js';
import {expect} from 'chai';

export default describe.skip('Remove Duplicates from Sorted Array', function() {
    it('Should return [1,2] for [1,1,2]', function() {
        expect(removeDuplicates([1, 1, 2])).to.deep.equal([1, 2]);
    });

    it('Should return [0,1,2,3,4] for [0,0,1,1,1,2,2,3,3,4]', function() {
        expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).to.deep.equal([0, 1, 2, 3, 4]);
    });

    xit('Should return true for 12321', function() {
        expect(removeDuplicates(12321)).to.deep.equal(true);
    });
});
