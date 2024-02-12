import {majorityElement} from './majority-element.js';
import {expect} from 'chai';

export default describe('#169: Majority Element', function() {
    xit('Should return 3 for [3,2,3]', function() {
        expect(majorityElement([3, 2, 3])).to.equal(3);
    });

    xit('Should return 2 for [2,2,1,1,1,2,2]', function() {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).to.equal(2);
    });
});
