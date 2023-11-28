import { romanToInt, romanToIntDynamic } from "./roman-number";

export const romanToInt_ = 
describe('Roman To Integer #13', function(){
    test('Should return 3 for input III', function(){
        expect(romanToInt('III')).toEqual(3);
    });

    test('Should return 58 for input LVIII', function(){
        expect(romanToInt('LVIII')).toEqual(58);
    });

    test('Should return 1994 for input MCMXCIV', function(){
        expect(romanToInt('MCMXCIV')).toEqual(1994);
    });

    test('Should return 1994 for input MCMXCIV (Dynamic)', function(){
        expect(romanToIntDynamic('MCMXCIV')).toEqual(1994);
    });
})