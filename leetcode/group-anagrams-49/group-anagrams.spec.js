/* eslint-disable max-len */
import {groupAnagrams, groupAnagramsO} from './group-anagrams.js';
import {words} from './constant.js';
import {expect} from 'chai';

export default describe.skip('Group Anagrams', function() {
    it('Should return [["bat"],["nat","tan"],["ate","eat","tea"]]', function() {
        const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
        expect(res).to.deep.equal([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
    });

    it('Should return [[""]]', function() {
        expect(groupAnagrams([''])).to.deep.equal([['']]);
    });

    it('Should return [["a"]]', function() {
        expect(groupAnagrams(['a'])).to.deep.equal([['a']]);
    });

    it('Should return [["","",""]]', function() {
        expect(groupAnagrams(['', '', ''])).to.deep.equal([['', '', '']]);
    });

    // This one is too much
    xit('Should return [[List of Words too Long]]', function() {
        expect(groupAnagrams(words)).to.deep.equal([['', '', '']]);
    });

    it('Should return [["bat"],["nat","tan"],["ate","eat","tea"]] Optimized', function() {
        const res = groupAnagramsO(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
        expect(res).to.deep.equal([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
    });

    it('Should return [[""]] Optimized', function() {
        expect(groupAnagramsO([''])).to.deep.equal([['']]);
    });

    it('Should return [["a"]] Optimized', function() {
        expect(groupAnagramsO(['a'])).to.deep.equal([['a']]);
    });

    it('Should return [["","",""]] Optimized', function() {
        expect(groupAnagramsO(['', '', ''])).to.deep.equal([['', '', '']]);
    });

    // List of Words too Long
    xit('Should return [[List of Words too Long]] Optimized', function() {
        expect(groupAnagramsO(words)).to.deep.equal([['', '', '']]);
    });
});
