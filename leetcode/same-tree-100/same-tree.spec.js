import {expect} from 'chai';
import {isSameTree} from './same-tree.js';

export default describe('#100: Same Tree', function() {
    xit('Should return true for [1,2,3] [1,2,3]', function() {
        expect(isSameTree([1, 2, 3], [1, 2, 3])).to.be.true;
    });

    xit('Should return false for [1,2] [1,null,2]', function() {
        expect(isSameTree([1, 2], [1, null, 2])).to.be.false;
    });

    xit('Should return false for [1,2,1] [1,1,2]', function() {
        expect(isSameTree([1, 2, 1], [1, 1, 2])).to.be.false;
    });
});
