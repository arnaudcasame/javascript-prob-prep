import { longestConsecutive } from "./longest-consecutive-sequence";

export default describe('Longest Consecutive Sequence', function(){
    test('Should return 4 for ([100,4,200,1,3,2])', function(){
        expect(longestConsecutive([100,4,200,1,3,2])).toEqual(4);
    });

    test('Should return 9 for ([0,3,7,2,5,8,4,6,0,1])', function(){
        expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toEqual(9);
    });

    test('Should return 1 for ([0])', function(){
        expect(longestConsecutive([0])).toEqual(1);
    });

    test('Should return 2 for ([0,-1])', function(){
        expect(longestConsecutive([0,-1])).toEqual(2);
    });

    test('Should return 5 for ([1,3,5,2,4])', function(){
        expect(longestConsecutive([1,3,5,2,4])).toEqual(5);
    });
});