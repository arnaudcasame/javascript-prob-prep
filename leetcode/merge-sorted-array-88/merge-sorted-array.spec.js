/* eslint-disable max-len */
import {merge} from './merge-sorted-array.js';

export default describe('Merge Sorted Array', function() {
    it('Should return [1,2,2,3,5,6] for ([1,2,3,0,0,0], 6, [2,5,6], 3)', function() {
        expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
    });

    it('Should return [1] Array for ([1], [])', function() {
        expect(merge([1], 1, [], 0)).toEqual([1]);
    });

    it('Should return [1] Array for ([0], [1])', function() {
        expect(merge([0], 0, [1], 1)).toEqual([1]);
    });

    it('Should return [1,2] for ([2, 0], [1])', function() {
        expect(merge([2, 0], 1, [1], 1)).toEqual([1, 2]);
    });

    it('Should return [1,2,3,4,5,6] for ([4,5,6,0,0,0], [1,2,3])', function() {
        expect(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
