import {rangeBitwiseAnd} from './bitwise-and-numbers.js';
import {expect} from 'chai';


export default describe('#201: Bitwise AND of numbers range', function() {
    it('Should return 4 for left = 5 and right = 7', function() {
        expect(rangeBitwiseAnd(5, 7)).to.equal(4);
    });

    it('Should return 0 for left = 0 and right = 0', function() {
        expect(rangeBitwiseAnd(0, 0)).to.equal(0);
    });

    it('Should return 0 for left = 1 and right = 2147483647', function() {
        expect(rangeBitwiseAnd(1, 2147483647)).to.equal(0);
    });
});
