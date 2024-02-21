import {romanToInt, romanToIntDynamic} from './roman-number.js';
import {expect} from 'chai';

export default describe.skip('Roman To Integer #13', function() {
    it('Should return 3 for input III', function() {
        expect(romanToInt('III')).to.equal(3);
    });

    it('Should return 58 for input LVIII', function() {
        expect(romanToInt('LVIII')).to.equal(58);
    });

    it('Should return 1994 for input MCMXCIV', function() {
        expect(romanToInt('MCMXCIV')).to.equal(1994);
    });

    it('Should return 1994 for input MCMXCIV (Dynamic)', function() {
        expect(romanToIntDynamic('MCMXCIV')).to.equal(1994);
    });
});
