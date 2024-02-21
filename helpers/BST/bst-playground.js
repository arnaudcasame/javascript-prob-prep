/* eslint-disable max-len */
import {BinarySearchTree} from '../../data-structures/binary-search-tree.js';

const arr = [2, 4, 1, 8, 3, 5, 1, 3];

const bst = new BinarySearchTree(arr[0]);

for (let i = 1; i < arr.length; i++) {
    bst.insertInOrder(arr[i]);
}

console.log(bst);
// console.log(bst.find(8));

const visit = function(node) {
    (node.data || node.data === 0) && console.log(node.data);
};

const inOrderTraversal = function(node) {
    if (node.left) {
        inOrderTraversal(node.left);
    }
    visit(node);
    if (node.right) {
        inOrderTraversal(node.right);
    }
};

const preOrderTraversal = function(node) {
    visit(node);
    if (node.left) {
        preOrderTraversal(node.left);
    }
    if (node.right) {
        preOrderTraversal(node.right);
    }
};

const postOrderTraversal = function(node) {
    if (node.left) {
        postOrderTraversal(node.left);
    }
    if (node.right) {
        postOrderTraversal(node.right);
    }
    visit(node);
};

const breadthFirstSearch = (root) => {
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.right) {
            queue.push(current.right);
        }
        if (current.left) {
            queue.push(current.left);
        }
        result.push(current.data);
    }
    return result;
};

const depthFirstSearch = (root) => {
    const stack = [root];
    const result = [];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current.right) {
            stack.push(current.right);
        }
        if (current.left) {
            stack.push(current.left);
        }
        result.push(current.data);
    }
    return result;
};

const minValue = function(root) {
    if (!root) return Infinity;
    const minLeft = minValue(root.left);
    const minRight = minValue(root.right);
    return Math.min(root.data, minLeft, minRight);
};

const maxPathSum = (root)=>{
    if (!root) return -Infinity;
    if (!root.left && !root.right) return root.data;
    const maxLeft = maxPathSum(root.left);
    const maxRight = maxPathSum(root.right);

    return root.data + Math.max(maxRight, maxLeft);
};


console.log('-----------------BFS------------------');
console.log(breadthFirstSearch(bst));
console.log('-----------------DFS------------------');
console.log(depthFirstSearch(bst));
console.log('----------In Order Traversal----------');
inOrderTraversal(bst);
console.log('---------Pre Order Traversal----------');
preOrderTraversal(bst);
console.log('---------Post Order Traversal---------');
postOrderTraversal(bst);
console.log('----------Minimum Tree Value----------');
console.log(minValue(bst));
console.log('----------Maximum Tree Path-----------');
console.log(maxPathSum(bst));
console.log('--------------------------------------\n');

