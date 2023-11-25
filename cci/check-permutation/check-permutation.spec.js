import { CheckPermHT } from './check-permutation';

export const CheckPermutation = describe('Check Permutation', () => {
    test('Should return true for wifbwedi <---> iwfedbiw', () => {
        expect(CheckPermHT('wifbwedi', 'iwfedbiw')).toEqual(true);
    });

    test('Should return false for vbsdiuefref <---> diuhbguhwoh', () => {
        expect(CheckPermHT('vbsdiuefref', 'diuhbguhwoh')).toEqual(false);
    });
});
