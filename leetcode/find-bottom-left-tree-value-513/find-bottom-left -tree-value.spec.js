/* eslint-disable max-len */
import {findBottomLeftValue} from './find-bottom-left -tree-value.js';
import {expect} from 'chai';

export default describe('#513: Find Bottom Left Tree Value', function() {
    xit('Should return 1 for [2,1,3]', function() {
        expect(findBottomLeftValue([2, 1, 3])).to.equal(1);
    });

    xit('Should return 7 for [1,2,3,4,null,...]', function() {
        expect(findBottomLeftValue([1, 2, 3, 4, null, 5, 6, null, null, 7])).to.equal(7);
    });
});
