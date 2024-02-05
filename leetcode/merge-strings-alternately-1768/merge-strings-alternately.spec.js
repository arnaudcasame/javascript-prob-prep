import {mergeAlternately} from './merge-strings-alternately.js';
import {expect} from 'chai';

export default describe.skip('Merge Alternately', function() {
    it('Should return apbqcr for (abc, pqr)', function() {
        expect(mergeAlternately('abc', 'pqr')).to.equal('apbqcr');
    });

    it('Should return apbqrs for (ab, pqrs)', function() {
        expect(mergeAlternately('ab', 'pqrs')).to.equal('apbqrs');
    });

    it('Should return apbqcd for (abcd, pq)', function() {
        expect(mergeAlternately('abcd', 'pq')).to.equal('apbqcd');
    });
});
