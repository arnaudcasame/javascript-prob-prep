/* eslint-disable max-len */
import {longestPalindromeBF, longestPalindrome} from './longestpalindrome.js';

export default describe('LongestPalindrome', () => {
    it('Longest Palindrome (babad) Should be Equal to bab or aba', () => {
        expect(longestPalindromeBF('babad') === 'bab' || longestPalindromeBF('babad') === 'aba').toBeTruthy();
        expect(longestPalindrome('babad') === 'bab' || longestPalindrome('babad') === 'aba').toBeTruthy();
    });

    it('Longest Palindrome (cbbd) Should be Equal to bb', () => {
        expect(longestPalindromeBF('cbbd')).toEqual('bb');
        expect(longestPalindrome('cbbd')).toEqual('bb');
    });

    it('Longest Palindrome (bbbbb) Should be Equal to bbbbb', () => {
        expect(longestPalindromeBF('bbbbb')).toEqual('bbbbb');
        expect(longestPalindrome('bbbbb')).toEqual('bbbbb');
    });

    it('Longest Palindrome (pwwkew) Should be Equal to ww', () => {
        expect(longestPalindromeBF('pwwkew')).toEqual('ww');
        expect(longestPalindrome('pwwkew')).toEqual('ww');
    });

    it('Longest Palindrome (eabcb) Should be Equal to bcb', () => {
        expect(longestPalindromeBF('eabcb')).toEqual('bcb');
        expect(longestPalindrome('eabcb')).toEqual('bcb');
    });

    it('Longest Palindrome (11111111111) Should be Equal to 111111111', () => {
        const input = "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
        expect(longestPalindromeBF(input)).toEqual(input);
        expect(longestPalindrome(input)).toEqual(input);
    });

    it('Longest Palindrome (ac) Should be Equal to a', () => {
        // expect(longestPalindromeBF(input)).toEqual(input);
        expect(longestPalindrome('ac')).toEqual('a');
    });

    it('Longest Palindrome (a) Should be Equal to a', () => {
        // expect(longestPalindromeBF(input)).toEqual(input);
        expect(longestPalindrome('a')).toEqual('a');
    });

    it('Longest Palindrome (bb) Should be Equal to bb', () => {
        expect(longestPalindromeBF('bb')).toEqual('bb');
        expect(longestPalindrome('bb')).toEqual('bb');
    });

    it('Longest Palindrome (abcda) Should be Equal to a', () => {
        expect(longestPalindromeBF('bb')).toEqual('bb');
        expect(longestPalindrome('abcda')).toEqual('a');
    });

    it('Longest Palindrome (abcda) Should be Equal to a', () => {
        expect(longestPalindromeBF('bb')).toEqual('bb');
        expect(longestPalindrome('abcdasdfghjkldcba')).toEqual('a');
    });

});
