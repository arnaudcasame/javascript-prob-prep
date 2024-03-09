import {expect} from 'chai';
import {getCommon} from './minimum-common-value.js';


export default describe('#2540: Minimum Common Value', function() {
    it('Should return 2 for [1,2,3], [2,4]', function() {
        expect(getCommon([1, 2, 3], [2, 4])).to.equal(2);
    });

    it('Should return 2 for [1,2,3,6], [2,3,4,5]', function() {
        expect(getCommon([1, 2, 3, 6], [2, 3, 4, 5])).to.equal(2);
    });

    it('Should return 1 for [1,2,3,6], [1,2,3,4,5]', function() {
        expect(getCommon([1, 2, 3, 6], [1, 2, 3, 4, 5])).to.equal(1);
    });
});
