/* eslint-disable max-len */
import {expect} from 'chai';
import {longestSubarray} from './longest-subarray-of-ones.js';

export default describe('#1493: Longest Subarray of 1\'s After Deleting One Element', function() {
    it('Should return 3', function() {
        expect(longestSubarray([1, 1, 0, 1])).to.equal(3);
    });

    it('Should return 5', function() {
        expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).to.equal(5);
    });

    it('Shoulr return 2', function() {
        expect(longestSubarray([1, 1, 1])).to.equal(2);
    });
});