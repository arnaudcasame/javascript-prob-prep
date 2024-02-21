/* eslint-disable max-len */
import {maxWidthOfVerticalArea} from './wildest-vertical-area-1637.js';
import {expect} from 'chai';

export default describe.skip('Wildest Vertical Area between two Points containing no Points', function() {
    it('Should return 1 for ', function() {
        expect(maxWidthOfVerticalArea([[8, 7], [9, 9], [7, 4], [9, 7]])).to.equal(1);
    });

    xit('Should return 3 for ', function() {
        expect(maxWidthOfVerticalArea([[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]])).to.equal(3);
    });
});
