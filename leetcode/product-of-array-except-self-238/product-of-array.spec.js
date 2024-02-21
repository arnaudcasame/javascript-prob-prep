import {productExceptSelf} from './product-of-array.js';
import {expect} from 'chai';

export default describe.skip('Product of Array except Self', function() {
    it('Should return [24,12,8,6] for ([1,2,3,4])', function() {
        expect(productExceptSelf([1, 2, 3, 4])).to.deep.equal([24, 12, 8, 6]);
    });

    it('Should return [0,0,9,0,0] for ([-1,1,0,-3,3])', function() {
        const res = productExceptSelf([-1, 1, 0, -3, 3]);
        expect(res).to.deep.equal([-0, 0, 9, -0, 0]);
    });

    it('Should return [0,0] for ([0,0])', function() {
        const res = productExceptSelf([0, 0]);
        expect(res).to.deep.equal([0, 0]);
    });

    it('Should return [0,1] for ([1,0])', function() {
        const res = productExceptSelf([1, 0]);
        expect(res).to.deep.equal([0, 1]);
    });

    it('Should return [0,0,0] for ([0,4,0])', function() {
        const res = productExceptSelf([0, 4, 0]);
        expect(res).to.deep.equal([0, 0, 0]);
    });
});
