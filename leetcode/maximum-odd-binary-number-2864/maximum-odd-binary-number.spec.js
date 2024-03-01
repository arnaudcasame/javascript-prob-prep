import {maximumOddBinaryNumber} from './maximum-odd-binary-number.js';
import {expect} from 'chai';

export default describe('#2864: Maximum Odd Binary Number', function() {
    xit('Should return String 001 for input: 010', function() {
        expect(maximumOddBinaryNumber('010')).to.equal('001');
    });

    xit('Should return String 1001 for input: 0101', function() {
        expect(maximumOddBinaryNumber('0101')).to.equal('1001');
    });
});
