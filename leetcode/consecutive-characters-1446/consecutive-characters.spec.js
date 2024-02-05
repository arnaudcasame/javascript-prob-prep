import {maxPower} from './consecutive-characters.js';

export default describe('Consecutive Characters', function() {
    it('Should return 2 for (leetcode)', function() {
        expect(maxPower('leetcode')).toEqual(2);
    });

    it('Should return 5 for (abbcccddddeeeeedcba)', function() {
        expect(maxPower('abbcccddddeeeeedcba')).toEqual(5);
    });
});
