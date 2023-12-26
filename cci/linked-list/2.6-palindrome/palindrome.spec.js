import { palindrome } from "./palindrome";

export default describe('Palindrome #LinkedList', function(){
    test('title', function(){
        expect(palindrome([])).toEqual(true);
    })
});