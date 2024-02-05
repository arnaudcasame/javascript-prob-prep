import {numberIsPalindrome,
    numberIsPalindromeNoString} from './palindrome-number.js';


export default describe('Number is Palindrome', function() {
    it('Should return true for 121', function() {
        expect(numberIsPalindrome(121)).toEqual(true);
    });

    it('Should return false for 323425', function() {
        expect(numberIsPalindrome(323425)).toEqual(false);
    });

    it('Should return true for 12321', function() {
        expect(numberIsPalindrome(12321)).toEqual(true);
    });

    it('Should return true for 121 (No String)', function() {
        expect(numberIsPalindromeNoString(121)).toEqual(true);
    });

    it('Should return false for 323425 (No String)', function() {
        expect(numberIsPalindromeNoString(323425)).toEqual(false);
    });

    it('Should return true for 12321 (No String)', function() {
        expect(numberIsPalindromeNoString(12321)).toEqual(true);
    });
})