import { isUnique, isUniqueHT } from './is-unique';

export const is_unique = 
describe('Unique Character String Verifier', () => {
    xtest('Should return true for abcdef', () => {
        expect(isUnique('abcdef')).toEqual(true);
    });

    xtest('Should return false for abcdee', () => {
        expect(isUnique('abcdee')).toEqual(false);
    });

    xtest('Should return true for abcdef (HashTable)', () => {
        expect(isUniqueHT('abcdef')).toEqual(true);
    });

    xtest('Should return false for abcdee (HashTable)', () => {
        expect(isUniqueHT('abcdee')).toEqual(false);
    });

    xtest('Should return false for efwsssgfd', () => {
        expect(isUnique('efwsssgfd')).toEqual(false);
    });

    xtest('Should return false for efwsssgfd (HashTable)', () => {
        expect(isUniqueHT('efwsssgfd')).toEqual(false);
    });
});
