import {countSubstrings} from './countSubstrings.js';
import {expect} from 'chai';

export default describe('#647. Palindromic Substrings', function() {
    xit('Should return 3 for input: abc', function() {
        expect(countSubstrings('abc')).to.equal(3);
    });

    xit('Should return 6 for input: aaa', function() {
        expect(countSubstrings('aaa')).to.equal(6);
    });
});
