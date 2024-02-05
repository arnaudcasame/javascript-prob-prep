import {numberIsPalindrome,
    numberIsPalindromeNoString} from './palindrome-number.js';
import {expect} from 'chai';


export default describe.skip('Number is Palindrome', function() {
    it('Should return true for 121', function() {
        expect(numberIsPalindrome(121)).to.be.true;
    });

    it('Should return false for 323425', function() {
        expect(numberIsPalindrome(323425)).to.be.false;
    });

    it('Should return true for 12321', function() {
        expect(numberIsPalindrome(12321)).to.be.true;
    });

    it('Should return true for 121 (No String)', function() {
        expect(numberIsPalindromeNoString(121)).to.be.true;
    });

    it('Should return false for 323425 (No String)', function() {
        expect(numberIsPalindromeNoString(323425)).to.be.false;
    });

    it('Should return true for 12321 (No String)', function() {
        expect(numberIsPalindromeNoString(12321)).to.be.true;
    });
});
