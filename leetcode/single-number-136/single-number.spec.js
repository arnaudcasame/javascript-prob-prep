import {singleNumber, singleNumberO} from './single-number.js';
import {expect} from 'chai';

export default describe.skip('Single Number', function() {
    it('Should return 1 for ([2,2,3,3,1])', function() {
        expect(singleNumber([2, 2, 1])).to.equal(1);
    });
    it('Should return 4 for ([4,1,2,1,2])', function() {
        expect(singleNumber([4, 1, 2, 1, 2])).to.equal(4);
    });
    it('Should return 1 for ([1])', function() {
        expect(singleNumber([1])).to.equal(1);
    });
    it('Should return 1 for ([2,2,3,3,1])', function() {
        expect(singleNumberO([2, 2, 1])).to.equal(1);
    });
    it('Should return 4 for ([4,1,2,1,2])', function() {
        expect(singleNumberO([4, 1, 2, 1, 2])).to.equal(4);
    });
    it('Should return 1 for ([1])', function() {
        expect(singleNumberO([1])).to.equal(1);
    });
});
