/* eslint-disable max-len */
import {buildTree} from '../../helpers/BST/tree-builder.js';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isEvenOddTree = function(root) {
    const tree = buildTree(root, 'i');
    // console.log(tree);

    const queue = [{indice: 0, level: 0}];
    let level = 0;
    let lastValue = null;
    let lastLevel = 0;

    while (queue.length > 0) {
        // console.log(level, queue);
        const current = queue.shift();

        level = Math.max(level, current.level);

        if (lastLevel !== level) {
            lastValue = null;
        }

        // console.log('level:', level, 'node:', root[current.indice], 'lastValue:', lastValue);

        if (root[current.indice] === null) {
            continue;
        }

        if ((level%2 === 0) && (root[current.indice]%2 === 0 || (lastValue !== null && root[current.indice] <= lastValue))) {
            // console.log('Even Level', level, root[current.indice], 'Failure');
            // Even-Indexed level values must be Odd && in increasing order
            return false;
        } else if ((level%2 !== 0) && (root[current.indice]%2 !== 0 || (lastValue !== null && root[current.indice] >= lastValue))) {
            // console.log('Odd Level', level, root[current.indice], 'Failure');
            // Odd-Indexed level values must be even && in decreasing order
            return false;
        }

        lastValue = root[current.indice];
        lastLevel = level;

        // left node
        if (tree[current.indice][0]) {
            queue.push({indice: tree[current.indice][0], level: current.level + 1});
        }

        // right node
        if (tree[current.indice][1]) {
            queue.push({indice: tree[current.indice][1], level: current.level + 1});
        }
    }

    return true;
};
