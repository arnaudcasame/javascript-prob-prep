import {sortStack} from './sort-stack.js';
import {Stack} from '../../../data-structures/stack.js';
import {expect} from 'chai';

export default describe('#Sort Stack', function() {
    let sortedStack;
    before(function() {
        const stack = new Stack();
        stack.push(10);
        stack.push(3);
        stack.push(9);
        stack.push(12);
        stack.push(8);
        stack.push(33);
        sortedStack = sortStack(stack);
    });

    xit('Should be equal to 3', function() {
        expect(sortedStack.pop()).to.equal(3);
    });

    xit('Should be equal to 8', function() {
        expect(sortedStack.pop()).to.equal(8);
    });

    xit('Should be equal to 9', function() {
        expect(sortedStack.pop()).to.equal(9);
    });

    xit('Should be equal to 10', function() {
        expect(sortedStack.pop()).to.equal(10);
    });

    xit('Should be equal to 12', function() {
        expect(sortedStack.pop()).to.equal(12);
    });

    xit('Should be equal to 33', function() {
        expect(sortedStack.pop()).to.equal(33);
    });
});
