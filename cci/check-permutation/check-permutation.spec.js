import { CheckPermHT } from './check-permutation';

export const CheckPermutation = describe('Check Permutation', () => {
    xtest('Should return true for wifbwedi <---> iwfedbiw', () => {
        expect(CheckPermHT('wifbwedi', 'iwfedbiw')).toEqual(true);
    });

    xtest('Should return false for vbsdiuefref <---> diuhbguhwoh', () => {
        expect(CheckPermHT('vbsdiuefref', 'diuhbguhwoh')).toEqual(false);
    });
});
