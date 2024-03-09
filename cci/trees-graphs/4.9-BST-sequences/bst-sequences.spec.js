import {expect} from 'chai';
import {bstSequence} from './bst-sequences.js';

export default describe('#4.9: BST Sequence', function() {
    xit('Should return 0', function() {
        expect(bstSequence([])).to.equal(0);
    });
});
