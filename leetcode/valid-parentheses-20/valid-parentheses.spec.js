import { isValid } from "./valid-parentheses";

export const isValid_ = 
describe('Valid Parentheses', function(){
    test('Should return true when passing \'()\'', function(){
        expect(isValid('()')).toEqual(true);
    });

    test('Should return false when passing \'(]\'', function(){
        expect(isValid('(]')).toEqual(false);
    });

    test('Should return true when passing \'()[]{}\'', function(){
        expect(isValid('()[]{}')).toEqual(true);
    });
});