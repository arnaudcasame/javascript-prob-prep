import { strStr } from "./find-1st-index-of-1st-occurence";

export const strStr_ =
    describe('Find the 1st Index of 1st Occurence in String', () => {
        test(' Should return 0 for (sadbutsad, sad)', () => {
            expect(strStr('sadbutsad', 'sad')).toEqual(0);
        });

        test('Should return -1 for (leetcode, leeto)', () => {
            expect(strStr('leetcode', 'leeto')).toEqual(-1);
        });

        test('Should return 2 for (hello, ll)', () => {
            expect(strStr('hello', 'll')).toEqual(2);
        });

        xtest(' Should return ... for ...', () => {
            expect(strStr('bbbbb')).toEqual('bbbbb');
        });
});