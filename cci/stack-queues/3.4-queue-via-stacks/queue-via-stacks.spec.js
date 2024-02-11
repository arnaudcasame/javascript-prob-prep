import {MyQueue} from './queue-via-stacks.js';
import {expect} from 'chai';

export default describe('Queue Via Stacks', function() {
    let queue;
    before(function() {
        queue = new MyQueue();
        queue.enqueue(1);
    });

    it('First Peek should equal 1', function() {
        expect(queue.peek()).to.equal(1);
        queue.enqueue(2);
    });

    it('Second Peek after enqueuing 2 should equal 1', function() {
        expect(queue.peek()).to.equal(1);
    });

    it('First Dequeue should equal 1', function() {
        expect(queue.dequeue()).to.equal(1);
    });

    it('Third Peek should equal 2', function() {
        expect(queue.peek()).to.equal(2);
    });

    it('Second Dequeue should equal 2', function() {
        expect(queue.dequeue()).to.equal(2);
    });

    it('At this point the Queue should be empty', function() {
        expect(queue.isEmpty()).to.be.true;
    });
});
