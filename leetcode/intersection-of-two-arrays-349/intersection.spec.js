import {expect} from 'chai';
import {intersection} from './intersection.js';

export default describe('#349: Intersection of Two Arrays', function() {
    xit('Should return [2]', function() {
        expect(intersection([1, 2, 2, 1], [2, 2])).to.deep.equal([2]);
    });

    xit('Should return [9,4]', function() {
        expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).to.deep.equal([9, 4]);
    });
});
