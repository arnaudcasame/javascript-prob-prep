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
 * @return {number}
 */
export const diameterOfBinaryTree = function(root) {
    const tree = buildTree(root, 'v');

    const result = [0];

    dfs(tree, root[0], result);

    // console.log(result);
    return result[0];
};

const dfs = (graph, root, result) => {
    if (!root) return -1;

    const left = dfs(graph, graph[root][0], result);
    const right = dfs(graph, graph[root][1], result);

    result[0] = Math.max(result[0], left + right + 2);

    return 1 + Math.max(left, right);
};
