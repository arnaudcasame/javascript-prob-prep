import {MyQueue} from './queue-via-stacks.js';
import {expect} from 'chai';

export default describe('Queue Via Stacks', function() {
    let queue;
    before(function() {
        queue = new MyQueue();
        queue.enqueue(1);
    });

    xit('First peek should equal 1', function() {
        expect(queue.peek()).to.equal(1);
        queue.enqueue(2);
    });

    xit('Second peek should equal 2', function() {
        expect(queue.peek()).to.equal(2);
    });

    xit('Popping the Queue should equal 2', function() {
        expect(queue.dequeue()).to.equal(2);
    });

    xit('Popping the Queue should equal 1', function() {
        expect(queue.dequeue()).to.equal(2);
    });

    xit('At this point the Queue should be empty', function() {
        expect(queue.empty()).to.be.true;
    });
});
