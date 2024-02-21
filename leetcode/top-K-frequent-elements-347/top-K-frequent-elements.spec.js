import {topKFrequent} from './top-K-frequent-elements.js';
import {expect} from 'chai';

export default describe.skip('Top K Frequent Elements', function() {
    it('Should return [1,2] for ([1,1,1,2,2,3], 2)', function() {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).to.deep.equal([1, 2]);
    });

    it('Should return [1,2] for ([1,1,1,3,2,2], 2)', function() {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).to.deep.equal([1, 2]);
    });

    it('Should return [1] for ([1], 1)', function() {
        expect(topKFrequent([1], 1)).to.deep.equal([1]);
    });

    it('Should return [0] for [3,0,1,0]', function() {
        expect(topKFrequent([3, 0, 1, 0], 1)).to.deep.equal([0]);
    });

    it('Should return [1,2] for [1,2]', function() {
        expect(topKFrequent([1, 2], 2)).to.deep.equal([1, 2]);
    });

    it('Should return [2,-1] for [4,1,-1,2,-1,2,3]', function() {
        expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).to.deep.equal([2, -1]);
    });
});
