import { isPermutatedPalindrome } from "./palindrome-permutation";

export const isPermutatedPalindrome_ = 
describe('Palindrome Permutation', () => {
    xtest('Should return true for (Tact Coa)', () => {
        expect(isPermutatedPalindrome('Tact Coa')).toEqual(true);
    });
    
    xtest('Should return true for (Atct Coa)', () => {
        expect(isPermutatedPalindrome('Atct Coa')).toEqual(true);
    });
});