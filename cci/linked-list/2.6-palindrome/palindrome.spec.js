import { palindrome } from "./palindrome";
import { ListNode } from "../../../data-structures/list-node";

export default describe('Palindrome #LinkedList', function(){
    test('Should return true for (amanaplanacanalpanama)', function(){
        const word = 'amanaplanacanalpanama';
        const list = ListNode.fromArray(word);
        expect(palindrome(list, word.length)).toEqual(true);
    });

    test('Should return false for (raceacar)', function(){
        const word = 'raceacar';
        const list = ListNode.fromArray(word);
        expect(palindrome(list, word.length)).toEqual(false);
    });

    test('Should return true for (211112)', function(){
        const nums = [2,1,1,1,1,2];
        const list = ListNode.fromArray(nums);
        expect(palindrome(list, nums.length)).toEqual(true);
    });

    test('Should return true for (2110112)', function(){
        const nums = [2,1,1,0,1,1,2];
        const list = ListNode.fromArray(nums);
        expect(palindrome(list, nums.length)).toEqual(true);
    });

    test('Should return false for (atctcoa)', () => {
        const word = 'atctcoa';
        const list = ListNode.fromArray(word);
        expect(palindrome(list)).toEqual(false);
    });
});