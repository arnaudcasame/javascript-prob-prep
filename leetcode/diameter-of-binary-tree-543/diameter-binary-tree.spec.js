import {expect} from 'chai';
import {diameterOfBinaryTree} from './diameter-binary-tree.js';

export default describe('#543: Diameter of Binary Tree', function() {
    xit('Should return 3 for tree: [1,2,3,4,5]', function() {
        expect(diameterOfBinaryTree([1, 2, 3, 4, 5])).to.equal(3);
    });

    xit('Should return 1 for tree: [1,2]', function() {
        expect(diameterOfBinaryTree([1, 2])).to.equal(1);
    });
});
