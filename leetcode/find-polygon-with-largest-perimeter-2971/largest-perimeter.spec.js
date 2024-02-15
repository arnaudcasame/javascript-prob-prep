/* eslint-disable max-len */
import {largestPerimeter} from './largest-perimeter.js';
import {expect} from 'chai';

export default describe('#2971: Find Polygon With the Largest Perimeter', function() {
    xit('Should return 15 for input: [5,5,5]', function() {
        expect(largestPerimeter([5, 5, 5])).to.equal(15);
    });

    xit('Should return 12 for input: [1,12,1,2,5,50,3]', function() {
        expect(largestPerimeter([1, 12, 1, 2, 5, 50, 3])).to.equal(12);
    });

    xit('Should return -1 for input: [5,5,50]', function() {
        expect(largestPerimeter([5, 5, 50])).to.equal(-1);
    });
});
