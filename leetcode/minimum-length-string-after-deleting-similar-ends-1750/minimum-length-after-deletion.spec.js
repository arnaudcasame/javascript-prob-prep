/* eslint-disable max-len */
import {minimumLength} from './minimum-length-after-deletion.js';
import {expect} from 'chai';

export default describe('#1750: Minimum Length of String after Deleting Similar Ends', function() {
    xit('Should return 2 for (ca)', function() {
        expect(minimumLength('ca')).to.equal(2);
    });

    xit('Should return 0 for (cabaabac)', function() {
        expect(minimumLength('cabaabac')).to.equal(0);
    });

    xit('Should return 3 for (aabccabba)', function() {
        expect(minimumLength('aabccabba')).to.equal(3);
    });
});
