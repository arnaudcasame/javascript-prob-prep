import {expect} from 'chai';
import {isSubsequence} from './is-subsequence.js';

export default describe('#392: Is Subsequence', function() {
    it('Should return true for abc, ahbgdc', function() {
        expect(isSubsequence('abc', 'ahbgdc')).to.be.true;
    });

    it('Should return true for axc, ahbgdc', function() {
        expect(isSubsequence('axc', 'ahbgdc')).to.be.false;
    });
});
