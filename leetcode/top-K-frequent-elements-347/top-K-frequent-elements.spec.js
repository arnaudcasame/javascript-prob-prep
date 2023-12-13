import { topKFrequent } from './top-K-frequent-elements';

export default describe('Top K Frequent Elements', function(){
    test('Should return [1,2] for ([1,1,1,2,2,3], 2)', function(){
        expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2]);
    });

    test('Should return [1,2] for ([1,1,1,3,2,2], 2)', function(){
        expect(topKFrequent([1,1,1,2,2,3], 2)).toEqual([1,2]);
    });

    test('Should return [1] for ([1], 1)', function(){
        expect(topKFrequent([1], 1)).toEqual([1]);
    });

    test('Should return [0] for [3,0,1,0]', function(){
        expect(topKFrequent([3,0,1,0], 1)).toEqual([0]);
    });

    test('Should return [1,2] for [1,2]', function(){
        expect(topKFrequent([1,2], 2)).toEqual([1,2]);
    });

    test('Should return [2,-1] for [4,1,-1,2,-1,2,3]', function(){
        expect(topKFrequent([4,1,-1,2,-1,2,3], 2)).toEqual([2,-1]);
    });
});