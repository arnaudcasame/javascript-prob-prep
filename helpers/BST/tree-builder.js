import {BinarySearchTree} from '../../data-structures/binary-search-tree.js';

/**
 * Builds a Binary Tree from an array using
 * indices when mode is 'i' or values when mode is 'v'
 * @param {T} arr
 * @param {string} mode can be 'i' or 'v'
 * @return {Object}
 */
export const buildTree = (arr, mode)=>{
    const tree = {};
    let i = 0;

    while (i < arr.length && mode === 'i') {
        if (!(i in tree)) {
            tree[i] = [];
        }

        arr[(i*2)+1] !== undefined && tree[i].push((i*2)+1);
        arr[(i*2)+2] !== undefined && tree[i].push((i*2)+2);

        i++;
    }

    while (i < arr.length && mode === 'v') {
        if (!(arr[i] in tree)) {
            tree[arr[i]] = [];
        }

        arr[(i*2)+1] !== undefined && tree[arr[i]].push(arr[(i*2)+1]);
        arr[(i*2)+2] !== undefined && tree[arr[i]].push(arr[(i*2)+2]);

        i++;
    }

    return tree;
};


/**
 * Builds a Binary Tree from an array to Nodes tree
 * @param {T} arr
 * @param {string} mode can be 'i' or 'v'
 * @return {Object}
 */
export const buildBinaryNode = (arr)=>{
    const tree = {};
    let i = 0;

    while (i < arr.length) {
        if (!(i in tree)) {
            tree[i] = new BinarySearchTree(arr[i]);
        }

        i++;
    }

    i = 0;

    let root = null;

    while (i < arr.length) {
        if (!root) {
            root = tree[i];
        }

        if (arr[(i*2)+1] || arr[(i*2)+1] === 0) {
            tree[i].setLeftChild(tree[(i*2)+1]);
        }

        if (arr[(i*2)+2] || arr[(i*2)+2] === 0) {
            tree[i].setRightChild(tree[(i*2)+2]);
        }

        i++;
    }

    return root;
};


const res = buildBinaryNode([2, 0, 4, 1, 8, null, 3, 5, null, 7, 9, 0], 'v');

// console.log(res);

/**
 *
 * @param {BinarySearchTree} root
 */
const dfs = (root) =>{
    console.log(root.data);

    if (root.left)dfs(root.left);

    if (root.right)dfs(root.right);
};

dfs(res);
