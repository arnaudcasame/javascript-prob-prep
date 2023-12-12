import { groupAnagrams, groupAnagramsO } from "./group-anagrams";
import { words } from "./constant";

// eslint-disable-next-line import/no-default-export
export default describe('Group Anagrams', function(){
    test('Should return [["bat"],["nat","tan"],["ate","eat","tea"]]', function(){
        const res = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
        expect(res).toEqual([ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ])
    });

    test('Should return [[""]]', function(){
        expect(groupAnagrams([""])).toEqual([[""]]);
    });

    test('Should return [["a"]]', function(){
        expect(groupAnagrams(["a"])).toEqual([["a"]]);
    });

    test('Should return [["","",""]]', function(){
        expect(groupAnagrams(["","",""])).toEqual([["","",""]]);
    });

    // This one is too much
    xtest('Should return [[List of Words too Long]]', function(){
        expect(groupAnagrams(words)).toEqual([["","",""]]);
    });

    test('Should return [["bat"],["nat","tan"],["ate","eat","tea"]] Optimized', function(){
        const res = groupAnagramsO(["eat","tea","tan","ate","nat","bat"]);
        expect(res).toEqual([ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ])
    });

    test('Should return [[""]] Optimized', function(){
        expect(groupAnagramsO([""])).toEqual([[""]]);
    });

    test('Should return [["a"]] Optimized', function(){
        expect(groupAnagramsO(["a"])).toEqual([["a"]]);
    });

    test('Should return [["","",""]] Optimized', function(){
        expect(groupAnagramsO(["","",""])).toEqual([["","",""]]);
    });

    // List of Words too Long
    xtest('Should return [[List of Words too Long]] Optimized', function(){
        expect(groupAnagramsO(words)).toEqual([["","",""]]);
    });
});