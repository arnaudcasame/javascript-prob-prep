import {maximumOddBinaryNumber} from './maximum-odd-binary-number.js';
import {expect} from 'chai';

export default describe('#2864: Maximum Odd Binary Number', function() {
    it('Should return String 001 for input: 010', function() {
        expect(maximumOddBinaryNumber('010')).to.equal('001');
    });

    it('Should return String 1001 for input: 0101', function() {
        expect(maximumOddBinaryNumber('0101')).to.equal('1001');
    });

    it('Should return String 11100000001 for input: 10000101001', function() {
        expect(maximumOddBinaryNumber('10000101001')).to.equal('11100000001');
    });

    it('Should return String 1 for input: 1', function() {
        expect(maximumOddBinaryNumber('1')).to.equal('1');
    });
});
