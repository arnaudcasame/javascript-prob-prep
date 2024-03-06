/* eslint-disable max-len */
import {validateBST} from './validateBST.js';
import {expect} from 'chai';

export default describe('#4.5: Validate BST', function() {
    xit('Should return true for: ...', function() {
        const bst1 = {0: [null, null], 1: [0, 2], 2: [null, null]};
        // Interpretation: 1 -> 0, 1 -> 2
        expect(validateBST(bst1, '1')).to.be.true;
    });

    xit('Should return true for: ...', function() {
        const bst2 = {5: [3, 7], 7: [null, 8], 2: [null, null], 3: [2, null], 8: [null, null]};
        // Interpretation: 5 (root) -> 3 (left), 5 -> 7 (right); 3 -> 2 (left), 7 -> 8 (right)
        expect(validateBST(bst2, '5')).to.be.true;
    });

    xit('Should return true for: ...', function() {
        const bst3 = {4: [2, 6], 6: [5, 7], 2: [1, null], 5: [null, null], 7: [null, null], 1: [null, null]};
        // Interpretation: 4 (root) -> 2 (left), 4 -> 6 (right); 2 -> 1, 6 -> 5, 6 -> 7
        expect(validateBST(bst3, '4')).to.be.true;
    });

    xit('Should return false for: ...', function() {
        const tree1 = {
            0: [1, 2],
            1: [null, null],
            2: [3, 4],
            3: [null, null],
            4: [null, null],
        };
        expect(validateBST(tree1, '0')).to.be.false;
    });

    xit('Should return false for: ...', function() {
        const tree2 = {
            0: [1, 3],
            1: [null, 2],
            2: [null, null],
            3: [4, null],
            4: [null, null],
        };
        expect(validateBST(tree2, '0')).to.be.false;
    });

    xit('Should return false for: ...', function() {
        const tree3 = {
            0: [1, null],
            1: [2, null],
            2: [null, 3],
            3: [null, null],
        };
        expect(validateBST(tree3, '0')).to.be.false;
    });
});
