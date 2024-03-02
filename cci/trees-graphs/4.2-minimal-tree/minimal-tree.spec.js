/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {BinarySearchTree} from '../../../data-structures/binary-search-tree.js';
import {minimalTree} from './minimal-tree.js';
import {expect} from 'chai';

export default describe('#4.2: Minimal Tree', function() {
    xit('Should return ', function() {
        // Pre-Order traversal of the tree should result in the expected array
        expect(minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal([5, 1, 2, 3, 4, 6, 7, 8, 9]);
    });
});
