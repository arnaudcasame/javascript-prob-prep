import {expect} from 'chai';
import {maxArea} from './container-with-most-water.js';

export default describe('#11: Container With Most Water', function() {
    xit('Should return 49 for [1,8,6,2,5,4,8,3,7]', function() {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).to.equal(49);
    });

    xit('Should return 1 for [1, 1]', function() {
        expect(maxArea([1, 1])).to.equal(1);
    });

    xit('Should return 1 for [2, 1]', function() {
        expect(maxArea([2, 1])).to.equal(1);
    });

    xit('Should return 1 for [1, 2]', function() {
        expect(maxArea([1, 2])).to.equal(1);
    });

    xit('Should return 17 for [2,3,4,5,18,17,6]', function() {
        expect(maxArea([2, 3, 4, 5, 18, 17, 6])).to.equal(17);
    });
});
