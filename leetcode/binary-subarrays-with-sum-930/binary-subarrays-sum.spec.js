import {expect} from 'chai';
import {numSubarraysWithSum} from './binary-subarrays-sum.js';


export default describe('#930: Binary Subarrays With Sum', function() {
    xit('Should return 4 for [1,0,1,0,1]', function() {
        expect(numSubarraysWithSum([1, 0, 1, 0, 1], 2)).to.equal(4);
    });

    xit('Should return 15 for [0,0,0,0,0]', function() {
        expect(numSubarraysWithSum([0, 0, 0, 0, 0], 0)).to.equal(15);
    });
});
