/* eslint-disable max-len */
import {BinarySearchTree} from '../../../data-structures/binary-search-tree.js';
import {minimalTree} from './minimal-tree.js';
import {expect} from 'chai';

export default describe('#4.2: Minimal Tree', function() {
    xit('Should return ', function() {
        expect(minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(new BinarySearchTree(0));
    });
});
