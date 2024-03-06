import {BinarySearchTree} from '../../../data-structures/binary-search-tree.js';
/**
 *
 * @param {number[]} arr -
 * @return {BinarySearchTree} -
 */
export const minimalTree = function(arr) {
    const bst = makeMinimalTree(arr, 0, arr.length-1);

    const result = [];

    const queue = [bst];

    while (queue.length > 0) {
        const current = queue.shift();

        result.push(current.data);

        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }

    return result;
};

const makeMinimalTree = (arr, start, end) => {
    if (start > end) {
        return null;
    }
    const mid = parseInt((end + start)/2);

    const b = new BinarySearchTree(arr[mid]);
    b.left = makeMinimalTree(arr, start, mid-1);
    b.right = makeMinimalTree(arr, mid+1, end);
    return b;
};

