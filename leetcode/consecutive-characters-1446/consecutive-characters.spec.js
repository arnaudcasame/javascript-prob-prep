import {maxPower} from './consecutive-characters.js';
import {expect} from 'chai';

export default describe.skip('Consecutive Characters', function() {
    it('Should return 2 for (leetcode)', function() {
        expect(maxPower('leetcode')).to.equal(2);
    });

    it('Should return 5 for (abbcccddddeeeeedcba)', function() {
        expect(maxPower('abbcccddddeeeeedcba')).to.equal(5);
    });
});
