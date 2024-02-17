import {BinarySearchTree} from '../../data-structures/binary-search-tree.js';

const arr = [2, 4, 1, 8, 3, 5, 1, 3];

const bst = new BinarySearchTree(arr[0]);

for (let i = 1; i < arr.length; i++) {
    bst.insertInOrder(arr[i]);
}

console.log(bst);

console.log(bst.find(8));

