/* eslint-disable max-len */
import {findLeastNumOfUniqueInts} from './find-least-number-unique.js';
import {expect} from 'chai';

export default describe('#1481: Find Least Number of Unique Integers after K removals', function() {
    xit('Should return 1 for input: [5,5,4]', function() {
        expect(findLeastNumOfUniqueInts([5, 5, 4], 1)).to.equal(1);
    });

    xit('Should return 2 for input: [4,3,1,1,3,3,2]', function() {
        expect(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 2)).to.equal(2);
    });
});
