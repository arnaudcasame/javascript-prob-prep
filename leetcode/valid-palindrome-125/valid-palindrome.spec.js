/* eslint-disable max-len */
import {isPalindrome, isPalindromeOp} from './valid-palindrome.js';

export default describe('Is a Valid Palindrome', function() {
    it('Should return true for (A man, a plan, a canal: Panama)', function() {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
    });

    it('Should return true for (race a car)', function() {
        expect(isPalindrome('race a car')).toEqual(false);
    });

    it('Should return true for ()', function() {
        expect(isPalindrome(' ')).toEqual(true);
    });

    it('Should return true for (A man, a plan, a canal: Panama) O(n)', function() {
        expect(isPalindromeOp('A man, a plan, a canal: Panama')).toEqual(true);
    });

    it('Should return true for (race a car) O(n)', function() {
        expect(isPalindromeOp('race a car')).toEqual(false);
    });

    it('Should return true for ( ) O(n)', function() {
        expect(isPalindromeOp(' ')).toEqual(true);
    });
});
