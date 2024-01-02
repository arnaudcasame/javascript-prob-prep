import { isUnique, isUniqueHT } from './is-unique.js';

export default describe('Unique Character String Verifier', () => {
    xit('Should return true for abcdef', () => {
        expect(isUnique('abcdef')).toEqual(true);
    });

    xit('Should return false for abcdee', () => {
        expect(isUnique('abcdee')).toEqual(false);
    });

    xit('Should return true for abcdef (HashTable)', () => {
        expect(isUniqueHT('abcdef')).toEqual(true);
    });

    xit('Should return false for abcdee (HashTable)', () => {
        expect(isUniqueHT('abcdee')).toEqual(false);
    });

    xit('Should return false for efwsssgfd', () => {
        expect(isUnique('efwsssgfd')).toEqual(false);
    });

    xit('Should return false for efwsssgfd (HashTable)', () => {
        expect(isUniqueHT('efwsssgfd')).toEqual(false);
    });
});
