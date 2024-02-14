/* eslint-disable max-len */
import {sequentialDigits} from './sequential-digits.js';
import {expect} from 'chai';

export default describe('#1291: Sequential Digits', function() {
    xit('Should return [] for input: (100, 300)', function() {
        expect(sequentialDigits(100, 300)).to.deep.equal([123, 234]);
    });

    xit('Should return [] for input: (1000, 13000)', function() {
        expect(sequentialDigits(1000, 13000)).to.deep.equal([1234, 2345, 3456, 4567, 5678, 6789, 12345]);
    });

    xit('Should return [] for input: (10, 1000000000)', function() {
        expect(sequentialDigits(10, 1000000000)).to.deep.equal([1234, 2345, 3456, 4567, 5678, 6789, 12345]);
    });
});
