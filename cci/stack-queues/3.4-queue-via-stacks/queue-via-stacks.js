import {StackLL} from '../../../data-structures/stack.js';
/**
 * Class that represents a Queue
 * using two stacks
 */
export class MyQueue {
    /**
     * Initializer
     */
    constructor() {
        this.s1 = new StackLL();
        this.s2 = new StackLL();
    }
    /**
     * places an item at the back of the queue;
     * @param {T} item item to be placed at the
     * back of the queue
     */
    enqueue(item) {
        this.s1.push(item);
    }

    /**
     * Retrieves the item at the front of the queue,
     * and removes it from the queue;
     * @return {T} item at the front
     */
    dequeue() {
        if (this.s2.isEmpty()) {
            while (!this.s1.isEmpty()) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }

    /**
     * retrieves the item at the front of the
     * queue without removing it from the queue
     * @return {T}
     */
    peek() {
        if (this.s2.isEmpty()) {
            while (!this.s1.isEmpty()) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.peek();
    }

    /**
     * Determines whether or Queue is empty
     * @return {boolean}
     */
    isEmpty() {
        return this.s1.isEmpty() && this.s2.isEmpty();
    }
}
