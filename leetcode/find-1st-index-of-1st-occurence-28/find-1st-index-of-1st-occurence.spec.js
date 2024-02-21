/* eslint-disable max-len */
import {strStr} from './find-1st-index-of-1st-occurence.js';
import {expect} from 'chai';

export default describe.skip('Find the 1st Index of 1st Occurence in String', () => {
    it(' Should return 0 for (sadbutsad, sad)', () => {
        expect(strStr('sadbutsad', 'sad')).to.equal(0);
    });

    it('Should return -1 for (leetcode, leeto)', () => {
        expect(strStr('leetcode', 'leeto')).to.equal(-1);
    });

    it('Should return 2 for (hello, ll)', () => {
        expect(strStr('hello', 'll')).to.equal(2);
    });

    xit(' Should return ... for ...', () => {
        expect(strStr('bbbbb')).to.equal('bbbbb');
    });
});
