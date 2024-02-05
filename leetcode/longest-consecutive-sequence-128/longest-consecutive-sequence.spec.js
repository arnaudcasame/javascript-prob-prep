import {longestConsecutive} from './longest-consecutive-sequence.js';
import {expect} from 'chai';

export default describe.skip('Longest Consecutive Sequence', function() {
    it('Should return 4 for ([100,4,200,1,3,2])', function() {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2])).to.equal(4);
    });

    it('Should return 9 for ([0,3,7,2,5,8,4,6,0,1])', function() {
        expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).to.equal(9);
    });

    it('Should return 1 for ([0])', function() {
        expect(longestConsecutive([0])).to.equal(1);
    });

    it('Should return 2 for ([0,-1])', function() {
        expect(longestConsecutive([0, -1])).to.equal(2);
    });

    it('Should return 5 for ([1,3,5,2,4])', function() {
        expect(longestConsecutive([1, 3, 5, 2, 4])).to.equal(5);
    });
});
