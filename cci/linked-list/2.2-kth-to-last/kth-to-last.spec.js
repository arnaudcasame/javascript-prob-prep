import { kthToLast } from "./kth-to-last";

export default describe('Return Kth to Last', function(){
    test('Should return ', function(){
        expect(kthToLast([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).toEqual([10,11,12,13,14,15]);
    });

    xtest('Should return ', function(){
        expect(kthToLast([])).toEqual([]);
    });

    xtest('Should return ', function(){
        expect(kthToLast([])).toEqual([]);
    });
});