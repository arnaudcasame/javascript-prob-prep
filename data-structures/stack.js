/**
 * Represents a Stack class that implements
 * the data structure's methods:
 * push, pop, getTop, isEmpty
 * @class
 */
export class Stack {
    /**
     * Stack object Initializer
     */
    constructor() {
        this.data_ = [];
    }

    /**
     * Pushes the item received as argument
     * to the top of the stack
     * @param {T} item the item to push to
     * top of the stack
     */
    push(item) {
        this.data_.push(item);
    }

    /**
     * Removes the top item from the stack
     * @return {T} item that previously was
     * on the top of the Stack
     */
    pop() {
        return this.data_.pop();
    }

    /**
     * Returns true if and only if the
     * Stack is Empty
     * @return {boolean}
     */
    isEmpty() {
        return this.data_.length === 0;
    }

    /**
     * Returns the item that is currently
     * on the top of the Stack
     * @return {T}
     */
    peek() {
        return this.data_[this.data_.length-1];
    }
}

import {ListNode} from './list-node.js';
/**
 * Represents a Stack class that implements
 * the data structure's methods:
 * push, pop, getTop, isEmpty
 * @class
 */
export class StackLL {
    /**
     * StackLL object Initializer
     */
    constructor() {
        this.top;
    }

    /**
     * Pushes the item received as argument
     * to the top of the StackLL
     * @param {T} item the item to push to
     * top of the StackLL
     */
    push(item) {
        if (!this.top) {
            this.top = new ListNode(item);
        } else {
            this.top = new ListNode(item, this.top);
        }
    }

    /**
     * Removes the top item from the StackLL
     * @return {T} item that previously was
     * on the top of the StackLL
     */
    pop() {
        const current = this.top;
        this.top = this.top.next;
        current.next = null;
        return current;
    }

    /**
     * Returns true if and only if the
     * StackLL is Empty
     * @return {boolean}
     */
    isEmpty() {
        return !this.top;
    }

    /**
     * Returns the item that is currently
     * on the top of the StackLL
     * @return {T}
     */
    peek() {
        return this.top;
    }
}
