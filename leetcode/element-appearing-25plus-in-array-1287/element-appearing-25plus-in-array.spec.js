/* eslint-disable max-len */
import {findSpecialInteger} from './element-appearing-25plus-in-array.js';
import {expect} from 'chai';

export default describe.skip('Element Appearing More Than 25% In Sorted Array', () => {
    it(' Should return 6 for ([1,2,2,6,6,6,6,7,10])', () => {
        expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])).to.equal(6);
    });

    it(' Should return 1 for ([1,1])', () => {
        expect(findSpecialInteger([1, 1])).to.equal(1);
    });
});
