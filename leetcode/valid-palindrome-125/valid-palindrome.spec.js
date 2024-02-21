/* eslint-disable max-len */
import {isPalindrome, isPalindromeOp} from './valid-palindrome.js';
import {expect} from 'chai';

export default describe.skip('Is a Valid Palindrome', function() {
    it('Should return true for (A man, a plan, a canal: Panama)', function() {
        expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true;
    });

    it('Should return true for (race a car)', function() {
        expect(isPalindrome('race a car')).to.be.false;
    });

    it('Should return true for ()', function() {
        expect(isPalindrome(' ')).to.be.true;
    });

    it('Should return true for (A man, a plan, a canal: Panama) O(n)', function() {
        expect(isPalindromeOp('A man, a plan, a canal: Panama')).to.be.true;
    });

    it('Should return true for (race a car) O(n)', function() {
        expect(isPalindromeOp('race a car')).to.be.false;
    });

    it('Should return true for ( ) O(n)', function() {
        expect(isPalindromeOp(' ')).to.be.true;
    });
});
