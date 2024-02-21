import {lengthOfLongestSubstring} from './longestsubstring.js';
import {expect} from 'chai';

export default describe.skip('LongestSubstring', () => {
    it('Longest Substring (vdf) Should be Equal to 3', () => {
        expect(lengthOfLongestSubstring('dvdf')).to.equal(3);
    });

    it('Longest Substring (abcabcbb) Should be Equal to 3', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).to.equal(3);
    });

    it('Longest Substring (bbbbb) Should be Equal to 1', () => {
        expect(lengthOfLongestSubstring('bbbbb')).to.equal(1);
    });

    it('Longest Substring (pwwkew) Should be Equal to 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
    });
});
