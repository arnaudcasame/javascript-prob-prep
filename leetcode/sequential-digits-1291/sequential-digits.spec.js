/* eslint-disable max-len */
import {sequentialDigits} from './sequential-digits.js';
import {expect} from 'chai';

export default describe('#1291: Sequential Digits', function() {
    it('Should return [] for input: (100, 300)', function() {
        expect(sequentialDigits(100, 300)).to.deep.equal([123, 234]);
    });

    it('Should return [] for input: (1000, 13000)', function() {
        expect(sequentialDigits(1000, 13000)).to.deep.equal([1234, 2345, 3456, 4567, 5678, 6789, 12345]);
    });

    it('Should return [] for input: (10, 1000000000)', function() {
        expect(sequentialDigits(10, 1000000000)).to.deep.equal([12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789]);
    });

    it('Should return [] for input: (58, 155)', function() {
        expect(sequentialDigits(58, 155)).to.deep.equal([67, 78, 89, 123]);
    });

    it('Should return [] for input: (8511, 23553)', function() {
        expect(sequentialDigits(8511, 23553)).to.deep.equal([12345, 23456]);
    });

    it('Should return [] for input: (372591426, 841554424)', function() {
        expect(sequentialDigits(372591426, 841554424)).to.deep.equal([]);
    });
});
