import { lengthOfLongestSubstring } from './longestsubstring';

export const longestSubstring =
    describe('LongestSubstring', () => {
        test('Longest Substring (vdf) Should be Equal to 3', () => {
            expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
        });

        test('Longest Substring (abcabcbb) Should be Equal to 3', () => {
            expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
        });

        test('Longest Substring (bbbbb) Should be Equal to 1', () => {
            expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
        });

        test('Longest Substring (pwwkew) Should be Equal to 3', () => {
            expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
        });

    });
