import {expect} from 'chai';
import {pivotInteger} from './find-pivot-integer.js';

export default describe('#2485: Find the Pivot Integer', function() {
    xit('Should return 6 for input: 8', function() {
        expect(pivotInteger(8)).to.equal(6);
    });

    xit('Should return 1 for input: 1', function() {
        expect(pivotInteger(1)).to.equal(1);
    });

    xit('Should return -1 for input: 4', function() {
        expect(pivotInteger(4)).to.equal(-1);
    });
});
