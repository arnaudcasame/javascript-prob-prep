import {isValid} from './valid-parentheses.js';

export default describe('Valid Parentheses', function() {
    it('Should return true when passing \'()\'', function() {
        expect(isValid('()')).toEqual(true);
    });

    it('Should return false when passing \'(]\'', function() {
        expect(isValid('(]')).toEqual(false);
    });

    it('Should return true when passing \'()[]{}\'', function() {
        expect(isValid('()[]{}')).toEqual(true);
    });
});
