/* eslint-disable max-len */
import {furthestBuilding} from './furthest-building.js';
import {expect} from 'chai';

export default describe('#1642: Furthest Building You Can Reach', function() {
    xit('Should return 4 for input ([4,2,7,6,9,14,12], 5, 1)', function() {
        expect(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1)).to.equal(4);
    });

    xit('Should return 7 for input ([4,12,2,7,3,18,20,3,19], 10, 2)', function() {
        expect(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)).to.equal(7);
    });

    xit('Should return 3 for input ([14,3,19,3], 17, 0)', function() {
        expect(furthestBuilding([14, 3, 19, 3], 17, 0)).to.equal(3);
    });
});
