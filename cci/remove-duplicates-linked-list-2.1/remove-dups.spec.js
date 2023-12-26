import { removeDups, removeDupsNoBuffer } from "./remove-dups";

export default describe('Remove Duplicates in Linked List', function(){
    xtest('Should return (2)(3)(1)', function(){
        expect(removeDups([2,2,3,3,1])).toEqual([2, 3, 1]);
    });

    xtest('Should return (4)(1)(2)', function(){
        expect(removeDups([4,1,2,1,2])).toEqual([4, 1, 2]);
    });

    xtest('Should return (4)(1)(-1)(2)(3)', function(){
        expect(removeDups([4,1,-1,2,-1,2,3])).toEqual([4, 1, -1, 2, 3]);
    });
    // Part that tests the No Buffer solution
    xtest('Should return (2)(3)(1)*', function(){
        expect(removeDupsNoBuffer([2,2,3,3,1])).toEqual([2,3,1]);
    });

    xtest('Should return (4)(1)(2)*', function(){
        expect(removeDupsNoBuffer([4,1,2,1,2])).toEqual([4,1,2]);
    });

    xtest('Should return (4)(1)(-1)(2)(3)*', function(){
        expect(removeDupsNoBuffer([4,1,-1,2,-1,2,3])).toEqual([4,1,-1,2,3]);
    });
});