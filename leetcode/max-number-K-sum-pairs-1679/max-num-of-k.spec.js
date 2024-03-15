import {expect} from 'chai';
import {maxOperations} from './max-num-of-k.js';

export default describe('#1679: Max Number of K-Sum Pairs', function() {
    xit('Should return 2', function() {
        expect(maxOperations([1, 2, 3, 4], 5)).to.equal(2);
    });

    xit('Should return 1', function() {
        expect(maxOperations([3, 1, 3, 4, 3], 6)).to.equal(1);
    });
});
