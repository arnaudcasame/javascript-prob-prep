/* eslint-disable max-len */
import {imageSmoother} from './image-smoother.js';
import {expect} from 'chai';

export default describe.skip('Image Smoother', function() {
    it('Should return ', function() {
        expect(imageSmoother([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).to.deep.equal([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });

    xit('Should return ', function() {
        expect(imageSmoother([[100, 200, 100], [200, 50, 200], [100, 200, 100]])).to.deep.equal([[137, 141, 137], [141, 138, 141], [137, 141, 137]]);
    });
});
