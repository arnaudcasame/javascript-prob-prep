import {plusOne} from './plus-one.js';
import {expect} from 'chai';

export default describe.skip('Plus One', function() {
    it('Should return [1,2,4] for [1,2,3]', function() {
        expect(plusOne([1, 2, 3])).to.deep.equal([1, 2, 4]);
    });

    it('Should return [4,3,2,2] for [4,3,2,1]', function() {
        expect(plusOne([4, 3, 2, 1])).to.deep.equal([4, 3, 2, 2]);
    });

    it('Should return [1,0,0,0,0] for [9,9,9,9]', function() {
        expect(plusOne([9, 9, 9, 9])).to.deep.equal([1, 0, 0, 0, 0]);
    });

    it('Should return [9,8,9,9] for [9,9,0,0]', function() {
        expect(plusOne([9, 8, 9, 9])).to.deep.equal([9, 9, 0, 0]);
    });

    it('Should return [1,0] for [9]', function() {
        expect(plusOne([9])).to.deep.equal([1, 0]);
    });
});
