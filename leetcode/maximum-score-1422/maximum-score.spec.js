/* eslint-disable max-len */
import {maxScore} from './maximum-score.js';
import {expect} from 'chai';

export default describe.skip('Maximum Score after Splitting a String', function() {
    it('Should return 5 for (011101)', function() {
        expect(maxScore('011101')).to.equal(5);
    });

    it('Should return 5 for (00111)', function() {
        expect(maxScore('00111')).to.equal(5);
    });

    it('Should return 3 for (1111)', function() {
        expect(maxScore('1111')).to.equal(3);
    });

    it('Should return 1 for (1111)', function() {
        expect(maxScore('00')).to.equal(1);
    });
});
