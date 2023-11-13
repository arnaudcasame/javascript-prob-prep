import { longestPalindrome } from './longestpalindrome';

export const longest =
    describe('LongestPalindrome', () => {
        test('Longest Palindrome (babad) Should be Equal to bab or aba', () => {
            expect(longestPalindrome('babad') === 'bab' || longestPalindrome('babad') === 'aba').toBeTruthy();
        });

        test('Longest Palindrome (cbbd) Should be Equal to bb', () => {
            expect(longestPalindrome('cbbd')).toEqual('bb');
        });

        test('Longest Palindrome (bbbbb) Should be Equal to bbbbb', () => {
            expect(longestPalindrome('bbbbb')).toEqual('bbbbb');
        });

        test('Longest Palindrome (pwwkew) Should be Equal to ww', () => {
            expect(longestPalindrome('pwwkew')).toEqual('ww');
        });

        test('Longest Palindrome (eabcb) Should be Equal to bcb', () => {
            expect(longestPalindrome('eabcb')).toEqual('bcb');
        });

    });
