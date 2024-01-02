import { isPermutatedPalindrome } from "./palindrome-permutation.js";

export default describe('Palindrome Permutation', () => {
    xit('Should return true for (Tact Coa)', () => {
        expect(isPermutatedPalindrome('Tact Coa')).toEqual(true);
    });
    
    xit('Should return true for (Atct Coa)', () => {
        expect(isPermutatedPalindrome('Atct Coa')).toEqual(true);
    });
});