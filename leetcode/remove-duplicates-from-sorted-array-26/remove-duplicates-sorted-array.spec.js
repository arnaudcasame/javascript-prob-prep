import { removeDuplicates } from "./remove-duplicates-sorted-array";

export const removeDuplicates_ = 
describe('Remove Duplicates from Sorted Array', function(){
    test('Should return [1,2] for [1,1,2]', function(){
        expect(removeDuplicates([1,1,2])).toEqual([1,2]);
    });

    test('Should return [0,1,2,3,4] for [0,0,1,1,1,2,2,3,3,4]', function(){
        expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual([0,1,2,3,4]);
    });

    xtest('Should return true for 12321', function(){
        expect(removeDuplicates(12321)).toEqual(true);
    });
});