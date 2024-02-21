/* eslint-disable max-len */
import {longestCommonPrefix,
    longestCommonPrefixI,
    longestCommonPrefixII} from './longest-common-prefix.js';
import {expect} from 'chai';

export default describe.skip('Longest Common Prefix', function() {
    it('Should return fl for ["flower","flow","flight"]', function() {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).to.equal('fl');
        expect(longestCommonPrefixI(['flower', 'flow', 'flight'])).to.equal('fl');
        expect(longestCommonPrefixII(['flower', 'flow', 'flight'])).to.equal('fl');
    });

    it('Should return empty String for ["dog","racecar","car"]', function() {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).to.equal('');
        expect(longestCommonPrefixI(['dog', 'racecar', 'car'])).to.equal('');
        expect(longestCommonPrefixII(['dog', 'racecar', 'car'])).to.equal('');
    });

    it('Should return c for ["cir","car"]', function() {
        expect(longestCommonPrefix(['cir', 'car'])).to.equal('c');
        expect(longestCommonPrefixI(['cir', 'car'])).to.equal('c');
        expect(longestCommonPrefixII(['cir', 'car'])).to.equal('c');
    });

    it('Should return empty string for ["abab","aba",""]', function() {
        expect(longestCommonPrefix(['abab', 'aba', ''])).to.equal('');
        expect(longestCommonPrefixI(['abab', 'aba', ''])).to.equal('');
        expect(longestCommonPrefixII(['abab', 'aba', ''])).to.equal('');
    });

    it('Should return empty string for ["c","acc","ccc"]', function() {
        expect(longestCommonPrefix(['c', 'acc', 'ccc'])).to.equal('');
        expect(longestCommonPrefixI(['c', 'acc', 'ccc'])).to.equal('');
        expect(longestCommonPrefixII(['c', 'acc', 'ccc'])).to.equal('');
    });

    it('Should return a for ["ac","ac","a","a"]', function() {
        expect(longestCommonPrefix(['ac', 'ac', 'a', 'a'])).to.equal('a');
        expect(longestCommonPrefixI(['ac', 'ac', 'a', 'a'])).to.equal('a');
        expect(longestCommonPrefixII(['ac', 'ac', 'a', 'a'])).to.equal('a');
    });
});
