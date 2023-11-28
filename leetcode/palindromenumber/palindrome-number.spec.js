import { numberIsPalindrome, numberIsPalindromeNoString } from "./palindrome-number";


export const numberIsPalindrome_ = 
describe('Number is Palindrome', function(){
    test('Should return true for 121', function(){
        expect(numberIsPalindrome(121)).toEqual(true);
    })

    test('Should return false for 323425', function(){
        expect(numberIsPalindrome(323425)).toEqual(false);
    })

    test('Should return true for 12321', function(){
        expect(numberIsPalindrome(12321)).toEqual(true);
    })

    test('Should return true for 121 (No String)', function(){
        expect(numberIsPalindromeNoString(121)).toEqual(true);
    })

    test('Should return false for 323425 (No String)', function(){
        expect(numberIsPalindromeNoString(323425)).toEqual(false);
    })

    test('Should return true for 12321 (No String)', function(){
        expect(numberIsPalindromeNoString(12321)).toEqual(true);
    })
})