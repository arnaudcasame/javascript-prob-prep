/* eslint-disable max-len */
import {expect} from 'chai';
import {maxFrequencyElements} from './count-elements-max-freq.js';

export default describe('#3005: Count Elements With Maximum Frequency', function() {
    xit('Should return 4 for: [1,2,2,3,1,4]', function() {
        expect(maxFrequencyElements([1, 2, 2, 3, 1, 4])).to.equal(4);
    });

    xit('Should return 5 for: [1,2,3,4,5]', function() {
        expect(maxFrequencyElements([1, 2, 3, 4, 5])).to.equal(5);
    });
});
