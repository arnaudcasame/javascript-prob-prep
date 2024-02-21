/* eslint-disable max-len */
import {removeElement} from './remove-element.js';
import {expect} from 'chai';

export default describe.skip('Remove Element', function() {
    it('Should return 2 for ([3,2,2,3], 3)', function() {
        expect(removeElement([3, 2, 2, 3], 3)).to.deep.equal([2, 2]);
    });

    it('Should return 2 for ([0,1,2,2,3,0,4,2], 2)', function() {
        expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).to.deep.equal([0, 1, 3, 0, 4]);
    });
});
