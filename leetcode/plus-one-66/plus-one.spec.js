import { plusOne } from "./plus-one";

export const plusOne_ = 
describe('Plus One', function(){
    test('Should return [1,2,4] for [1,2,3]', function(){
        expect(plusOne([1,2,3])).toEqual([1,2,4]);
    });

    test('Should return [4,3,2,2] for [4,3,2,1]', function(){
        expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
    });

    test('Should return [1,0,0,0,0] for [9,9,9,9]', function(){
        expect(plusOne([9,9,9,9])).toEqual([1,0,0,0,0]);
    });

    test('Should return [9,8,9,9] for [9,9,0,0]', function(){
        expect(plusOne([9,8,9,9])).toEqual([9,9,0,0]);
    });

    test('Should return [1,0] for [9]', function(){
        expect(plusOne([9])).toEqual([1,0]);
    });
});