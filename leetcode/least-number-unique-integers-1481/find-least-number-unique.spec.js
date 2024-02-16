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

    xit('Should return 0 for input: [1]', function() {
        expect(findLeastNumOfUniqueInts([1], 1)).to.equal(0);
    });

    xit('Should return 1 for input: [2,1,1,3,3,3]', function() {
        expect(findLeastNumOfUniqueInts([2, 1, 1, 3, 3, 3], 3)).to.equal(1);
    });

    xit('Should return 3 for input: [2,4,1,8,3,5,1,3]', function() {
        expect(findLeastNumOfUniqueInts([2, 4, 1, 8, 3, 5, 1, 3], 3)).to.equal(3);
    });
});
