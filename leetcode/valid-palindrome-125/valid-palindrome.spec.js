import { isPalindrome, isPalindromeOp } from "./valid-palindrome";

export const isPalindrome_ = 
describe('Is a Valid Palindrome', function(){
    test('Should return true for (A man, a plan, a canal: Panama)', function(){
        expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
    });

    test('Should return true for (race a car)', function(){
        expect(isPalindrome("race a car")).toEqual(false);
    });

    test('Should return true for ()', function(){
        expect(isPalindrome(" ")).toEqual(true);
    });

    test('Should return true for (A man, a plan, a canal: Panama) O(n)', function(){
        expect(isPalindromeOp("A man, a plan, a canal: Panama")).toEqual(true);
    });
    
    test('Should return true for (race a car) O(n)', function(){
        expect(isPalindromeOp("race a car")).toEqual(false);
    });

    test('Should return true for ( ) O(n)', function(){
        expect(isPalindromeOp(" ")).toEqual(true);
    });
});