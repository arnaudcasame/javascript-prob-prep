import {checkPermHT} from './check-permutation.js';
import {expect} from 'chai';

export default describe('Check Permutation', () => {
    xit('Should return true for wifbwedi <---> iwfedbiw', () => {
        expect(checkPermHT('wifbwedi', 'iwfedbiw')).to.be.true;
    });

    xit('Should return false for vbsdiuefref <---> diuhbguhwoh', () => {
        expect(checkPermHT('vbsdiuefref', 'diuhbguhwoh')).to.be.false;
    });
});
