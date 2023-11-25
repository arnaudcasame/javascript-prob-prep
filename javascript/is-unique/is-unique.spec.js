import { isUnique } from './is-unique';

describe('Unique Character String Verifier', () => {
    test('Should return true for abcdef', () => {
        expect(isUnique('3-598-21508-8')).toEqual(true);
    });

    xtest('Should return false for efwsssgfd', () => {
        expect(isUnique('efwsssgfd')).toEqual(false);
    });
});
