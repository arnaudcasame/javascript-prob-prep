import { kthToLast } from "./kth-to-last.js";

export default describe('Return Kth to Last', function(){
    it('Should return (13)(14)(15)', function(){
        expect(kthToLast([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3)).toEqual([13,14,15]);
    });

    it('Should return (11)(12)(13)(14)(15)', function(){
        expect(kthToLast([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5)).toEqual([11,12,13,14,15]);
    });

    it('Should return (15)', function(){
        expect(kthToLast([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1)).toEqual([15]);
    });
});