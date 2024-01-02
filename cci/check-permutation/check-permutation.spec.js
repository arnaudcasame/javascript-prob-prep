import { CheckPermHT } from './check-permutation.js';

export default describe('Check Permutation', () => {
    xit('Should return true for wifbwedi <---> iwfedbiw', () => {
        expect(CheckPermHT('wifbwedi', 'iwfedbiw')).toEqual(true);
    });

    xit('Should return false for vbsdiuefref <---> diuhbguhwoh', () => {
        expect(CheckPermHT('vbsdiuefref', 'diuhbguhwoh')).toEqual(false);
    });
});
