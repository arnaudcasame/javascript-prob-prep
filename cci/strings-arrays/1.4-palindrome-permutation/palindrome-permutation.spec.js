import {isPermutatedPalindrome} from './palindrome-permutation.js';
import {expect} from 'chai';

export default describe('#1.4: Palindrome Permutation', () => {
    xit('Should return true for (Tact Coa)', () => {
        expect(isPermutatedPalindrome('Tact Coa')).to.be.true;
    });

    xit('Should return true for (Atct Coa)', () => {
        expect(isPermutatedPalindrome('Atct Coa')).to.be.true;
    });
});
