/* eslint-disable max-len */
import {longestPalindromeBF, longestPalindrome} from './longestpalindrome.js';
import {expect} from 'chai';

export default describe.skip('LongestPalindrome', () => {
    it('Longest Palindrome (babad) Should be Equal to bab or aba', () => {
        expect(longestPalindromeBF('babad') === 'bab' || longestPalindromeBF('babad') === 'aba').to.be.true;
        expect(longestPalindrome('babad') === 'bab' || longestPalindrome('babad') === 'aba').to.be.true;
    });

    it('Longest Palindrome (cbbd) Should be Equal to bb', () => {
        expect(longestPalindromeBF('cbbd')).to.equal('bb');
        expect(longestPalindrome('cbbd')).to.equal('bb');
    });

    it('Longest Palindrome (bbbbb) Should be Equal to bbbbb', () => {
        expect(longestPalindromeBF('bbbbb')).to.equal('bbbbb');
        expect(longestPalindrome('bbbbb')).to.equal('bbbbb');
    });

    it('Longest Palindrome (pwwkew) Should be Equal to ww', () => {
        expect(longestPalindromeBF('pwwkew')).to.equal('ww');
        expect(longestPalindrome('pwwkew')).to.equal('ww');
    });

    it('Longest Palindrome (eabcb) Should be Equal to bcb', () => {
        expect(longestPalindromeBF('eabcb')).to.equal('bcb');
        expect(longestPalindrome('eabcb')).to.equal('bcb');
    });

    it('Longest Palindrome (11111111111) Should be Equal to 111111111', () => {
        const input = '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111';
        expect(longestPalindromeBF(input)).to.equal(input);
        expect(longestPalindrome(input)).to.equal(input);
    });

    it('Longest Palindrome (ac) Should be Equal to a', () => {
        // expect(longestPalindromeBF(input)).to.equal(input);
        expect(longestPalindrome('ac')).to.equal('a');
    });

    it('Longest Palindrome (a) Should be Equal to a', () => {
        // expect(longestPalindromeBF(input)).to.equal(input);
        expect(longestPalindrome('a')).to.equal('a');
    });

    it('Longest Palindrome (bb) Should be Equal to bb', () => {
        expect(longestPalindromeBF('bb')).to.equal('bb');
        expect(longestPalindrome('bb')).to.equal('bb');
    });

    it('Longest Palindrome (abcda) Should be Equal to a', () => {
        expect(longestPalindromeBF('bb')).to.equal('bb');
        expect(longestPalindrome('abcda')).to.equal('a');
    });

    it('Longest Palindrome (abcda) Should be Equal to a', () => {
        expect(longestPalindromeBF('bb')).to.equal('bb');
        expect(longestPalindrome('abcdasdfghjkldcba')).to.equal('a');
    });
});
