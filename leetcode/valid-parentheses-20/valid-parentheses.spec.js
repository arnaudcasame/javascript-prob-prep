import {isValid} from './valid-parentheses.js';
import {expect} from 'chai';

export default describe.skip('Valid Parentheses', function() {
    it('Should return true when passing \'()\'', function() {
        expect(isValid('()')).to.be.true;
    });

    it('Should return false when passing \'(]\'', function() {
        expect(isValid('(]')).to.be.false;
    });

    it('Should return true when passing \'()[]{}\'', function() {
        expect(isValid('()[]{}')).to.be.true;
    });
});
