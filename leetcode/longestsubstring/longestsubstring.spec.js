import {lengthOfLongestSubstring} from './longestsubstring.js';

export default describe('LongestSubstring', () => {
    it('Longest Substring (vdf) Should be Equal to 3', () => {
        expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
    });

    it('Longest Substring (abcabcbb) Should be Equal to 3', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    });

    it('Longest Substring (bbbbb) Should be Equal to 1', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    });

    it('Longest Substring (pwwkew) Should be Equal to 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    });
});
