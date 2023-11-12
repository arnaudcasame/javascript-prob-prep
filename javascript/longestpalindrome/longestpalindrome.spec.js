import { longestPalindrome } from './longestpalindrome';

export const longest =
    describe('LongestPalindrome', () => {
        test('Longest Palindrome (babad) Should be Equal to bab', () => {
            expect(longestPalindrome('babad')).toEqual('bab');
        });

        test('Longest Palindrome (cbbd) Should be Equal to bb', () => {
            expect(longestPalindrome('cbbd')).toEqual('bb');
        });

        xtest('Longest Palindrome (bbbbb) Should be Equal to 1', () => {
            expect(longestPalindrome('bbbbb')).toEqual(1);
        });

        xtest('Longest Palindrome (pwwkew) Should be Equal to 3', () => {
            expect(longestPalindrome('pwwkew')).toEqual(3);
        });

    });
