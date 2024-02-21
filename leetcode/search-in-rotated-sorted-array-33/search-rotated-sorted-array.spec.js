import {search} from './search-rotated-sorted-array.js';
import {expect} from 'chai';

export default describe.skip('Search in rotated sorted Array', function() {
    it('Should return 4 for target = 0', function() {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0)).to.be.equal(4);
    });

    it('Should return -1 for target = 3', function() {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3)).to.be.equal(-1);
    });

    it('Should return -1 for target = 0', function() {
        expect(search([1], 0)).to.be.equal(-1);
    });
});
