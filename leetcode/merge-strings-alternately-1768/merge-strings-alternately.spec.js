import { mergeAlternately } from "./merge-strings-alternately";

export const mergeAlternately_ = 
describe('Merge Alternately', function(){
    test('Should return apbqcr for (abc, pqr)', function(){
        expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
    });

    test('Should return apbqrs for (ab, pqrs)', function(){
        expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
    });

    test('Should return apbqcd for (abcd, pq)', function(){
        expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd");
    });
});