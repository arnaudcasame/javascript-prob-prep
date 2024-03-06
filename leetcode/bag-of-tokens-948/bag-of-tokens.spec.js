/* eslint-disable max-len */
import {bagOfTokensScore} from './bag-of-tokens.js';
import {expect} from 'chai';


export default describe('#948: Bag of Tokens', function() {
    xit('Should return 0 for (tokens=[100], power=50)', function() {
        expect(bagOfTokensScore([100], 50)).to.equal(0);
    });

    xit('Should return 1 for (tokens=[200,100], power=150)', function() {
        expect(bagOfTokensScore([200, 100], 150)).to.equal(1);
    });

    xit('Should return 2 for (tokens=[100, 200, 300, 400], power=200)', function() {
        expect(bagOfTokensScore([100, 200, 300, 400], 200)).to.equal(2);
    });

    xit('Should return 3 for (tokens=[33,41,10,91,47,84,98,34,48,70], power=43)', function() {
        expect(bagOfTokensScore([33, 41, 10, 91, 47, 84, 98, 34, 48, 70], 43)).to.equal(4);
    });
});