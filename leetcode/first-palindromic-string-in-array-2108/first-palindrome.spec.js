/* eslint-disable max-len */
import {firstPalindrome} from './first-palindrome.js';
import {expect} from 'chai';

export default describe('#2108: Find First Palindromic String in the Array', function() {
    it('Should return `ada` for input ["abc", "car", "ada", "racecar", "cool"]', function() {
        expect(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])).to.equal('ada');
    });

    it('Should return `racecar` for input ["notapalindrome","racecar"]', function() {
        expect(firstPalindrome(['notapalindrome', 'racecar'])).to.equal('racecar');
    });

    it('Should return empty string for input ["def","ghi"]', function() {
        expect(firstPalindrome(['def', 'ghi'])).to.equal('');
    });
});
