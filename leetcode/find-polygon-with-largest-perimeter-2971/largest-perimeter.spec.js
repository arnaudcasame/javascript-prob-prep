/* eslint-disable max-len */
import {largestPerimeter} from './largest-perimeter.js';
import {expect} from 'chai';

export default describe('#2971: Find Polygon With the Largest Perimeter', function() {
    it('Should return 15 for input: [5,5,5]', function() {
        expect(largestPerimeter([5, 5, 5])).to.equal(15);
    });

    it('Should return 12 for input: [1,12,1,2,5,50,3]', function() {
        expect(largestPerimeter([1, 12, 1, 2, 5, 50, 3])).to.equal(12);
    });

    it('Should return -1 for input: [5,5,50]', function() {
        expect(largestPerimeter([5, 5, 50])).to.equal(-1);
    });

    it('Should return 17876942274 for input: [300005055, 352368231, ..., 315829776]', function() {
        const longestInput = [300005055, 352368231, 311935527, 315829776, 327065463, 388851949, 319541150, 397875604, 311309167, 391897750, 366860048, 359976490, 325522439, 390648914, 359891976, 369105322, 350430086, 398592583, 354559219, 372400239, 344759294, 379931363, 308829137, 335032174, 336962933, 380797651, 378305476, 336617902, 393487098, 301391791, 394314232, 387440261, 316040738, 388074503, 396614889, 331609633, 374723367, 380418460, 349845809, 318514711, 308782485, 308291996, 375362898, 397542455, 397628325, 392446446, 368662132, 378781533, 372327607, 378737987];
        expect(largestPerimeter(longestInput)).to.equal(17876942274);
    });
});
