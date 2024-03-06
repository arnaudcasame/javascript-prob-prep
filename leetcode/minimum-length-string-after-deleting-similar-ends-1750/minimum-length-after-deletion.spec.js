/* eslint-disable max-len */
import {minimumLength} from './minimum-length-after-deletion.js';
import {expect} from 'chai';

export default describe('#1750: Minimum Length of String after Deleting Similar Ends', function() {
    it('Should return 2 for (ca)', function() {
        expect(minimumLength('ca')).to.equal(2);
    });

    it('Should return 0 for (cabaabac)', function() {
        expect(minimumLength('cabaabac')).to.equal(0);
    });

    it('Should return 3 for (aabccabba)', function() {
        expect(minimumLength('aabccabba')).to.equal(3);
    });

    it('Should return 0 for (abbbbbbbbbbbbbbbbbbba)', function() {
        expect(minimumLength('abbbbbbbbbbbbbbbbbbba')).to.equal(0);
    });

    xit('Should return 1 for (bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb)', function() {
        expect(minimumLength('bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb')).to.equal(1);
    });
});
