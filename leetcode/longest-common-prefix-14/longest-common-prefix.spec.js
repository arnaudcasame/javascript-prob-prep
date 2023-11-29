import { longestCommonPrefix, longestCommonPrefixI, longestCommonPrefixII } from "./longest-common-prefix";

export const longestCommonPrefix_ = 
describe('Longest Common Prefix', function(){
    test('Should return fl for ["flower","flow","flight"]', function(){
        expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl")
        expect(longestCommonPrefixI(["flower","flow","flight"])).toEqual("fl")
        expect(longestCommonPrefixII(["flower","flow","flight"])).toEqual("fl")
    });

    test('Should return empty String for ["dog","racecar","car"]', function(){
        expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("")
        expect(longestCommonPrefixI(["dog","racecar","car"])).toEqual("")
        expect(longestCommonPrefixII(["dog","racecar","car"])).toEqual("")
    });

    test('Should return c for ["cir","car"]', function(){
        expect(longestCommonPrefix(["cir","car"])).toEqual("c");
        expect(longestCommonPrefixI(["cir","car"])).toEqual("c");
        expect(longestCommonPrefixII(["cir","car"])).toEqual("c");
    });

    test('Should return empty string for ["abab","aba",""]', function(){
        expect(longestCommonPrefix(["abab","aba",""])).toEqual("");
        expect(longestCommonPrefixI(["abab","aba",""])).toEqual("");
        expect(longestCommonPrefixII(["abab","aba",""])).toEqual("");
    });

    test('Should return empty string for ["c","acc","ccc"]', function(){
        expect(longestCommonPrefix(["c","acc","ccc"])).toEqual("");
        expect(longestCommonPrefixI(["c","acc","ccc"])).toEqual("");
        expect(longestCommonPrefixII(["c","acc","ccc"])).toEqual("");
    });

    test('Should return a for ["ac","ac","a","a"]', function(){
        expect(longestCommonPrefix(["ac","ac","a","a"])).toEqual("a");
        expect(longestCommonPrefixI(["ac","ac","a","a"])).toEqual("a");
        expect(longestCommonPrefixII(["ac","ac","a","a"])).toEqual("a");
    });
})