import {plusOne} from './plus-one.js';

export default describe('Plus One', function() {
    it('Should return [1,2,4] for [1,2,3]', function() {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });

    it('Should return [4,3,2,2] for [4,3,2,1]', function() {
        expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    });

    it('Should return [1,0,0,0,0] for [9,9,9,9]', function() {
        expect(plusOne([9, 9, 9, 9])).toEqual([1, 0, 0, 0, 0]);
    });

    it('Should return [9,8,9,9] for [9,9,0,0]', function() {
        expect(plusOne([9, 8, 9, 9])).toEqual([9, 9, 0, 0]);
    });

    it('Should return [1,0] for [9]', function() {
        expect(plusOne([9])).toEqual([1, 0]);
    });
});
