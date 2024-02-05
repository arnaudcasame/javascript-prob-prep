/* eslint-disable max-len */
import {longestCommonPrefix,
    longestCommonPrefixI,
    longestCommonPrefixII} from './longest-common-prefix.js';

export default describe('Longest Common Prefix', function() {
    it('Should return fl for ["flower","flow","flight"]', function() {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
        expect(longestCommonPrefixI(['flower', 'flow', 'flight'])).toEqual('fl');
        expect(longestCommonPrefixII(['flower', 'flow', 'flight'])).toEqual('fl');
    });

    it('Should return empty String for ["dog","racecar","car"]', function() {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
        expect(longestCommonPrefixI(['dog', 'racecar', 'car'])).toEqual('');
        expect(longestCommonPrefixII(['dog', 'racecar', 'car'])).toEqual('');
    });

    it('Should return c for ["cir","car"]', function() {
        expect(longestCommonPrefix(['cir', 'car'])).toEqual('c');
        expect(longestCommonPrefixI(['cir', 'car'])).toEqual('c');
        expect(longestCommonPrefixII(['cir', 'car'])).toEqual('c');
    });

    it('Should return empty string for ["abab","aba",""]', function() {
        expect(longestCommonPrefix(['abab', 'aba', ''])).toEqual('');
        expect(longestCommonPrefixI(['abab', 'aba', ''])).toEqual('');
        expect(longestCommonPrefixII(['abab', 'aba', ''])).toEqual('');
    });

    it('Should return empty string for ["c","acc","ccc"]', function() {
        expect(longestCommonPrefix(['c', 'acc', 'ccc'])).toEqual('');
        expect(longestCommonPrefixI(['c', 'acc', 'ccc'])).toEqual('');
        expect(longestCommonPrefixII(['c', 'acc', 'ccc'])).toEqual('');
    });

    it('Should return a for ["ac","ac","a","a"]', function() {
        expect(longestCommonPrefix(['ac', 'ac', 'a', 'a'])).toEqual('a');
        expect(longestCommonPrefixI(['ac', 'ac', 'a', 'a'])).toEqual('a');
        expect(longestCommonPrefixII(['ac', 'ac', 'a', 'a'])).toEqual('a');
    });
});
