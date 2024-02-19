import {isPowerOfTwo} from './power-of-two.js';
import {expect} from 'chai';

export default describe('#231: Power of Two', function() {
    it('Should return true for input = 1', function() {
        expect(isPowerOfTwo(1)).to.be.true;
    });

    it('Should return true for input = 16', function() {
        expect(isPowerOfTwo(16)).to.be.true;
    });

    it('Should return false for input = 3', function() {
        expect(isPowerOfTwo(3)).to.be.false;
    });
});
