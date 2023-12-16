import { maxPower } from "./consecutive-characters";

export default describe('Consecutive Characters', function(){
    test('Should return 2 for (leetcode)', function(){
        expect(maxPower('leetcode')).toEqual(2);
    });

    test('Should return 5 for (abbcccddddeeeeedcba)', function(){
        expect(maxPower('abbcccddddeeeeedcba')).toEqual(5);
    });
});