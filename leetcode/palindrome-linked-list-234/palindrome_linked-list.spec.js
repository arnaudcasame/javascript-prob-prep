import {expect} from 'chai';
import {isPalindrome} from './palindrome_linked-list.js';
import {ListNode} from '../../data-structures/list-node.js';

export default describe('#234: Palindrome Linked List', function() {
    xit('Should return true', function() {
        const head = ListNode.fromArray([[1, 2, 2, 1]]);
        expect(isPalindrome(head)).to.be.true;
    });

    xit('Should return false', function() {
        const head = ListNode.fromArray([[1, 2]]);
        expect(isPalindrome(head)).to.be.false;
    });
});
