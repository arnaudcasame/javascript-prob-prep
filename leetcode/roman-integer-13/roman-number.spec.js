import {romanToInt, romanToIntDynamic} from './roman-number.js';

export default describe('Roman To Integer #13', function() {
    it('Should return 3 for input III', function() {
        expect(romanToInt('III')).toEqual(3);
    });

    it('Should return 58 for input LVIII', function() {
        expect(romanToInt('LVIII')).toEqual(58);
    });

    it('Should return 1994 for input MCMXCIV', function() {
        expect(romanToInt('MCMXCIV')).toEqual(1994);
    });

    it('Should return 1994 for input MCMXCIV (Dynamic)', function() {
        expect(romanToIntDynamic('MCMXCIV')).toEqual(1994);
    });
});
