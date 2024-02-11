import {Stack} from '../../../data-structures/stack.js';
Stack.prototype.getLength = function() {
    return this.data_.length;
};
/**
 * Class that represents
 * the SetOfStacks
 */
export class SetOfStacks {
    /**
     * Initialization method
     */
    constructor() {
        this.set_ = [];
        this.current_ = 0;
        this.threshold = 5;
    }
    /**
     * Pushes item onto the stack
     * @param {T} item item being pushed
     */
    push(item) {
        if (this.set_.length === 0 ||
            this.set_[this.current_].getLength() === this.threshold) {
            this.set_.push(new Stack());
        }
        if (this.set_[this.current_].getLength() === this.threshold) {
            this.current_++;
        }
        this.set_[this.current_].push(item);
    }

    /**
     * Pops last item out of the stacks
     * @return {T} item
     */
    pop() {
        if (this.set_[this.current_].isEmpty()) {
            this.set_.pop();
            this.current_--;
        }
        return this.set_[this.current_].pop();
    }

    /**
     * Retrieves top item of last Stack
     * @return {T} item at the top
     * of the last Stack
     */
    peek() {
        return this.set_[this.current_].peek();
    }

    /**
     * Forms a pop operation on a specific sub-stack
     * @param {number} index index of the stack to push
     * the item on
     * @return {T}
     */
    popAt(index) {
        return this.set_[index].pop();
    }
}

