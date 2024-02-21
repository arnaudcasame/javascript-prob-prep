import {searchInsert} from './search-insert-position.js';
import {expect} from 'chai';

export default describe.skip('Search Insert Position', function() {
    it('Should return 3 for ([1,1,2], 5)', function() {
        expect(searchInsert([1, 1, 2], 5)).to.equal(3);
    });

    it('Should return 2 for ([1,3,5,6], 5)', function() {
        expect(searchInsert([1, 3, 5, 6], 5)).to.equal(2);
    });

    it('Should return 1 for ([1,3,5,6], 2)', function() {
        expect(searchInsert([1, 3, 5, 6], 2)).to.equal(1);
    });

    it('Should return 0 for ([1,3,5,6], 1)', function() {
        expect(searchInsert([1, 3, 5, 6], 1)).to.equal(0);
    });

    it('Should return 0 for ([1,3,5,6], 0)', function() {
        expect(searchInsert([1, 3, 5, 6], 0)).to.equal(0);
    });

    it('Should return 4 for ([1,3,5,6], 7)', function() {
        expect(searchInsert([1, 3, 5, 6], 7)).to.equal(4);
    });

    it('Should return 2 for ([1,2,4,6,7], 3)', function() {
        expect(searchInsert([1, 2, 4, 6, 7], 3)).to.equal(2);
    });
});
