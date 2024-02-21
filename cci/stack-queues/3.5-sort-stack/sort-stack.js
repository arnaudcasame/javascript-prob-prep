import {Stack} from '../../../data-structures/stack.js';

/**
 * Sorts stack elements such that
 * the smallest items are on the top
 * @param {Stack} stack to be sorted
 * @return {Stack} sorted stack
 */
export const sortStack = function(stack) {
    const sorted = new Stack();
    while (!stack.isEmpty()) {
        const current = stack.pop();
        if (sorted.isEmpty()) {
            sorted.push(current);
            continue;
        } else if (current <= sorted.peek()) {
            sorted.push(current);
            continue;
        }
        while (sorted.peek() < current) {
            stack.push(sorted.pop());
        }
        sorted.push(current);
    }
    return sorted;
};
