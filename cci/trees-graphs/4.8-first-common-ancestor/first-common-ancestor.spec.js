import {expect} from 'chai';
import {commonAncestor} from './first-common-ancestor.js';


export default describe('#4.8: First Common Ancestor', function() {
    xit('Should return []', function() {
        expect(commonAncestor([])).to.equal([]);
    });
});
