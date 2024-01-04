import {ListNode} from './list-node.js';
/**
 * Represents the QueueLL class
 * @template T
 * @class
 */
export class QueueLL {
    /**
     * The QueueLL initializer
     * @constructor
     * @template T
     */
    constructor() {
        /**
         * Front of the queueLL
         * @type {ListNode}
         */
        this.front;
        /**
         * Back of the queueLL
         * @type {ListNode}
         */
        this.back;
    }

    /**
     * Places the item at the back of the queue
     * @param {T} item the element to place at the front
     */
    enqueue(item) {
        if (!this.back) {
            this.back = new ListNode(item);
        } else {
            this.back.next = new ListNode(item);
            this.back = this.back.next;
        }
        if (!this.front) {
            this.front = this.back;
        }
    }

    /**
     * Retrieves the item at the front of the queueLL
     * @return {T} The element positioned at the front
     * of the queueLL
     */
    dequeue() {
        const item = this.front;
        this.front = this.front.next;
        item.next = null;
        return item;
    }

    /**
     * Retrieves the item at the front of the queueLL
     * without removing it from the queueLL.
     * @return {T}
     */
    peek() {
        return this.front;
    }

    /**
     * Returns true if and only if the queue is Empty
     * @return {boolean}
     */
    isEmpty() {
        return this.front === null;
    }
}
