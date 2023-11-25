import { isUnique, isUniqueHT } from './is-unique';

export const is_unique = 
describe('Unique Character String Verifier', () => {
    test('Should return true for abcdef', () => {
        expect(isUnique('abcdef')).toEqual(true);
    });

    test('Should return false for abcdee', () => {
        expect(isUnique('abcdee')).toEqual(false);
    });

    test('Should return true for abcdef (HashTable)', () => {
        expect(isUniqueHT('abcdef')).toEqual(true);
    });

    test('Should return false for abcdee (HashTable)', () => {
        expect(isUniqueHT('abcdee')).toEqual(false);
    });

    test('Should return false for efwsssgfd', () => {
        expect(isUnique('efwsssgfd')).toEqual(false);
    });

    test('Should return false for efwsssgfd (HashTable)', () => {
        expect(isUniqueHT('efwsssgfd')).toEqual(false);
    });
});
