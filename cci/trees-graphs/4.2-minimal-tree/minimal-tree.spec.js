/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {minimalTree} from './minimal-tree.js';
import {expect} from 'chai';

export default describe('#4.2: Minimal Tree', function() {
    xit('Should return the root as first element', function() {
        // Pre-Order traversal of the tree should result in the expected array
        expect(minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).to.deep.equal([6, 3, 9, 1, 4, 7, 10, 2, 5, 8, 11]);
    });

    xit('Should return the root as first element', function() {
        // Pre-Order traversal of the tree should result in the expected array
        const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
        expect(minimalTree(sortedArray)).to.deep.equal([15, 7, 23, 3, 11, 19, 27, 1, 5, 9, 13, 17, 21, 25, 29]);
    });

    xit('Should return the root as first element', function() {
        // Pre-Order traversal of the tree should result in the expected array
        const sortedArray = [2, 4, 6, 8, 10, 12];
        expect(minimalTree(sortedArray)).to.deep.equal([6, 2, 10, 4, 8, 12]);
    });
});
