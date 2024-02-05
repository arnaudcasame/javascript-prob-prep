import {strStr} from './find-1st-index-of-1st-occurence.js';

export default describe('Find the 1st Index of 1st Occurence in String', () => {
    it(' Should return 0 for (sadbutsad, sad)', () => {
        expect(strStr('sadbutsad', 'sad')).toEqual(0);
    });

    it('Should return -1 for (leetcode, leeto)', () => {
        expect(strStr('leetcode', 'leeto')).toEqual(-1);
    });

    it('Should return 2 for (hello, ll)', () => {
        expect(strStr('hello', 'll')).toEqual(2);
    });

    xit(' Should return ... for ...', () => {
        expect(strStr('bbbbb')).toEqual('bbbbb');
    });
});
