/* eslint-disable max-len */
import {expect} from 'chai';
import {maxVowels} from './maximum-number-of-vowels.js';
import {data as string5} from './data.js';

export default describe('#1456: Maximum Number of Vowels in a Substring of Given Length', function() {
    it('Should return 3', function() {
        expect(maxVowels('abciiidef', 3)).to.equal(3);
    });

    it('Should return 2', function() {
        expect(maxVowels('aeiou', 2)).to.equal(2);
    });

    it('Should return 2', function() {
        expect(maxVowels('leetcode', 3)).to.equal(2);
    });

    it('Should return 4', function() {
        expect(maxVowels('weallloveyou', 7)).to.equal(4);
    });

    it('Should return 823', function() {
        expect(maxVowels(string5, 3945)).to.equal(823);
    });
});
