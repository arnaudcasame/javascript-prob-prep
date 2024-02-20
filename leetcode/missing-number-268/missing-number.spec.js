import {missingNumber} from './missing-number.js';
import {expect} from 'chai';

export default describe('#268: Missing Number', function() {
    xit('Should return 2 for input: [3,0,1]', function() {
        expect(missingNumber([3, 0, 1])).to.equal(2);
    });

    xit('Should return 2 for input: [0,1]', function() {
        expect(missingNumber([0, 1])).to.equal(2);
    });

    xit('Should return 8 for input: [9,6,4,2,3,5,7,0,1]', function() {
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).to.equal(8);
    });
});
