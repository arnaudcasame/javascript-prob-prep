import { removeDups, removeDupsNoBuffer } from "./remove-dups.js";

export default describe('Remove Duplicates in Linked List', function(){
    xit('Should return (2)(3)(1)', function(){
        expect(removeDups([2,2,3,3,1])).toEqual([2, 3, 1]);
    });

    xit('Should return (4)(1)(2)', function(){
        expect(removeDups([4,1,2,1,2])).toEqual([4, 1, 2]);
    });

    xit('Should return (4)(1)(-1)(2)(3)', function(){
        expect(removeDups([4,1,-1,2,-1,2,3])).toEqual([4, 1, -1, 2, 3]);
    });
    // Part that tests the No Buffer solution
    xit('Should return (2)(3)(1)*', function(){
        expect(removeDupsNoBuffer([2,2,3,3,1])).toEqual([2,3,1]);
    });

    xit('Should return (4)(1)(2)*', function(){
        expect(removeDupsNoBuffer([4,1,2,1,2])).toEqual([4,1,2]);
    });

    xit('Should return (4)(1)(-1)(2)(3)*', function(){
        expect(removeDupsNoBuffer([4,1,-1,2,-1,2,3])).toEqual([4,1,-1,2,3]);
    });
});