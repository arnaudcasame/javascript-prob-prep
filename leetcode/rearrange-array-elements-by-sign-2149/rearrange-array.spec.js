/* eslint-disable max-len */
import {rearrangeArray} from './rearrange-array.js';
import {expect} from 'chai';

export default describe('#2149: Rearrange Array Elements by Sign', function() {
    xit('Should return [3,-2,1,-5,2,-4] for input = [3,1,-2,-5,2,-4]', function() {
        expect(rearrangeArray([3, 1, -2, -5, 2, -4])).to.equal([3, -2, 1, -5, 2, -4]);
    });

    xit('Should return [1,-1] for input = [-1,1]', function() {
        expect(rearrangeArray([-1, 1])).to.equal([1, -1]);
    });
});
