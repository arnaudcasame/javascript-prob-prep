import {mergeAlternately} from './merge-strings-alternately.js';

export default describe('Merge Alternately', function() {
    it('Should return apbqcr for (abc, pqr)', function() {
        expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
    });

    it('Should return apbqrs for (ab, pqrs)', function() {
        expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
    });

    it('Should return apbqcd for (abcd, pq)', function() {
        expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd");
    });
});
