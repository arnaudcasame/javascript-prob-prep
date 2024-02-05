/* eslint-disable max-len */
import {groupAnagrams, groupAnagramsO} from './group-anagrams.js';
import {words} from './constant.js';

export default describe('Group Anagrams', function() {
    it('Should return [["bat"],["nat","tan"],["ate","eat","tea"]]', function() {
        const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
        expect(res).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
    });

    it('Should return [[""]]', function() {
        expect(groupAnagrams([''])).toEqual([['']]);
    });

    it('Should return [["a"]]', function() {
        expect(groupAnagrams(['a'])).toEqual([['a']]);
    });

    it('Should return [["","",""]]', function() {
        expect(groupAnagrams(['', '', ''])).toEqual([['', '', '']]);
    });

    // This one is too much
    xit('Should return [[List of Words too Long]]', function() {
        expect(groupAnagrams(words)).toEqual([['', '', '']]);
    });

    it('Should return [["bat"],["nat","tan"],["ate","eat","tea"]] Optimized', function() {
        const res = groupAnagramsO(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
        expect(res).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
    });

    it('Should return [[""]] Optimized', function() {
        expect(groupAnagramsO([''])).toEqual([['']]);
    });

    it('Should return [["a"]] Optimized', function() {
        expect(groupAnagramsO(['a'])).toEqual([['a']]);
    });

    it('Should return [["","",""]] Optimized', function() {
        expect(groupAnagramsO(['', '', ''])).toEqual([['', '', '']]);
    });

    // List of Words too Long
    xit('Should return [[List of Words too Long]] Optimized', function() {
        expect(groupAnagramsO(words)).toEqual([['', '', '']]);
    });
});
