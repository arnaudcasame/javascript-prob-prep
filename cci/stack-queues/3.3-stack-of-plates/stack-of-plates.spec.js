import {SetOfStacks} from './stack-of-plates.js';
import {expect} from 'chai';

export default describe('#3.3: Stack of Plates', function() {
    let stack;
    before(function() {
        stack = new SetOfStacks();
        stack.push(10);
        stack.push(12);
        stack.push(9);
        stack.push(8);
        stack.push(3);
    });

    it('Should Peek 3, then Pop 3 8 9, Peek 12', function() {
        expect(stack.peek()).to.equal(3);
        expect(stack.pop()).to.equal(3);
        expect(stack.pop()).to.equal(8);
        expect(stack.pop()).to.equal(9);
        expect(stack.peek()).to.equal(12);

        stack.push(9);
        stack.push(8);
        stack.push(3);
    });

    it('Should Peek 33 then 64, Pop 98, 114', function() {
        stack.push(33);
        expect(stack.peek()).to.equal(33);
        stack.push(36);
        stack.push(64);
        expect(stack.peek()).to.equal(64);
        stack.push(114);
        stack.push(98);
        expect(stack.pop()).to.equal(98);
        expect(stack.pop()).to.equal(114);
    });

    it('Should Pop 4, then -6 & 64', function() {
        stack.push(1);
        stack.push(2);
        stack.push(1);
        stack.push(-6);
        stack.push(4);
        expect(stack.pop()).to.equal(4);
        expect(stack.pop()).to.equal(-6);
        expect(stack.pop()).to.equal(1);
    });

    it('Should Pop 3 then 6 & Peek 8', function() {
        stack.push(3);
        expect(stack.pop()).to.equal(3);
        stack.push(6);
        expect(stack.pop()).to.equal(6);
        stack.push(8);
        expect(stack.peek()).to.equal(8);
        stack.push(1);
        stack.push(192);
        expect(stack.peek()).to.equal(192);
    });

    it('Should Peek -8 then Pop -8 & 64', function() {
        stack.push(9);
        stack.push(-8);
        expect(stack.peek()).to.equal(-8);
        expect(stack.pop()).to.equal(-8);
        stack.push(1);
        stack.push(56);
        stack.push(168);
        expect(stack.pop()).to.equal(168);
    });

    it('Should Pop at Inner Stack #1(3), #2(2), #3(1)', function() {
        expect(stack.popAt(0)).to.equal(3);
        expect(stack.popAt(1)).to.equal(2);
        expect(stack.popAt(2)).to.equal(1);
    });
});
